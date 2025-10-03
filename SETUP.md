# Setup Instructions

Complete guide to setting up the MFBT website for development and deployment.

## Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn
- Git
- (Optional) GitHub Personal Access Token for higher API rate limits

## Quick Start

```bash
# Clone the repository
git clone https://github.com/move-fast-and-break-things/movefastandbreakthings.club.git
cd movefastandbreakthings.club

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Build-Time Data Fetching

### Why?
Fetching GitHub data at build time:
- Avoids runtime API rate limits (60 requests/hour unauthenticated)
- Improves page load performance
- Provides fallback for offline development

### How to Use

```bash
# Basic usage (60 requests/hour limit)
node scripts/fetch-github-data.js

# With GitHub token (5,000 requests/hour limit)
GITHUB_TOKEN=your_token_here node scripts/fetch-github-data.js
```

### Getting a GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "MFBT Build")
4. No scopes needed (public data only)
5. Copy the token and save it securely

### Environment Variables

Create a `.env` file (optional):
```
GITHUB_TOKEN=your_token_here
```

Then run:
```bash
node scripts/fetch-github-data.js
```

## Blog System

### Creating a Blog Post

1. Create a new Markdown file in `public/blog/`:
```bash
touch public/blog/my-awesome-post.md
```

2. Add frontmatter:
```markdown
---
title: My Awesome Post Title
author: Your Name
authorUrl: https://github.com/yourusername
date: 2025-10-03
excerpt: A brief description of your post
image: https://example.com/cover-image.jpg
---

Your content starts here...
```

3. Update `src/pages/Blog.tsx` to include your post in the posts array:
```typescript
const postsData: BlogPost[] = [
  // ... existing posts
  {
    slug: 'my-awesome-post',
    title: 'My Awesome Post Title',
    author: 'Your Name',
    authorUrl: 'https://github.com/yourusername',
    date: '2025-10-03',
    excerpt: 'A brief description of your post',
    image: 'https://example.com/cover-image.jpg',
  },
];
```

### Markdown Features

Supports GitHub Flavored Markdown:
- Headers (`#`, `##`, `###`)
- **Bold** and *italic* text
- [Links](https://example.com)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Task lists

### Finding Cover Images

Free high-quality image sources:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

## Development Tips

### Hot Reload
Changes to most files trigger automatic reload. If not:
1. Check browser console for errors
2. Restart dev server: `Ctrl+C` then `npm run dev`

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Styling
- Use semantic tokens from `src/index.css`
- All colors must be HSL: `hsl(var(--primary))`
- Never hardcode colors like `text-white` or `bg-black`
- Test in dark mode (default)

### Testing Responsive Design
- Use browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on: Mobile (375px), Tablet (768px), Desktop (1440px)

## Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

Build output goes to `dist/` folder.

## Deployment

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow:
1. Push to `main` branch
2. Actions automatically build and deploy
3. Site available at your GitHub Pages URL

Enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. Save

### Manual Deployment

```bash
# Build
npm run build

# Deploy dist/ folder to your hosting service
# Examples:
# - Netlify: drag & drop dist/ folder
# - Vercel: connect GitHub repo
# - Cloudflare Pages: connect GitHub repo
```

### Environment Variables for Deployment

For automated builds with GitHub data:
1. Add `GITHUB_TOKEN` secret to repository
2. Go to Settings → Secrets → New repository secret
3. Name: `GITHUB_TOKEN`
4. Value: Your GitHub personal access token

## Troubleshooting

### GitHub API Rate Limit
**Problem**: "API rate limit exceeded" error

**Solutions**:
1. Use a GitHub token (see above)
2. Pre-fetch data: `node scripts/fetch-github-data.js`
3. Site will fallback to runtime API calls

### Port Already in Use
**Problem**: "Port 8080 is already in use"

**Solution**:
```bash
# Kill process on port 8080 (Linux/Mac)
lsof -ti:8080 | xargs kill

# Or change port in vite.config.ts
```

### Module Not Found
**Problem**: "Cannot find module"

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
**Problem**: Build errors during `npm run build`

**Solutions**:
1. Check TypeScript errors: `npx tsc --noEmit`
2. Clear cache: `rm -rf dist .vite`
3. Update dependencies: `npm update`

## Advanced Configuration

### Custom Domain
See [Lovable Docs](https://docs.lovable.dev/features/custom-domain)

### Analytics
Add analytics in `index.html`:
```html
<!-- Google Analytics example -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### SEO
Site includes:
- ✅ Semantic HTML
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Responsive viewport

Consider adding:
- Sitemap generator
- robots.txt updates
- Structured data for blog posts

## Getting Help

- 📖 Read the [README](./README.md)
- 🤝 Check [CONTRIBUTING](./CONTRIBUTING.md)
- 💬 Join our Discord (coming soon)
- 🐛 Open an issue on GitHub

---

Happy coding! Remember to move fast and break things! 🚀
