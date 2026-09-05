# Astro Theme: Mate 🧉

[![Build](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml/badge.svg?branch=master)](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/048d0e6b-f5c6-437d-bdca-2fd7adf66a7a/deploy-status)](https://app.netlify.com/sites/astro-mate/deploys)

> An accessible and fast portfolio starter for Astro, for Developers and Tech Writers.

## [✨ Demo](https://astro-mate.netlify.app/)

## Screenshots 📸

Captured from the [live demo](https://astro-mate.netlify.app/) with [shot-scraper](https://github.com/simonw/shot-scraper). Light and dark run as parallel CI jobs via [`shots-light.yml`](shots-light.yml) / [`shots-dark.yml`](shots-dark.yml) (workflow: [`.github/workflows/screenshots.yml`](.github/workflows/screenshots.yml)). Home and Projects (DaisyUI `data-theme`).

| Light | Dark |
| ----- | ---- |
| ![Home - Light](screenshots/home-light.png) | ![Home - Dark](screenshots/home-dark.png) |
| ![Projects - Light](screenshots/projects-light.png) | ![Projects - Dark](screenshots/projects-dark.png) |


## Project Overview 👨‍💻

- [Astro](https://astro.build/) with Typescript support
- Icons from [Iconify](https://iconify.design/)
- [Daisy UI](https://daisyui.com/) as the component library (powered by [Tailwind](https://tailwindcss.com/))
- [Github Gist](https://gist.github.com/) as CMS for simplicity and transparency
- [DevTo](https://dev.to/) API Integration
- Schema validation with [Zod](https://github.com/colinhacks/zod) and automatic schema generation [ts-to-zod](https://github.com/fabien0102/ts-to-zod)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `yarn`         | Installs dependencies                        |
| `yarn dev`     | Starts local dev server at `localhost:3000`  |
| `yarn build`   | Build your production site to `./dist/`      |
| `yarn preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
