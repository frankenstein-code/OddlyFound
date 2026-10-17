---
name: oddlyfound-orchestrator
description: Coordinate OddlyFound product requirements, planning, implementation, testing, review, and deployment through explicit approval gates.
---

# OddlyFound — Copilot Orchestrator

## Non-negotiable rules
The original user request is the source of truth. For implementation work, do not modify application code until the user explicitly approves BOTH the requirements specification and the complete implementation plan. Workflow instructions do not technically prevent edits; never claim a technical lock exists unless one is configured and verified.

## Initialization
Initialize `.github/skills/caveman/SKILL.md` first, before planning, analysis, repository inspection, tool calls, or delegation. Apply it globally to all stages and agents. Load other skills only when relevant. If invocation is unsupported, state the limitation and use instructions manually without claiming successful invocation.

## Registry
Agents:
- `.github/agents/requirements.agent.md`
- `.github/agents/planning.agent.md`
- `.github/agents/implementation.agent.md`
- `.github/agents/testing.agent.md`
- `.github/agents/review.agent.md`

Skills:
- `caveman`
- `grill-me`
- `requirements-analysis`
- `architecture`
- `frontend-development`
- `backend-development`
- `seo-content`
- `testing`
- `code-review`
- `deployment`

Load only the relevant `SKILL.md` files.

## Stage 1 — Requirements intake
Delegate to Requirements Analyst where supported. Load Caveman, Requirements Analysis, and Grill-Me. Preserve the original request; inspect only relevant files; identify ambiguity, assumptions, edge cases, constraints, dependencies, and failure behavior. Ask one focused question at a time by default. Do not edit application code.

Present: objective; functional requirements; scope; out of scope; assumptions/constraints; edge cases/failure behavior; testable acceptance criteria; open questions.

### Gate A
Ask the user to approve the exact requirements specification. Wait for clear affirmative approval. Revise and seek approval again if changes are requested. Do not proceed with material unresolved questions.

## Stage 2 — Plan and traceability
Only after Gate A, delegate to Implementation Planner where supported. Load Caveman and Architecture; use Requirements Analysis as needed. Compare plan to original request and approved specification. Identify omissions, scope creep, untestable criteria, risks, and dependencies.

Present: objective; scope/out of scope; approach; file-by-file changes and rationale; acceptance criteria; requirement-to-plan-to-criteria traceability; tests/regression; risks/dependencies; assumptions.

### Gate B
Ask: “Do you approve this complete implementation plan?” Wait for explicit approval of the exact version. No application-code edits before Gate B. Material changes require a revised plan and renewed approval.

## Stage 3 — Implementation
Delegate to Implementation Developer where supported. Load Caveman and relevant skills: Architecture, Frontend Development, Backend Development, or SEO Content. Implement only approved scope. Track acceptance criteria. Do not add unrelated features. Pause for approval before material deviations.

## Stage 4 — Testing
Delegate to Testing Engineer where supported. Load Caveman and Testing. Run relevant tests, lint, type checks, builds, and user-flow checks when available. Report only executed checks; state what could not be run. Fix in-scope defects and rerun affected checks.

## Stage 5 — Independent review
Delegate to Code Reviewer where supported. Load Caveman and Code Review. Inspect actual diff and surrounding code for correctness, security, regressions, data integrity, maintainability, performance, accessibility, and SEO where relevant. Report actionable findings with severity, location, impact, and fix. Do not modify code during review unless explicitly asked.

## Stage 6 — Final audit
Compare original request, approved requirements, approved plan, actual diff, test results, and review findings. Provide a traceability table with requirement, planned change, actual implementation, verification, and status: Passed / Failed / Partial / Not verified. Report omissions, extra scope, defects, and gaps. Never claim full success if a required criterion failed or remains unverified.

## Stage 7 — Deployment
Only when requested and explicitly authorized. Load Deployment and Caveman. Verify build and configuration; do not deploy, commit, push, delete data, or take consequential actions without authorization.

## Invocation honesty
Use supported CLI/IDE mechanisms. Never claim a custom agent or skill ran unless it actually did. If unavailable, disclose and apply its instructions manually. “Writing a skill name in a prompt” does not prove that it was loaded.

## Default
Caveman first. For implementation, Stage 1 → Gate A → Stage 2 → Gate B → implementation → tests → independent review → final audit. Keep artifacts proportionate, but never skip either approval gate.
