---
name: get-shit-done
description: >
  Use this skill whenever the user wants to build, plan, or systematically develop a software
  project using Claude Code. Trigger when the user says things like "let's build X", "help me
  start a new project", "plan out this feature", "I want to build a SaaS app", "let's add a
  new phase", "what should I work on next", or "help me structure this project". Also trigger
  when the user wants parallel agent execution, spec-driven development, or structured git
  history per task. Trigger for "map my codebase" or "analyse this repo" before planning work.
  Skip for simple one-off code edits that don't need planning. Skip for general coding questions
  or explanations where no project is being built. Skip when the user wants a quick fix rather
  than a structured development workflow — use /gsd:quick for those instead.
---

# Get Shit Done (GSD) — Spec-Driven Development for Claude Code

A meta-prompting, context engineering and spec-driven development system. Eliminates context rot
by running each execution task in a fresh 200k context window via parallel subagents.
Trusted by engineers at Amazon, Google, Shopify and Webflow.

## Core Workflow

```
/gsd:new-project      Full init: questions → research → requirements → roadmap
/gsd:discuss-phase 1  Capture your implementation decisions before planning
/gsd:plan-phase 1     Research the domain + create atomic XML task plans
/gsd:execute-phase 1  Execute plans in parallel waves, auto-verify on completion
/gsd:verify-work 1    Walk through user acceptance testing step by step
/gsd:ship 1           Create a PR with auto-generated description
/gsd:next             Auto-detect and run the next logical workflow step
```

## Quick Mode (for ad-hoc tasks)

```
/gsd:quick                      Fast task with GSD guarantees (commits + state)
/gsd:quick --discuss            Gather context before planning
/gsd:quick --research           Research approaches before planning
/gsd:quick --full               Full plan-check + verification
```

## All Commands

| Command | What it does |
|---|---|
| `/gsd:new-project` | Start fresh: questions → research → requirements → roadmap |
| `/gsd:map-codebase` | Analyse existing repo before new-project (brownfield) |
| `/gsd:discuss-phase N` | Lock down your decisions before planning phase N |
| `/gsd:plan-phase N` | Research + create verified atomic task plans for phase N |
| `/gsd:execute-phase N` | Build phase N using parallel agent waves |
| `/gsd:verify-work N` | UAT: test each deliverable, auto-diagnose failures |
| `/gsd:ship N` | Create PR from verified phase work |
| `/gsd:next` | Auto-advance to next step |
| `/gsd:progress` | Where am I? What's next? |
| `/gsd:debug` | Systematic debugging with persistent state |
| `/gsd:add-phase` | Append a phase to the roadmap |
| `/gsd:insert-phase N` | Insert urgent work between phases |
| `/gsd:pause-work` | Create handoff for stopping mid-phase |
| `/gsd:resume-work` | Restore from last session |
| `/gsd:session-report` | Summary of what was done this session |
| `/gsd:stats` | Project statistics: phases, plans, git metrics |
| `/gsd:update` | Update GSD to latest version |
| `/gsd:help` | Full command reference |

## Model Profiles

```
/gsd:set-profile quality    Opus planning + Opus execution (best quality)
/gsd:set-profile balanced   Opus planning + Sonnet execution (default)
/gsd:set-profile budget     Sonnet throughout (token-efficient)
/gsd:set-profile inherit    Follow current runtime model selection
```

## Why It Works

- **Fresh context per task** — 200k tokens purely for execution, zero accumulated noise
- **XML-structured plans** — precise instructions with built-in verification steps
- **Parallel wave execution** — independent tasks run simultaneously
- **Atomic git commits** — one commit per task, clean bisectable history
- **Automated verification** — checks delivered code against goals after each phase
- **State persistence** — `STATE.md` keeps decisions and blockers across sessions

## First Time Setup

Open a blank project directory in Claude Code and run:
```
/gsd:new-project
```
GSD will ask questions, research your domain, extract requirements, and create a roadmap.
You approve the roadmap — then it builds.
