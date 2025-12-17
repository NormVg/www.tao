# Getting Started with COOK CLI

COOK is a powerful command-line tool that simplifies your development workflow. In this guide, we'll walk through everything you need to know to get up and running with COOK.

## What You'll Learn

- How to install COOK
- Basic commands and workflows
- Creating projects from templates
- Managing custom templates
- Running task groups
- Setting up custom utilities

## Installation

COOK is quick and easy to install. Choose your preferred method:

### Quick Install (Recommended)

```bash
curl -sSL https://cook.taohq.org/install | sh
```

This will download and install the latest version of COOK on your system.

### Manual Installation

Visit [docs.taohq.org](https://docs.taohq.org/docs/COOK/cook-installation) for platform-specific installation instructions and alternative methods.

### Verify Installation

After installation, verify COOK is working:

```bash
cook version
```

You should see the current version of COOK displayed.

## Your First Project with COOK

Let's create your first project using COOK's powerful template system.

### Step 1: Browse Available Templates

COOK comes with built-in templates for common project types:

```bash
cook mold list
```

This shows all available templates you can use.

### Step 2: Create a Project

Let's create a new React application with TypeScript:

```bash
cook bake my-react-app --template=react-typescript
```

COOK will:
- Create a new directory called `my-react-app`
- Set up the entire project structure
- Install dependencies
- Configure everything you need

### Step 3: Navigate and Explore

```bash
cd my-react-app
ls -la
```

You'll see a fully configured project, ready to go.

## Understanding COOK Commands

COOK organizes its functionality into logical commands. Here's what each one does:

### Project Creation: `cook bake`

Create new projects from templates:

```bash
# Create from official template
cook bake my-app --template=next-js

# Create from custom template
cook bake my-api --template=my-custom-api
```

### Template Management: `cook mold`

Manage and create templates:

```bash
# List available templates
cook mold list

# Create a template from current project
cook mold create my-template

# Remove a template
cook mold remove old-template
```

### Project Initialization: `cook init`

Initialize COOK in an existing project:

```bash
cd existing-project
cook init
```

This creates a `.cook` configuration file in your project.

### Running Tasks: `cook run`

Execute defined task groups:

```bash
# Run development server
cook run dev

# Run build process
cook run build

# Run tests
cook run test

# Run custom task group
cook run deploy:production
```

### Custom Commands: `cook cmd`

Execute project-specific utilities:

```bash
# Run database migrations
cook cmd db:migrate

# Seed database
cook cmd db:seed

# Clear cache
cook cmd cache:clear
```

### Authentication: `cook auth`

Manage authentication:

```bash
# Login to COOK services
cook auth login

# View current auth status
cook auth status

# Logout
cook auth logout
```

### Developer Tools: `cook tool`

Access built-in utilities:

```bash
# Start local tunnel
cook tool tunnel

# Generate secure key
cook tool keygen

# And more...
```

## Setting Up Your Project

Let's configure COOK for your specific workflow.

### Creating a `.cook` Configuration

When you run `cook init`, COOK creates a `.cook/cook.json` file:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "tasks": {
    "dev": ["npm install", "npm run dev"],
    "build": ["npm run build"],
    "test": ["npm run test"],
    "deploy": [
      "npm run build",
      "cook cmd upload:dist"
    ]
  },
  "commands": {
    "db:migrate": "node scripts/migrate.js",
    "db:seed": "node scripts/seed.js"
  }
}
```

Now you can run:

```bash
cook run dev       # Runs install + dev server
cook run deploy    # Builds and deploys
cook cmd db:migrate # Runs migration script
```

## Creating Custom Templates

One of COOK's most powerful features is custom templates. Here's how to create one:

### Step 1: Set Up Your Template Project

Create a project with the structure you want:

```bash
mkdir my-template-project
cd my-template-project
# Add your files, configs, etc.
```

### Step 2: Create the Template

```bash
cook mold create my-awesome-template
```

### Step 3: Use Your Template

```bash
cd ..
cook bake new-project --template=my-awesome-template
```

Your custom template is now reusable across all your projects!

## Real-World Workflow Example

Here's a complete workflow showing how COOK streamlines development:

```bash
# 1. Create a new full-stack app
cook bake my-saas-app --template=nextjs-prisma

# 2. Navigate into project
cd my-saas-app

# 3. Set up database
cook cmd db:migrate
cook cmd db:seed

# 4. Start development
cook run dev
```

Instead of:
- Manually creating folders
- Copying boilerplate code
- Installing dependencies one by one
- Running multiple terminal commands
- Remembering complex CLI flags

You have a running application in **under 2 minutes**.

## Advanced Tips

### Combining Commands

Chain multiple task groups:

```bash
cook run build && cook run test && cook run deploy
```

### Environment-Specific Tasks

Define different tasks for different environments:

```json
{
  "tasks": {
    "dev": ["npm run dev"],
    "start:staging": ["NODE_ENV=staging npm start"],
    "start:production": ["NODE_ENV=production npm start"]
  }
}
```

### Template Variables

Create templates with placeholders that COOK fills in:

```txt
// {{projectName}}/README.md
# {{projectName}}

Created with COOK by {{author}}
```

## Getting Help

### Built-in Help

Every COOK command has built-in help:

```bash
cook --help
cook bake --help
cook mold --help
```

### Documentation

Visit [docs.taohq.org](https://docs.taohq.org) for comprehensive documentation, examples, and guides.

### Community

Join our Discord community for support, tips, and to share your COOK templates with other developers.

## Next Steps

Now that you know the basics of COOK, here are some things to try:

1. **Create your first template** - Save your favorite project setup
2. **Define custom tasks** - Automate your specific workflow
3. **Share with your team** - Standardize how your team works
4. **Explore tools** - Check out `cook tool` for built-in utilities

COOK is designed to grow with you. Start simple, and gradually customize it to match your exact workflow.

---

*Want to dive deeper? Check out our [comprehensive documentation](https://docs.taohq.org) or read about [how we built COOK](/blog/building-cook-cli).*
