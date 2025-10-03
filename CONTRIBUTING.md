# Contributing to Move Fast and Break Things

Thank you for your interest in contributing to the MFBT website! We welcome contributions from everyone.

## Ways to Contribute

### 1. Report Bugs
If you find a bug, please open an issue with:
- A clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS)

### 2. Suggest Features
Have an idea for a new feature? Open an issue with:
- Clear description of the feature
- Why it would be valuable
- Examples of how it might work

### 3. Write Blog Posts
We encourage community members to share their knowledge:
1. Create a new `.md` file in `public/blog/`
2. Add frontmatter (see Blog section in README)
3. Write your content in Markdown
4. Update `src/pages/Blog.tsx` with post metadata
5. Submit a PR

### 4. Code Contributions

#### Getting Started
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/movefastandbreakthings.club.git
cd movefastandbreakthings.club

# Install dependencies
npm install

# Fetch GitHub data (optional)
node scripts/fetch-github-data.js

# Start dev server
npm run dev
```

#### Making Changes
1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test locally
4. Commit with clear messages
5. Push to your fork
6. Open a Pull Request

#### Code Style
- Use TypeScript for type safety
- Follow existing code patterns
- Use Tailwind CSS for styling (semantic tokens from design system)
- Keep components small and focused
- Add comments for complex logic

#### Design Guidelines
- Use semantic color tokens from `src/index.css`
- All colors must be HSL format
- Prefer design system tokens over hardcoded values
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes
- Add animations for better UX

### 5. Documentation
Help improve our docs:
- Fix typos or unclear explanations
- Add examples
- Improve setup instructions
- Document new features

## Pull Request Process

1. **Update the README** if you're adding features
2. **Test your changes** thoroughly
3. **Keep PRs focused** - one feature/fix per PR
4. **Write clear commit messages**:
   ```
   feat: Add blog post pagination
   fix: Resolve mobile menu bug
   docs: Update contributing guide
   style: Improve button hover effects
   ```
5. **Link related issues** in PR description
6. **Be responsive** to feedback

## Development Workflow

### Branch Naming
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `style/` - UI/styling changes
- `refactor/` - Code refactoring

### Commit Messages
Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Community Guidelines

- Be respectful and kind
- Help others learn and grow
- Give constructive feedback
- Celebrate successes together
- Ask questions freely

## Need Help?

- Check existing issues and PRs
- Read the README and docs
- Ask in discussions
- Join our Discord (coming soon)

## Recognition

Contributors will be:
- Listed in our contributors page (coming soon)
- Credited in release notes
- Appreciated in our community

---

**Remember**: Move fast, break things, learn, and help others! 🚀
