---
name: architecture
description: Choose the simplest architecture satisfying approved OddlyFound requirements and repository constraints.
---
# Architecture
- Initialize Caveman first.
- Inspect actual architecture, dependency versions, scripts, content model, deployment, and conventions relevant to the task.
- Do not assume Astro, TypeScript, Tailwind, Decap CMS, or Cloudflare Pages are already configured.
- Prefer static generation and build-time content initially.
- Avoid databases, custom APIs, server runtimes, paid services, or dependencies unless justified by an approved requirement.
- Keep product, collection, category, and article content maintainable and separate from presentation.
- Consider affiliate destination, disclosure, rights/source notes, and price freshness in the content model.
- Keep future owned-product support extensible without implementing premature checkout infrastructure.
- Evaluate Decap CMS authentication and Git publishing for the actual hosting/repository setup.
- Document trade-offs, failure modes, security boundaries, migration costs, and recurring costs.
- No implementation before Gate B.
