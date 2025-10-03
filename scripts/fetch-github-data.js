#!/usr/bin/env node

/**
 * Fetch GitHub data at build time to avoid runtime API calls and rate limits
 * This script fetches organization members and can be extended to fetch project data
 */

const fs = require('fs');
const path = require('path');

const ORG_NAME = 'move-fast-and-break-things';
const OUTPUT_DIR = path.join(__dirname, '../public/data');

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add GITHUB_TOKEN if available (for higher rate limits)
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retry ${i + 1}/${retries} for ${url}`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

async function fetchCreators() {
  console.log('Fetching organization members...');
  
  try {
    const members = await fetchWithRetry(
      `https://api.github.com/orgs/${ORG_NAME}/members`
    );

    const creatorsData = await Promise.all(
      members.map(async (member) => {
        console.log(`Fetching data for ${member.login}...`);
        const userData = await fetchWithRetry(member.url);
        return {
          name: userData.name || userData.login,
          bio: userData.bio,
          avatar: userData.avatar_url,
          html_url: userData.html_url,
          login: userData.login,
        };
      })
    );

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Write creators data
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'creators.json'),
      JSON.stringify(creatorsData, null, 2)
    );

    console.log(`✅ Successfully fetched ${creatorsData.length} creators`);
    return creatorsData;
  } catch (error) {
    console.error('❌ Error fetching creators:', error.message);
    // Create empty file so build doesn't fail
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'creators.json'),
      JSON.stringify([], null, 2)
    );
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting GitHub data fetch...\n');
  
  try {
    await fetchCreators();
    console.log('\n✅ All data fetched successfully!');
  } catch (error) {
    console.error('\n❌ Data fetch failed:', error.message);
    process.exit(1);
  }
}

main();
