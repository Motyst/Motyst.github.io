---
title: Helm
summary: A focus board you and your AI agents share
icon: wheel
tagline: A self-hosted task board that shows what to do now, and that AI agents like Claude Code can use too, safely and with my approval.
year: 2026
status: live
role: Solo developer, built with Claude Code
order: 1.5
accent: '#10b981'
cover:
  type: image
  src: /media/helm/desktop-focus.webp
  alt: Helm's Focus view on a desktop, with the task in progress, its time, subtasks, a timer and what's up next
  caption: Focus, the view to leave open all day
gallery:
  - type: image
    src: /media/helm/desktop-assistant.webp
    alt: The assistant panel suggesting an order for open tasks, with a reason for each
    caption: The assistant suggests an order
  - type: image
    src: /media/helm/phone-voice.webp
    frame: none
    alt: Recording a task by voice on a phone, then the task drafted from what was said, ready to check
    caption: Say a task, check the draft
  - type: image
    src: /media/helm/desktop-board.webp
    alt: The board with one coloured panel per project, tasks grouped by Now, Soon and Someday
    caption: The board, one panel per project
  - type: image
    src: /media/helm/phone-timer.webp
    frame: none
    alt: A countdown timer on a phone, the time's up banner, and timer alerts in Settings
    caption: A timer that rings every device
  - type: image
    src: /media/helm/themes.webp
    frame: none
    alt: Helm's Focus view on phones in the Desert, Deep forest, Night and Neo Tokyo themes
    caption: Four of the seven themes
skills: [TypeScript, React, Node.js, Hono, SQLite, MCP, Claude Code, OpenAI API, LLMs, Voice AI, Human-in-the-loop, Real-time Systems, PWA, Web Push, Docker, Raspberry Pi, Tailscale]
workflow:
  - title: Capture
    icon: mic
    description: Type with shorthand like "#work !now ~45", or speak, and an LLM turns the recording into task drafts.
  - title: Focus
    icon: target
    description: One task in progress, time against its estimate, and a timer that rings every device when it ends.
  - title: Agents
    icon: bot
    description: Claude Code or any MCP client reads and updates the board, with scoped tokens and no delete.
  - title: Approve
    icon: circle-check
    description: The assistant suggests an order and proposes changes. Nothing is saved until I tick it.
  - title: Sync & log
    icon: radio
    description: Every change is logged with who made it and appears live on every device.
highlights:
  - AI agents like Claude Code use it over MCP
  - The AI proposes, I approve, and the log shows both
  - A shared timer that rings even a locked phone, via Web Push
  - Runs on a Raspberry Pi at home, reached privately from my phone
  - Over 120 automated tests across 4 packages
links:
  - label: Source code
    url: https://github.com/Motyst/helm
    kind: repo
---

A self-hosted task board built to stay open all day and answer one question at a glance: what am I doing now, and what's next? The main screen isn't a list but a **Focus view** with one task in progress, and starting another pauses the first. A timer runs on the server, so every device shows one countdown and a locked phone still rings. Voice capture turns one spoken ramble into separate task drafts.

Its unusual goal is that **AI agents are users too**. Claude Code, other MCP clients or any script can read and update the board through an **MCP server** and a REST API, using scoped, expiring tokens with no delete tool. Inside the app, an assistant suggests the order of work and proposes changes, but nothing is saved until I approve it.

Every write goes through one service layer and one event log, which gives the audit trail, live sync across devices and per-token access in a single design. It's a TypeScript monorepo (React PWA, Hono, SQLite) in one Docker container, running on a **Raspberry Pi** at home over Tailscale. I was the architect and product owner, with Claude Code implementing 11 planned steps that I reviewed one by one.
