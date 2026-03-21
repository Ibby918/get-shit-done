---
name: get-shit-done
description: Spec-driven development system for building software projects. Use when the user wants to start a new project, plan a feature, execute a phase of work, or manage a multi-phase build systematically with git commits per task.
---

# Get Shit Done (GSD)

A spec-driven development system that eliminates context rot by running each execution task in a
fresh 200k context window. Every task gets an atomic git commit.

## Starting a new project

Run this in a blank project directory inside Claude Code:

```
/gsd:new-project
```

GSD will ask questions about your idea, research the domain, extract v1 requirements, and produce
a phased roadmap. You approve the roadmap before any code is written.

## Core workflow (per phase)

```
/gsd:discuss-phase <n>    Lock down your decisions before planning
/gsd:plan-phase <n>       Research the domain + create atomic XML task plans
/gsd:execute-phase <n>    Build using parallel agent waves, auto-verify on completion
/gsd:verify-work <n>      Walk through UAT step by step, auto-diagnose failures
/gsd:ship <n>             Create PR with auto-generated description
```

Or let GSD decide the next step automatically:
```
/gsd:next
```

## Quick mode (ad-hoc tasks)

```
/gsd:quick                 Fast task with atomic commit + state tracking
/gsd:quick --discuss       Gather context before planning
/gsd:quick --research      Research approaches before planning
/gsd:quick --full          Adds plan-check + verification
```

## All commands

| Command | Action |
|---|---|
| `/gsd:new-project` | Start: questions → research → requirements → roadmap |
| `/gsd:map-codebase` | Analyse existing repo before new-project |
| `/gsd:discuss-phase N` | Capture decisions before planning |
| `/gsd:plan-phase N` | Research + create plans |
| `/gsd:execute-phase N` | Build with parallel agent waves |
| `/gsd:verify-work N` | UAT with auto-diagnosis |
| `/gsd:ship N` | Create PR |
| `/gsd:next` | Auto-advance |
| `/gsd:progress` | Current position + next step |
| `/gsd:debug` | Systematic debugging with state |
| `/gsd:add-phase` | Append phase to roadmap |
| `/gsd:insert-phase N` | Insert work between phases |
| `/gsd:pause-work` | Create session handoff |
| `/gsd:resume-work` | Restore from last session |
| `/gsd:stats` | Project statistics |
| `/gsd:update` | Update GSD to latest |
| `/gsd:help` | Full reference |

## Model profiles

```
/gsd:set-profile quality    Opus + Opus (best quality)
/gsd:set-profile balanced   Opus + Sonnet (default)
/gsd:set-profile budget     Sonnet throughout
```

## How it avoids context rot

Each `/gsd:execute-phase` spawns subagents — one per task plan — each with a fresh 200k context
window. The orchestrator stays lean. Your main session never fills up.
