# StackForge Labs — website

Marketing site for StackForge Labs, a custom .NET & React software studio.
Next.js 16 + React 19 + Tailwind v4, statically exported and deployed to GitHub Pages.

## Edit content
All copy lives in `lib/site.ts` (name, tagline, email, LinkedIn, services, stack).
Change your **email** and **LinkedIn URL** there before going live.

## Run / build
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export -> ./out
```

## Deploy
Repo Settings → Pages → Source: GitHub Actions. Pushes to `main` auto-deploy to
`https://<user>.github.io/stackforge-labs/`.
