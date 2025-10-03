# Move Fast and Break Things

🚀 The official website for the Move Fast and Break Things community.

## About

Move Fast and Break Things (MFBT) is a community of developers, creators, and innovators who believe in rapid iteration, learning from failures, and building amazing projects together.

## Project info

**URL**: https://lovable.dev/projects/21b97b8d-a1d1-4c04-aabc-dcc372a09c2d

## Features

- 🎨 Modern, responsive design built with React + TypeScript + Tailwind CSS
- 📱 Mobile-first approach with smooth animations
- 📝 Markdown-based blog system with multiple author support
- 🔧 Build-time GitHub data fetching to avoid rate limits
- ⚡ Optimized for GitHub Pages deployment
- 🎯 SEO optimized with semantic HTML
- ✨ Beautiful hover effects and micro-interactions

## Development

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/21b97b8d-a1d1-4c04-aabc-dcc372a09c2d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i

# Step 4: (Optional) Fetch GitHub data for creators
# This fetches organization members at build time to avoid runtime API limits
node scripts/fetch-github-data.js

# Step 5: Start development server
npm run dev
```

### Build-Time Data Fetching

To avoid GitHub API rate limits and improve performance, you can fetch creator data at build time:

```bash
node scripts/fetch-github-data.js
```

This creates a `public/data/creators.json` file. If you have a GitHub token for higher rate limits, set the `GITHUB_TOKEN` environment variable:

```bash
GITHUB_TOKEN=your_token_here node scripts/fetch-github-data.js
```

The site will fallback to runtime API calls if the static data file doesn't exist.

## Blog System

Blog posts are stored as Markdown files in `public/blog/`. Each post requires frontmatter:

```markdown
---
title: Your Post Title
author: Your Name
authorUrl: https://github.com/yourname
date: 2025-10-03
excerpt: A short description of your post
image: https://example.com/image.jpg
---

Your markdown content here...
```

To add a new blog post:
1. Create a new `.md` file in `public/blog/`
2. Add the frontmatter at the top
3. Write your content in Markdown
4. Update the posts array in `src/pages/Blog.tsx` to include your post metadata

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Tech Stack

This project is built with:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **Markdown**: react-markdown + gray-matter
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations + custom keyframes

## Deployment

### Via Lovable (Recommended)

Simply open [Lovable](https://lovable.dev/projects/21b97b8d-a1d1-4c04-aabc-dcc372a09c2d) and click on Share → Publish.

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow that automatically:
1. Fetches GitHub data at build time
2. Builds the static site
3. Deploys to GitHub Pages

Simply push to the `main` branch and GitHub Actions handles the rest.

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy the `dist` folder to your hosting provider
```

## Custom Domain

Yes, you can connect a custom domain!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or writing blog posts:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Community

- 🌐 [Website](https://movefastandbreakthings.club)
- 💬 Discord - Join us!
- 🐙 [GitHub Organization](https://github.com/move-fast-and-break-things)

## License

MIT License - feel free to use this project as inspiration for your own community website!

---

**Remember**: The only real failure is not trying. Move fast, break things, and learn! 🚀
