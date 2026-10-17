---
name: deployment
description: Prepare and verify low-cost OddlyFound deployments without deploying without authorization.
---
# Deployment
- Initialize Caveman first.
- Deployment is out of scope unless explicitly requested and authorized.
- Inspect actual hosting, build settings, environment variables, DNS, branch settings, redirects, and headers.
- Cloudflare Pages is proposed, not assumed; verify configuration and current platform limits.
- Confirm production build and inspect routes, assets, metadata, sitemap, and robots.txt.
- Never commit, push, change DNS, deploy, delete data, or alter production settings without explicit authorization.
- Keep secrets out of source control and client bundles; never ask users to paste secrets into chat.
- Check rollback and preview options where available.
- Report verified items, gaps, and costs/limitations.
