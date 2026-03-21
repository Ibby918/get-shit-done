---
name: get-shit-done
description: >
  Use when the user wants to build, plan, or systematically develop a software project.
  Trigger phrases: "let's build X", "help me start a new project", "plan out this feature",
  "I want to build a SaaS app", "add a new phase to my project", "what should I work on
  next", "help me structure this codebase", "map my codebase before we start".
  Also trigger when the user wants atomic git commits per task, parallel agent execution,
  or phased spec-driven development with verification.
  Do NOT trigger for: simple one-off edits, answering a coding question, quick bug fixes
  where no planning is needed. For quick ad-hoc tasks without full planning, use
  `/gsd:quick` instead of `/gsd:new-project`.
---

# Get Shit Done (GSD) — Spec-Driven Development

Eliminates context rot by running each execution task in a fresh 200k context window.
Each task gets one atomic git commit. Parallel agents for independent work.

## Core Workflow

Always follow this order. Don't skip phases.

```
Step 1  /gsd:new-project        Questions → research → requirements → roadmap
Step 2  /gsd:discuss-phase N    Lock decisions before any planning
Step 3  /gsd:plan-phase N       Research domain + create verified XML task plans
Step 4  /gsd:execute-phase N    Build in parallel waves, auto-verify on completion
Step 5  /gsd:verify-work N      Walk through UAT, auto-diagnose any failures
Step 6  /gsd:ship N             Create PR with auto-generated description
        /gsd:next               Auto-detect and run the next step (shortcut)
```

**For existing codebases**, run `/gsd:map-codebase` before `/gsd:new-project`.

## Quick Mode (Ad-hoc tasks)

When user wants one thing done fast without full project planning:
```
/gsd:quick                      Run a task with GSD guarantees
/gsd:quick --discuss            Gather context before planning
/gsd:quick --research           Research before planning
/gsd:quick --full               Adds plan verification + post-execution check
```

## All Commands

| Command | When to use |
|---|---|
| `/gsd:new-project` | New project, blank directory |
| `/gsd:map-codebase [area]` | Existing repo — analyse before planning |
| `/gsd:discuss-phase N` | Before plan-phase — lock your decisions |
| `/gsd:plan-phase N` | After discuss — creates verified task plans |
| `/gsd:execute-phase N` | Run plans in parallel waves |
| `/gsd:verify-work N` | UAT: test deliverables, diagnose failures |
| `/gsd:ship N` | Create PR from verified work |
| `/gsd:next` | Auto-advance to next logical step |
| `/gsd:progress` | Where am I? What's next? |
| `/gsd:debug [desc]` | Systematic debugging with state |
| `/gsd:add-phase` | Append a phase to roadmap |
| `/gsd:insert-phase N` | Insert work between phases |
| `/gsd:pause-work` | Create handoff when stopping |
| `/gsd:resume-work` | Restore from last session |
| `/gsd:session-report` | Summary of this session |
| `/gsd:stats` | Project metrics: phases, tokens, git |
| `/gsd:update` | Update GSD to latest |
| `/gsd:help` | Full command reference |

## Model Profiles

Switch based on budget vs quality tradeoff:
```
/gsd:set-profile quality     Opus planning + Opus execution (best output)
/gsd:set-profile balanced    Opus planning + Sonnet execution (default)
/gsd:set-profile budget      Sonnet throughout
/gsd:set-profile inherit     Use whatever model is currently active
```

## How It Works (Key Points for Claude)

- **Each task gets a fresh 200k context** — subagents don't inherit session history
- **Plans are XML-structured** with explicit `<action>`, `<verify>`, `<done>` tags
- **Wave execution** — independent plans run in parallel, dependent ones sequential
- **Every task commits** — one atomic commit per task for clean git bisect history
- **STATE.md persists decisions** — Claude reads this at session start to restore context

## Common Mistakes

- **Don't skip discuss-phase** — it's where your vision gets locked in before the planner runs
- **Don't use new-project on existing codebases** without running map-codebase first
- **Don't run execute-phase without plan-phase** — no plans = nothing to execute
- **If execution fails**, don't re-run manually — use `/gsd:verify-work` to auto-diagnose and generate fix plans

## Files GSD Creates

```
PROJECT.md          Vision and goals — always loaded
REQUIREMENTS.md     Scoped v1/v2 with phase traceability
ROADMAP.md          Phases and progress
STATE.md            Decisions, blockers, current position
N-CONTEXT.md        Your decisions for phase N (from discuss)
N-RESEARCH.md       Domain research for phase N
N-M-PLAN.md         Atomic task plan for task M in phase N
N-M-SUMMARY.md      What was built and committed
```
