We are starting development of OddlyFound. Follow the repository instructions and OddlyFound Copilot Orchestrator.

## Step 1 — Initialize

1. Load `.github/skills/caveman/SKILL.md` first.
2. Read `.github/copilot-instructions.md` and `.github/agents/orchestrator.agent.md`.
3. Verify that the referenced agents, skills, and requirements document exist.
4. Inspect the repository and current project state. Do not assume the proposed tech stack is already installed.

## Step 2 — Ask me to choose a workflow mode

**Before beginning requirements analysis or making any changes, ask me this single question:**

"How would you like to run OddlyFound development?"

- **A — Auto-Pilot:** Work through requirements, planning, implementation, testing, independent review, and final audit automatically. Make reasonable, low-risk decisions without asking me repeatedly. Record assumptions and decisions. Pause only for critical ambiguities, security or privacy risks, destructive operations, paid services, credentials, external commitments, or actions that explicitly require my authorization.
- **B — Manual Approval:** Work in stages. Present the requirements specification and wait for my approval. Then present the implementation plan and wait for my approval before changing application code. Continue to respect any other necessary safety and authorization boundaries.

Wait for my selection before proceeding.

## Step 3 — Follow the selected mode

### If I choose Auto-Pilot

- Run all workflow stages in sequence: requirements analysis, planning, implementation, testing, independent code review, and final traceability audit.
- Do not stop for routine decisions or require approval at every stage.
- Use the requirements and planning stages internally to establish a clear specification and implementation plan before coding.
- Preserve the smallest complete solution, existing project conventions, security, accessibility, maintainability, and test coverage.
- Keep OddlyFound focused on product discovery, affiliate marketing, editorial content, and its CMS.
- Preserve the zero/minimal recurring-cost objective. Do not purchase services, incur costs, expose secrets, deploy publicly, or perform other consequential external actions without explicit authorization.
- If a critical ambiguity cannot be resolved safely, ask one focused question and pause only the affected work.
- Report assumptions and decisions, files changed, tests actually run, review findings, and anything incomplete or unverified.

### If I choose Manual Approval

- Complete requirements analysis and present a draft specification. Do not modify application code until I explicitly approve the specification.
- After approval, inspect the repository and prepare a detailed, file-by-file implementation plan. Do not modify application code until I explicitly approve that plan.
- Then implement, test, review, and audit the work in sequence.

## Rules for both modes

- Never claim to have loaded an agent or skill, run a test, or completed a check unless that actually happened.
- Do not install dependencies, commit, push, or deploy unless the selected workflow and my authorization permit it.
- Do not scrape merchant sites or assume permission to reuse product images, copy, or prices.
- Do not present prices as live unless they are reliably verified.
- Prefer minimal dependencies and focused changes.
- Be concise and report failures honestly.

**Start now by initializing the required instructions, then ask me to choose A or B. Do not begin the development workflow until I choose.**
