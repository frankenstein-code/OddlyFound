---
name: testing
description: Verify approved OddlyFound changes with focused, reproducible tests and honest evidence.
---
# Testing
- Initialize Caveman first.
- Inspect available scripts/tooling before choosing commands.
- Test changed behavior against acceptance criteria; avoid unrelated work.
- Run relevant tests, lint, type checks, build, and browser/user-flow checks where available.
- For UI, verify responsive breakpoints, keyboard behavior, focus, real links, empty/error states, and semantics.
- For SEO/content, verify routes, metadata, canonical URLs, sitemap, robots.txt, and structured data where applicable.
- For CMS/affiliate changes, verify destinations, disclosures, permission assumptions, and absence of secrets in generated assets.
- Never mark a check passed unless it was run and passed.
- Report command/method, result, evidence, and unrun checks.
- Fix in-scope defects; seek approval for material scope changes.
