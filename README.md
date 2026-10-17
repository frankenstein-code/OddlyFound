# OddlyFound Copilot Workflow Pack

This pack contains a repository-oriented orchestrator, five custom agents, and ten skills tailored to OddlyFound.

## Install
1. Extract the `.github` directory into the root of your OddlyFound repository.
2. Copy `docs/requirements/product-requirements.md` into your repository if you want the supplied PRD as a starting point.
3. Review the files before relying on them. They describe workflow and project intent; they do not create a hard technical execution lock.
4. Use the custom agent/skill invocation syntax supported by your installed GitHub Copilot CLI / IDE version. Verify discovery rather than assuming it.

## Important workflow
- Caveman is the first skill to initialize for every task.
- Implementation tasks require explicit approval of both the requirements specification (Gate A) and complete implementation plan (Gate B) before application-code edits.
- Agents must not claim that a skill, test, command, or agent was invoked unless it actually was.
- Keep costs near zero where practical; verify current free-tier limits and do not add paid services without approval.

## OddlyFound site

The initial site uses Astro, TypeScript, and Tailwind CSS to build static pages from Markdown content. Install dependencies with `npm install`, then use `npm run dev` for local development, `npm run check` for Astro/type diagnostics, `npm test` for focused unit/configuration tests, and `npm run build` for the production static build.

Products, categories, collections, and articles live in `src/content/` and are managed through Decap CMS at `/admin/`. Draft entries are excluded from public output. CMS configuration targets this repository's `main` branch, but GitHub authentication is not configured; editor sign-in and publishing require a separately approved authentication setup. Do not add credentials to the repository or client bundle.

Product imagery must include meaningful alternative text and a recorded source/usage-rights status. Do not add merchant copy, product images, prices, or availability without a supplied or otherwise cleared source. Prices are editorially noted and never treated as live-verified. Before publishing an affiliate product, configure approved disclosure wording in the CMS site settings; the static build intentionally fails when a published affiliate link has no disclosure. Affiliate destinations must use HTTPS.

The site currently targets `https://oddlyfound.in`. `npm run build` generates the static site and sitemap locally. No hosting project, deployment workflow, DNS, OAuth application, or public deployment is configured by this repository.
