---
outline: deep
---

# Installation Guide <Badge type="tip" text="^1.9.0" />

Welcome to the official installation guide for **Rock** — the ultimate app generator that helps developers build, deploy, and scale apps with the least effort.

In this guide, you'll learn how to install, configure, and launch your first Rock-powered app — complete with built-in CI/CD.

---

## Requirements

Before starting, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git (optional but recommended)

---

## Install Rock CLI

Install the Rock CLI globally using npm:

```bash
npm install -g create-rock
```

Or with Yarn:

```bash
yarn global add create-rock
```

---

## Create a New Rock App

Generate a new project:

```bash
create-rock my-app
```

You’ll be prompted to choose:

- A template (e.g. dashboard, portfolio, SaaS)
- Framework (Vue, React, Solid)
- Services (CI/CD, DB, Auth, Payments)

Once complete, Rock sets up your frontend, backend, and automated deployment pipelines.

---

## Run Locally

Navigate into your app folder:

```bash
cd my-app
npm run dev
```

Visit your app at [http://localhost:3000](http://localhost:3000).

---

## One-Click Deployment

You can deploy to:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Your VPS**

To deploy with GitHub Pages:

```bash
npm run build
npm run deploy
```

> Need a CI/CD pipeline? Rock will auto-generate one using GitHub Actions, complete with staging and production environments.

---

## Tips

::: tip
`rock config` — adjust build, deploy, and UI settings
:::

::: tip
`rock doctor` — fix common issues automatically
:::

::: tip
`rock plugins` — extend with custom integrations
:::

## What’s Next?

- [See API Examples](/api-examples)
- [Customize Your App](/customization)
- [Explore the Plugin Directory](/plugins)

---

> Need help? Join our [Discord](https://discord.gg/rock) or open an [issue on GitHub](https://github.com/rutch3/VitePress/issues).

Let **Rock** help you build and deploy with confidence!
