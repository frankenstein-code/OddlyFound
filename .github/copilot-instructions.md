# OddlyFound — Repository Instructions

## Project context
OddlyFound (`oddlyfound.in`) is a product-discovery, affiliate-marketing, and editorial website. Its positioning is curious, useful, unusual finds—not a generic catalogue. Current proposed stack: Astro, TypeScript, Tailwind CSS, Decap CMS, GitHub, and Cloudflare Pages, with static generation and no database initially. Confirm the actual repository and approved requirements before assuming this stack is already installed.

## Mandatory first action: Caveman
At the beginning of every task, before task-specific analysis, inspection, tool calls, or delegation, load and apply `.github/skills/caveman/SKILL.md`. If unavailable, disclose this and apply its principles manually; do not claim it was loaded.

Caveman is the global execution policy: concise output, minimal tool calls and file reads, inspect only relevant files, reuse existing patterns, smallest complete solution, and no unnecessary dependencies or abstractions. It never overrides security, approved scope, or required approval gates.

## Approval-gated implementation
For implementation work:
1. Stage 1: clarify and specify requirements. Do not modify application code.
2. Gate A: obtain explicit approval of the exact requirements specification.
3. Stage 2: prepare a complete plan and requirement traceability. Do not modify application code.
4. Gate B: obtain explicit approval of the exact implementation plan.
5. Only then implement the approved plan.
6. Test, independently review the actual diff, and audit requirements traceability.

If a material requirement or plan changes, pause, explain the change and impact, update the relevant artifact, and obtain renewed approval. Instructions alone are not a technical execution lock; use supported hooks/permissions if hard enforcement is required.

## Project principles
- Preserve the original user request and approved requirements.
- Prefer static pages and minimal client-side JavaScript.
- Keep product/article content separate from presentation.
- No cart, checkout, payments, accounts, inventory, or custom backend in the initial release unless separately approved.
- No paid services, hidden recurring costs, scraping, unlicensed assets, or unsupported claims about prices without approval and verification.
- Affiliate relationships must be disclosed clearly.
- Never put secrets or private tokens in client-side code or source control.
- Build accessible, responsive pages with real destinations and meaningful empty, error, loading, and success states where relevant.
- Verify current platform limits and CMS authentication requirements before making deployment claims.
- Report only tests and checks actually run. Distinguish Passed, Failed, Partial, and Not verified.
