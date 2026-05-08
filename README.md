# Antoine Tabet · Portfolio

> Source for my personal site. Project gallery, photo journal, a poetry section in three languages, and a downloadable resume. Built on Next.js 15 with Framer Motion for the page transitions.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-animations-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
![Last commit](https://img.shields.io/github/last-commit/tabetant/my-portfolio?style=flat-square)

## ✨ What's on the site
- **Project gallery.** Cards for the projects I want to surface, each linking to the live deployment or source repo.
- **Photo journal.** Snapshots from travel and life around Toronto, with smooth page transitions.
- **Poetry section.** Three-language poetry (English, French, Spanish) from *Heartstrings Unplayed*, formatted for reading on phone or desktop.
- **Resume downloads.** PDFs in `resumés/`, served directly without a CMS.
- **Vercel Analytics.** Lightweight visitor stats, no third-party trackers.

## 🛠 Stack
- Next.js 15 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v3.4
- Framer Motion for transitions and micro-interactions
- Radix Slot primitive, Lucide icons
- Vercel Analytics, deployed on Vercel

## 🚀 Run it locally

```bash
git clone https://github.com/tabetant/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Then open `http://localhost:3000`.

## 📁 Folder layout

```
src/app/         # App Router pages (home, projects, photos, poetry, resume)
src/components/  # Shared UI components
src/lib/         # Helpers (formatters, content loaders)
photos/          # Photo journal images
poetry/          # Poetry content
resumés/         # PDF resume downloads
Media/           # Misc media assets
```

## 🌐 Live site

[antoinetabet.vercel.app](https://antoinetabet.vercel.app)

## 👤 Author

**Antoine Tabet**, UofT Computer Engineering
[LinkedIn](https://linkedin.com/in/antoinetabetuoft) · [antoine.tabet@mail.utoronto.ca](mailto:antoine.tabet@mail.utoronto.ca) · [GitHub](https://github.com/tabetant)
