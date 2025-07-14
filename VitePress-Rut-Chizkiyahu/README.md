# VitePress Documentation Site

## 📚 What is this project?

This is a documentation website built with VitePress - a static site generator that's perfect for creating documentation sites. It's like a modern, fast, and easy-to-use tool for building websites.

## 🚀 Getting Started

### What you need to install first

1. **Node.js** (version 18 or higher)
   - This is like the engine that runs our project
   - Download from: <https://nodejs.org/>
   - Choose the "LTS" (Long Term Support) version

2. **npm** (Node Package Manager)
   - This comes automatically with Node.js
   - It helps us install and manage our project's tools

### How to set up the project

1. **Get the code**

   ```bash
   # Copy this project to your computer
   git clone https://github.com/ptr-15/sign-up-2/tree/feature/VitePress
   
   # Go into the project folder
   cd VitePress-Rut-Chizkiyahu
   ```

2. **Install the tools we need**

   ```bash
   # This will install all the necessary tools
   npm install
   ```

3. **Start the development server**

   ```bash
   # This will start a local server so you can see the website
   npm run docs:dev
   ```

   After running this command, you can open your browser and go to: `http://localhost:5173`

4. **Build the website**

   ```bash
   # This creates the final version of the website
   npm run docs:build
   
   # This lets you preview the final version
   npm run docs:preview
   ```

## 📁 Understanding the Project Structure

```md
VitePress-Rut-Chizkiyahu/
├── .vitepress/         # Contains the website's settings and theme
├── docs/              # This is where all your content goes
│   ├── he/           # Hebrew content
│   ├── index.md      # The main page
│   ├── our-team.md   # Information about the team
│   └── installation-guide.md
└── deploy.yml        # Settings for automatic website updates
```

## 🌐 What can this website do?

- 📱 **Works on all devices**: Looks good on phones, tablets, and computers
- 🌍 **Multiple languages**: Supports both English and Hebrew
- 🎨 **Custom design**: Has its own unique look and feel
- 📝 **Easy to write**: Uses simple Markdown format
- 🚀 **Fast loading**: Pages open quickly

## 🛠️ What tools are we using?

- **VitePress** (version 1.6.3): The main tool that builds our website
- **Vue.js** (version 3.5.16): Helps make the website interactive
- **Node.js** (version 18): The engine that runs everything

## 💡 Tips for Beginners

1. **Editing Content**
   - All content is in the `docs` folder
   - Files ending in `.md` are Markdown files
   - You can edit these files with any text editor

2. **Adding New Pages**
   - Create a new `.md` file in the `docs` folder
   - Use Markdown to write your content
   - The page will automatically appear in the navigation

3. **Common Issues**
   - If the website doesn't start, make sure Node.js is installed
   - If you see errors, try running `npm install` again
   - If changes don't appear, try refreshing your browser

## 📚 Learning Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Node.js Documentation](https://nodejs.org/docs/)

## 🤝 Need Help?

If you're stuck or have questions:

1. Check the [VitePress documentation](https://vitepress.dev/)
2. Look for similar issues on [GitHub](https://github.com/vuejs/vitepress/issues)
