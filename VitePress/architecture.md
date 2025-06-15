# Project Architecture

## Overview

This project is a documentation site built with **VitePress**. It supports multilingual content (English and Hebrew), custom theming, and uses a dedicated `docs` directory for all markdown content.

---

## Directory Structure

```md
VitePress/
├── .vitepress/           # VitePress configuration and theme overrides
│   ├── config.mts        # Main VitePress config (locales, theme, srcDir, etc.)
│   └── theme/            # Custom theme files (CSS, Layout, etc.)
│       ├── he.css        # RTL and Hebrew-specific styles
│       ├── style.css     # Global custom styles
│       ├── Layout.vue    # Custom layout logic (cookie, wrappers, etc.)
│       └── index.ts      # Theme entry point (extends default theme)
├── docs/                 # All documentation markdown files and assets
│   ├── index.md          # Home page (English)
│   ├── installation-guide.md
│   ├── our-team.md
│   ├── logo.svg          # Project logo
│   └── he/               # Hebrew content
│       ├── index.md
│       ├── installation-guide.md
│       └── our-team.md
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Lockfile
└── node_modules/         # Installed dependencies
```

---

## Main Components

### 1. `.vitepress/config.mts`

- Sets `srcDir: 'docs'` so all content is loaded from the `docs` folder.
- Defines two locales: English (`root`) and Hebrew (`he`), each with its own navigation, sidebar, and theme config.
- Customizes theme (logo, site title, nav, sidebar, social links, edit link, search, Carbon Ads, etc.).
- Sets `base` for deployment and ignores some dead links.

### 2. `.vitepress/theme/`

- **index.ts**: Extends the default VitePress theme, can register global components or slots.
- **Layout.vue**: Custom layout logic (e.g., setting cookies for language, wrapping the default layout).
- **style.css**: Global custom styles for the site.
- **he.css**: RTL and Hebrew-specific style overrides.

### 3. `docs/`

- All markdown content for the site, including the homepage, guides, and localized (Hebrew) content under `docs/he/`.
- Assets like `logo.svg` are also stored here for easy referencing.

### 4. `package.json`

- Scripts for development (`docs:dev`), build (`docs:build`), and preview (`docs:preview`).
- Lists `vitepress` and `vue` as dependencies.

---

## Flow

1. **VitePress** loads configuration from `.vitepress/config.mts`.
2. **Content** is loaded from the `docs/` directory (including subfolders for locales).
3. **Theme** is customized via `.vitepress/theme/` (CSS, layout, etc.).
4. **Build/Dev** scripts in `package.json` are used to run and deploy the site.

---

## Extensibility

- Add new languages by extending the `locales` object in `config.mts` and creating a subfolder in `docs/`.
- Add new pages by creating `.md` files in `docs/` or its subfolders.
- Customize the look and feel by editing or adding CSS/Vue files in `.vitepress/theme/`.

</rewritten_file>
