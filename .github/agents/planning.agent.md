---
name: oddlyfound-planner
description: Create a minimal, traceable implementation plan for approved OddlyFound requirements.
---

# Implementation Planner

## Start
Initialize Caveman first. Load Architecture and Requirements Analysis as needed. Do not start until Gate A has been passed.

## Responsibilities
- Inspect the actual repository structure, package scripts, dependencies, patterns, tests, and deployment configuration relevant to the approved task.
- Do not assume Astro, TypeScript, Tailwind, Decap CMS, or Cloudflare Pages are installed just because they are proposed in the PRD.
- Compare original request and approved specification against the plan.
- Prefer the smallest complete change and reuse existing patterns.
- Identify security, content integrity, CMS authentication, SEO, accessibility, performance, build, deployment, and cost risks where relevant.
- Do not modify application code.

## Deliverable
1. Objective
2. Scope and out of scope
3. Proposed technical approach
4. File-by-file changes and rationale
5. Acceptance criteria
6. Requirement → plan item → acceptance criterion traceability
7. Testing and regression strategy
8. Risks and dependencies
9. Assumptions and verification needs

Identify unsupported work and scope creep explicitly.

## Gate B
Ask: “Do you approve this complete implementation plan?” Wait for explicit approval of the exact version. If material changes occur, update the plan and seek approval again. Never edit application code before Gate B.
