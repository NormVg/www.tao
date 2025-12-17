# Getting Started with COOK CLI

COOK is a powerful command-line tool that simplifies your development workflow. In this guide, we'll walk through basic usage and examples.

## Installation

To install COOK, run:

```bash
npm install -g @thealphaones/cook
```

Or using curl:

```bash
curl -fsSL https://cook.taohq.org/install.sh | sh
```

## Basic Commands

### Initialize a New Project

```bash
cook init my-project --template react
```

This creates a new React project with the following structure:

```
my-project/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

### Running Tasks

You can define custom tasks in `cook.config.json`:

```json
{
  "tasks": {
    "dev": "npm run dev",
    "build": "npm run build",
    "deploy": "npm run build && cook tunnel"
  }
}
```

Then run them with:

```bash
cook run dev
```

## Creating Custom Recipes

Here's an example recipe in JavaScript:

```javascript
// cook-recipes/api-endpoint.js
module.exports = {
  name: 'api-endpoint',
  description: 'Generate a new API endpoint',

  async execute({ name, method = 'GET' }) {
    const code = `
export async function ${method.toLowerCase()}${name}(req, res) {
  try {
    // Your logic here
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
    `.trim();

    return {
      file: `api/${name}.js`,
      content: code
    };
  }
};
```

## Advanced Example: TypeScript Configuration

For TypeScript projects, COOK auto-configures your `tsconfig.json`:

```typescript
// Generated tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Python Integration

COOK also supports Python projects:

```python
# cook.py
from cook import Recipe, task

@task(name='setup')
def setup_environment():
    """Set up Python virtual environment"""
    import subprocess
    subprocess.run(['python', '-m', 'venv', 'venv'])
    print("✅ Virtual environment created!")

@task(name='install')
def install_dependencies():
    """Install project dependencies"""
    subprocess.run(['pip', 'install', '-r', 'requirements.txt'])
```

## What's Next?

Check out our [documentation](https://cook.taohq.org/docs) for more advanced features like:
- Plugin development
- Custom templates
- CI/CD integration
- Cloud deployments

Happy cooking! 🍳
