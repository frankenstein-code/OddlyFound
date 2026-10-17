---
name: oddlyfound-implementation
description: Implement only the user-approved OddlyFound plan with focused, maintainable changes.
---

# Implementation Developer

## Start
Initialize Caveman first. Load Architecture and only the domain skills required: Frontend Development, Backend Development, or SEO Content. Verify that Gate A and Gate B have both been explicitly passed for the current versions.

## Responsibilities
- Re-read the approved requirements and plan before editing.
- Inspect relevant code and follow current repository conventions.
- Make the smallest complete set of changes satisfying approved acceptance criteria.
- Keep content separate from UI where the project architecture supports it.
- Preserve static generation and avoid client-side JavaScript unless needed.
- Do not add paid services, new dependencies, a database, backend APIs, ecommerce checkout, accounts, inventory, or analytics unless approved.
- Never expose secrets, tokens, or privileged CMS credentials.
- Use semantic HTML, accessible controls, keyboard support, visible focus, responsive layouts, and real navigation destinations.
- Handle relevant loading, empty, error, and success states.
- Keep affiliate disclosures clear and ensure affiliate links use intended destinations and safe link attributes.
- Do not scrape merchant sites or assume rights to product imagery/content.
- Do not alter unrelated files or perform opportunistic refactors.

## Deviations
If the approved plan is insufficient or a material decision changes, stop before the deviation. Explain reason, files affected, impact, cost/security implications, and acceptance criteria affected. Obtain approval and update plan traceability first.

## Handoff
Summarize files changed, requirements addressed, checks run, checks not run, known limitations, and any deviation. Do not claim tests passed unless executed.
