# TheAlphaOnes Website

The official website for TheAlphaOnes - a startup building developer tools, AI projects, and fostering a creative community.

## Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Vanilla CSS with custom design system
- **Animations**: motion-v (Motion One for Vue)
- **Database**: Drizzle ORM with PostgreSQL
- **Icons**: Lucide Vue Next
- **Markdown**: Marked with Highlight.js

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Database

```bash
# Open Drizzle Studio
pnpm db
```

## 📝 Blog Management

The blog system uses markdown files stored in `/public/md/` for content management.

### Adding a New Blog Post

#### 1. Create the Markdown File

Create a new `.md` file in `/public/md/` with your post slug as the filename:

```bash
/public/md/your-post-slug.md
```

**Example structure:**

```markdown
# Your Post Title

Introduction paragraph...

## Section 1

Content here...

### Code Examples

\`\`\`javascript
// Your code here
const example = "Hello World";
console.log(example);
\`\`\`

## Section 2

More content...
```

#### 2. Add Post Metadata to Config

Edit `/utils/blog.config.js` and add your post entry:

```javascript
const blogPosts = [
  {
    id: 'your-post-slug',                    // Must match filename
    title: 'Your Post Title',
    excerpt: 'A short description...',       // Shows in card preview
    mdFile: '/md/your-post-slug.md',        // Path to markdown file
    author: 'TheAlphaOnes Team',
    date: '2025-01-20',                      // YYYY-MM-DD format
    readTime: '5 min read',
    tags: ['Tag1', 'Tag2', 'Tag3']          // Up to 3 tags recommended
  },
  // ... other posts
]
```

#### 3. Supported Markdown Features

- **Headers**: `# H1`, `## H2`, `### H3`, etc.
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Lists**: Ordered (`1.`) and unordered (`-`)
- **Code blocks**: Triple backticks with language
- **Inline code**: Single backticks
- **Blockquotes**: `> quote`

#### 4. Code Syntax Highlighting

Code blocks support syntax highlighting for multiple languages:

\`\`\`javascript
// JavaScript example
const greeting = "Hello World";
\`\`\`

\`\`\`python
# Python example
def hello():
    print("Hello World")
\`\`\`

\`\`\`bash
# Bash commands
npm install package-name
\`\`\`

Supported languages include: JavaScript, TypeScript, Python, Bash, JSON, CSS, HTML, and more.

### Editing Existing Posts

1. Locate the markdown file in `/public/md/your-post-slug.md`
2. Edit the content
3. (Optional) Update metadata in `/utils/blog.config.js` if needed
4. Changes are reflected immediately in development mode

### Blog Post Order

Posts are displayed in the order they appear in `blog.config.js`. The **first 2 posts** are featured on the home page.

### Best Practices

- **Use descriptive slugs**: `getting-started-with-cook` not `post1`
- **Keep excerpts concise**: 1-2 sentences max
- **Choose relevant tags**: Max 3 tags for clean display
- **Date format**: Always use `YYYY-MM-DD`
- **Code blocks**: Always specify language for proper highlighting
- **Images**: Place in `/public/images/blog/` and reference as `/images/blog/filename.png`

### Example Blog Post Template

Create `/public/md/example-post.md`:

```markdown
# Getting Started with Our Product

A brief introduction to what this post covers...

## Installation

Step-by-step installation guide:

\`\`\`bash
npm install @example/package
\`\`\`

## Usage

Here's how to use it:

\`\`\`javascript
import { feature } from '@example/package';

const result = feature({
  option1: true,
  option2: 'value'
});
\`\`\`

## Advanced Features

- Feature 1: Description
- Feature 2: Description

## Conclusion

Wrap up your post here...
```

Then add to `blog.config.js`:

```javascript
{
  id: 'example-post',
  title: 'Getting Started with Our Product',
  excerpt: 'Learn how to install and use our product with practical examples.',
  mdFile: '/md/example-post.md',
  author: 'TheAlphaOnes Team',
  date: '2025-01-20',
  readTime: '6 min read',
  tags: ['Tutorial', 'Getting Started', 'Guide']
}
```

## Design System

### Colors

```css
--pink: #e0a0a8      /* Accent color */
--blue: #a78bfa      /* Secondary accent */
--green: #00FF87     /* Highlight */
--yellow: #D6BC7F    /* Warm accent */
```

### Typography

- **Display**: Italianno (cursive)
- **Body**: K2D (sans-serif)
- **Code**: JetBrains Mono, Fira Code

### Border Radius Signature

Asymmetric corners: `border-radius: 8px 25px 8px 25px`

## Deployment

The site is configured for Vercel deployment with analytics enabled.

---

Made with ❤️ by [TheAlphaOnes](https://www.taohq.org)
