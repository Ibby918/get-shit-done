---
name: get-shit-done
description: Spec-driven development system for Claude Code. Use when the user wants to plan, build, or manage a software project systematically using phases, parallel subagents, and structured verification.
---

# Get Shit Done (GSD) — Spec-Driven Development for Claude Code

A meta-prompting, context engineering and spec-driven development system. Solves context rot — the quality degradation that happens as Claude fills its context window.

## When to Use This Skill

- User wants to start a new software project
- User wants to plan features or phases before building
- User says "help me build X" or "let's start a new project"
- User wants systematic, verifiable development with git commits per task
- User wants to use parallel subagents for faster development

## Core Workflow

```
/gsd:new-project     → Full init: questions → research → requirements → roadmap
/gsd:discuss-phase 1 → Capture implementation decisions before planning
/gsd:plan-phase 1    → Research + create atomic task plans
/gsd:execute-phase 1 → Run plans in parallel waves, verify on completion
/gsd:verify-work 1   → Manual user acceptance testing
/gsd:ship 1          → Create PR from verified work
/gsd:next            → Auto-detect and run next step
```

## Quick Mode

```
/gsd:quick           → Ad-hoc task with GSD guarantees (commits, state tracking)
```

## Key Commands

| Command | What it does |
|---|---|
| `/gsd:new-project` | Start a new project with full planning |
| `/gsd:map-codebase` | Analyse existing codebase before planning |
| `/gsd:plan-phase N` | Research and plan a specific phase |
| `/gsd:execute-phase N` | Build the phase using parallel agents |
| `/gsd:verify-work N` | Test that what was built actually works |
| `/gsd:progress` | See where you are and what is next |
| `/gsd:debug` | Systematic debugging with persistent state |
| `/gsd:help` | Full command reference |

## Model Profiles

```
/gsd:set-profile quality    → Opus for planning, Opus for execution
/gsd:set-profile balanced   → Opus for planning, Sonnet for execution (default)
/gsd:set-profile budget     → Sonnet throughout
```

## Why It Works

- Fresh 200k context per execution task — no degradation
- XML-structured plans for precise Claude instructions
- Parallel wave execution for independent tasks
- Atomic git commit per task — clean, traceable history
- Automated verification against goals after each phase
