# MFBT Hugo Site

This is the Hugo version of the Move Fast and Break Things website.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.120.0 or later
- [Node.js](https://nodejs.org/) v18 or later (for Tailwind CSS processing)
- npm or yarn

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Fetch GitHub data:**
   ```bash
   HUGO_BUILD=1 node scripts/fetch-github-data.js
   ```

3. **Run Hugo development server:**
   ```bash
   hugo server -D
   ```

4. **Build for production:**
   ```bash
   HUGO_BUILD=1 node scripts/fetch-github-data.js
   hugo --minify
   ```

## Project Structure

```
.
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS entry point
├── content/
│   ├── _index.md             # Homepage content
│   └── blog/                 # Blog posts
│       ├── _index.md
│       └── *.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base template
│   │   ├── list.html         # List page template
│   │   └── single.html       # Single page template
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   ├── mission.html
│   │   ├── projects.html
│   │   ├── creators.html
│   │   └── join.html
│   └── index.html            # Homepage template
├── static/
│   └── data/
│       └── creators.json     # GitHub creators data
├── config.toml               # Hugo configuration
└── tailwind.config.js        # Tailwind configuration
```

## Key Features

### 🎨 Futuristic Dark Theme
- Deep space background (gray-950)
- Cyan and blue neon accents
- Glassmorphism effects
- 3D hover animations
- Gradient text and borders

### 📝 Blog System
- Markdown-based content
- Author attribution
- Tags and categories
- Beautiful syntax highlighting
- Previous/next navigation

### 👥 Dynamic Creators
- Fetches data from GitHub API at build time
- Displays organization members
- Avatars and bios
- Links to GitHub profiles

### 🚀 Performance
- Static site generation
- Asset fingerprinting
- Minified CSS/JS
- Optimized images
- Fast page loads

## Configuration

Edit `config.toml` to customize:

```toml
baseURL = "https://movefastandbreakthings.club/"
title = "Move Fast and Break Things"

[params]
  description = "Your description"
  github_org = "move-fast-and-break-things"
```

## Adding Blog Posts

Create a new Markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2024-03-15
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

### GitHub Pages

1. Build the site:
   ```bash
   HUGO_BUILD=1 node scripts/fetch-github-data.js
   hugo --minify
   ```

2. Deploy the `public/` directory

### Netlify

1. Set build command: `HUGO_BUILD=1 node scripts/fetch-github-data.js && hugo --minify`
2. Set publish directory: `public`
3. Hugo version: Set in `netlify.toml` or environment variables

### Vercel

1. Framework preset: Hugo
2. Build command: `HUGO_BUILD=1 node scripts/fetch-github-data.js && hugo --minify`
3. Output directory: `public`

## Development Tips

### Live Reload

Hugo's built-in server includes live reload:
```bash
hugo server -D
```

### Draft Posts

Create draft posts that won't be published:
```markdown
---
title: "Draft Post"
draft: true
---
```

View drafts in development: `hugo server -D`

### Tailwind CSS

The Tailwind config is optimized for Hugo. Classes are purged automatically based on the `content` paths defined in `tailwind.config.js`.

### Alpine.js

Interactive components use Alpine.js (loaded from CDN). For mobile menu, scroll effects, etc.

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  // Your custom colors
}
```

### Fonts

Fonts are loaded from Google Fonts in `layouts/_default/baseof.html`:
- Space Grotesk (body text)
- JetBrains Mono (headings, code)

### Layout

Modify partials in `layouts/partials/` to change sections:
- `hero.html` - Hero section
- `mission.html` - Mission/values
- `projects.html` - Featured projects
- `creators.html` - Team members
- `join.html` - CTA section

## Troubleshooting

### CSS not updating

Clear Hugo's cache:
```bash
hugo --gc
rm -rf public/ resources/
```

### Creators not loading

Ensure the data file exists:
```bash
HUGO_BUILD=1 node scripts/fetch-github-data.js
ls static/data/creators.json
```

### Build errors

Check Hugo version:
```bash
hugo version
```

Ensure you're using Hugo Extended.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `hugo server`
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

Join our community:
- GitHub: [move-fast-and-break-things](https://github.com/move-fast-and-break-things)
- Discord: [Link TBD]

---

Built with ⚡ by the MFBT community
