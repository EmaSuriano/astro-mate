# Astro Theme: Mate

[![Build](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml/badge.svg?branch=master)](https://github.com/EmaSuriano/astro-mate/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/048d0e6b-f5c6-437d-bdca-2fd7adf66a7a/deploy-status)](https://app.netlify.com/sites/astro-mate/deploys)

> An accessible and fast portfolio starter for Astro, for Developers and Tech Writers.

## [Demo](https://astro-mate.netlify.app/)

## Screenshots 📸

Captured from the [live demo](https://astro-mate.netlify.app/) with [shot-scraper](https://github.com/simonw/shot-scraper). Light and dark run as parallel CI jobs via [`shots-light.yml`](shots-light.yml) / [`shots-dark.yml`](shots-dark.yml) (workflow: [`.github/workflows/screenshots.yml`](.github/workflows/screenshots.yml)). Home, About, Projects, and Writing (DaisyUI `data-theme`).

| Light | Dark |
| ----- | ---- |
| ![Home - Light](screenshots/home-light.png) | ![Home - Dark](screenshots/home-dark.png) |
| ![About - Light](screenshots/about-light.png) | ![About - Dark](screenshots/about-dark.png) |
| ![Projects - Light](screenshots/projects-light.png) | ![Projects - Dark](screenshots/projects-dark.png) |
| ![Writing - Light](screenshots/writing-light.png) | ![Writing - Dark](screenshots/writing-dark.png) |


## Migrating from [gatsby-starter-mate](https://github.com/EmaSuriano/gatsby-starter-mate)

Astro Mate is the successor to the Gatsby starter. Same portfolio shape (Landing, About, Projects, Writing), lighter stack.

| Gatsby Mate | Astro Mate |
| --- | --- |
| Contentful CMS | GitHub Gist JSON (site content) |
| Medium posts | Dev.to API |
| Rebass | DaisyUI + Tailwind |
| Font Awesome | Iconify |
| `gatsby new` | Clone this repo / use as Astro template |

### Demo content (Astro Theme Catalogue)

The shipped demo uses `src/content/demo-profile.json` — generic placeholder content only.

For catalogue compliance ([theme submission guide](https://hackmd.io/@sarah11918/BkbTYCRQze)):

- Social links must be **root domains** (e.g. `https://github.com`, `https://twitter.com`) — never personal usernames or invented `@theme` handles.
- Use `example.com` for any placeholder emails/URLs.
- Do not ship real personal bios, projects, or Dev.to usernames in the public demo.

### Contentful to Gist (optional)

1. Export about / projects / socials from Contentful (or start from `src/content/demo-profile.json`).
2. Create a public Gist with JSON matching `src/types.ts`.
3. Set `MATE_CONFIG_URL` to that Gist raw URL (env at build time), or edit `demo-profile.json` in-repo.
4. Redeploy. No Contentful space or API keys required.

### Medium to Dev.to (optional)

1. Publish (or cross-post) writing on Dev.to.
2. Set `devToUser` in your config JSON (leave `null` to hide Writing).
3. Astro Mate fetches posts from the Dev.to API at build time.

After you are happy with Astro Mate, archive gatsby-starter-mate and point its README here.

## Project Overview

- Astro with TypeScript
- Icons from Iconify
- DaisyUI + Tailwind
- GitHub Gist as CMS
- Dev.to writing feed
- Schema validation with Zod

## Commands

| Command | Action |
| --- | --- |
| `yarn` | Install dependencies |
| `yarn dev` | Dev server |
| `yarn build` | Production build to `./dist/` |
| `yarn preview` | Preview the production build |

## Learn more

[Astro docs](https://docs.astro.build) · [DaisyUI](https://daisyui.com/) · [Discord](https://astro.build/chat)
