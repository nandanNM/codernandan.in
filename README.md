<div align="center">

# [codernandan.in](https://codernandan.in)

My personal portfolio, blog, and playground on the web.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://assets.codernandan.in/images/screenshot-desktop-dark.webp">
  <img alt="codernandan.in screenshot" src="https://assets.codernandan.in/images/screenshot-desktop-light.webp" width="720">
</picture>

</div>

## About me

Hi, I'm **Nandan Manna** — a Full Stack Developer & AI Engineer with 2+ years of experience.

- 🧠 AI Intern @ [Lyzr.AI](https://www.lyzr.ai) · SDE @ CareerCafe
- 🚀 Creator of [LeetMaster](https://leetmaster.in) and [Crazxy UI](https://crazxyui.in)
- 📍 Kolkata, West Bengal, India
- 🔗 [LinkedIn](https://linkedin.com/in/codernandan) · [X](https://x.com/coder_nandan) · [GitHub](https://github.com/nandanNM)

## About this project

A fast, minimal, detail-obsessed portfolio built with the Next.js App Router. Everything is data-driven — bio, experience, projects, and socials live in typed data files under `src/features/profile/data/`.

### Features

- ⏰ Time-based greeting with an animated hand-drawn underline in the bio
- 🪪 Social pills with profile hover cards — the GitHub card fetches **live stats** from the GitHub API
- 🎨 Theme switch with a View Transitions circle-reveal animation
- 🧵 Interactive plucked-string divider (bends, springs back, and plays a note)
- 🎵 Floating music player with an animated equalizer icon
- 🐱 Oneko cat that follows your cursor — 4 sprite variants picked at random, including a custom one recolored to my avatar's palette
- 👁 Unique visitor counter with an animated number
- 📈 GitHub contribution heatmap
- 📱 PWA-ready with install screenshots, RSS, sitemap, `llms.txt`, and vCard

### Tech stack

**Next.js 15** · **React 19** · **TypeScript** · **Tailwind CSS v4** · Radix UI · Motion (Framer) · MDX blog via `next-mdx-remote` · pnpm · Vercel

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:1408
pnpm build      # production build
```

## Project structure

```
src/
├── app/                  # App Router pages, API routes, manifest, OG images
├── components/           # Shared UI (nav, buttons, tooltip card, music player…)
├── features/profile/     # Portfolio feature: components + typed data files
├── config/               # Site config
├── hooks/                # use-visitor-count, use-github-profile…
└── styles/               # Tailwind v4 globals, patterns, animations
```

## Credits

- Design heavily inspired by [chanhdai.com](https://chanhdai.com) by [@ncdai](https://github.com/ncdai) and [rinkitadhana.com](https://therinkit.com)
- Oneko sprites from [kyrie25/spicetify-oneko](https://github.com/kyrie25/spicetify-oneko)
- Icons from [Lucide](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/), and [SVG Spinners](https://github.com/n3r4zzurr0/svg-spinners)

---

<div align="center">

Built with ☕ by <a href="https://codernandan.in">Nandan Manna</a>

</div>
