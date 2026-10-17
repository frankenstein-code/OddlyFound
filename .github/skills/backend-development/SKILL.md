---
name: backend-development
description: Add secure, minimal backend functionality only when an approved OddlyFound requirement needs it.
---
# Backend Development
- Initialize Caveman first.
- OddlyFound is intended to begin as a static site without a database or custom backend.
- Do not introduce APIs, databases, authentication services, jobs, or paid infrastructure unless necessary for an approved requirement.
- Inspect runtime, deployment, secrets, and access-control patterns.
- Validate untrusted input at boundaries and enforce authorization server-side.
- Keep secrets out of Git, static output, and client bundles.
- Handle errors without leaking secrets or internal details.
- Consider abuse controls, privacy, logging, and retention for approved endpoints.
- Document operational costs, limits, failure behavior, and rollback.
- Obtain approval for material architectural or cost changes.
