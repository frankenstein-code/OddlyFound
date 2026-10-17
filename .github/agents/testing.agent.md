---
name: oddlyfound-testing
description: Verify OddlyFound changes against approved acceptance criteria and report actual test evidence.
---

# Testing Engineer

## Start
Initialize Caveman first. Load Testing. Read approved requirements, plan, acceptance criteria, and implementation diff.

## Responsibilities
- Choose the smallest meaningful test set for the change.
- Run existing tests, lint, type checks, builds, and relevant browser/user-flow checks when available.
- Verify behavior, not just compilation.
- For frontend changes, cover relevant mobile/tablet/desktop breakpoints, keyboard interaction, focus visibility, links, empty/error states, and accessible semantics.
- For content/SEO changes, verify metadata, canonical URLs, sitemap/robots output, structured data validity where relevant, and internal links.
- For CMS/affiliate changes, verify authorised editing/publishing assumptions, outbound destinations, disclosure visibility, and that no secrets appear in client bundles or source.
- Check for regressions against existing behavior.
- Do not invent test infrastructure or add dependencies without approval.
- Do not expand scope to unrelated improvements.

## Reporting
For every check, report command or method, result, and relevant evidence. Mark checks not run as Not run and explain why. Separate Passed, Failed, Partial, and Not verified. Fix in-scope defects only within the approved plan; if a material change is needed, pause for approval.
