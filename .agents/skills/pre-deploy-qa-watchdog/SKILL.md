---
name: pre-deploy-qa-watchdog
description: >-
  Pre-push quality assurance checklist and automated verification commands for
  portfolio-alpha to catch broken asset paths, build failures, leaked secrets,
  and multi-page resume regressions before deploying to Vercel.
---

# Pre-Deploy QA Watchdog (`portfolio-alpha`)

Run this verification workflow before every `git push origin main`:

## 1. Production Build & Asset Path Check

Run the production build and verify that `build/index.html` uses root-relative `/static/` paths (never `./static/`):

```powershell
npm run build
Select-String -Path "build\index.html" -Pattern 'src="/static/'
```

If `src="./static/` appears anywhere in `build/index.html`, **stop** and fix `"homepage": "/"` in `package.json` immediately.

## 2. Routing & Rewrite Verification

- Confirm `vercel.json` exists and excludes `/static/` and `.*\\..*`.
- Confirm every `slug` in `src/shared/opensource/projects.json` is unique and URL-safe (`[a-z0-9-]+`).

## 3. Resume PDF Integrity (If Resume Was Modified)

- Confirm `public/Ameya_Sharma_Resume.pdf` and `src/assets/docs/Ameya_Sharma_Resume.pdf` have identical SHA256 hashes and strictly **1 page** (`Page count: 1`).

## 4. Security & Cleanliness

- Run `git status` to ensure no `.env`, API keys, temporary scripts, or `scratch/` artifacts are staged.
