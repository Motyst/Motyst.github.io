---
title: Helm
summary: A focus board you and your AI agents share
icon: wheel
tagline: A self-hosted task board that shows what to do now, and that Claude and ChatGPT can use too, safely and with my approval.
year: 2026
status: live
role: Solo developer, built with Claude Code
order: 1.5
accent: '#10b981'
cover:
  type: image
  src: /media/helm/desktop-focus.webp
  alt: Helm's Focus view on a desktop, with the task in progress, its subtasks and what's up next
  caption: Focus, the view to leave open all day
gallery:
  - type: image
    src: /media/helm/desktop-assistant.webp
    alt: The assistant panel suggesting an order for open tasks, with a reason for each
    caption: The assistant suggests an order
  - type: image
    src: /media/helm/desktop-board.webp
    alt: The board with one coloured bin per project, tasks grouped by Now, Soon and Someday
    caption: The board, one bin per project
  - type: image
    src: /media/helm/themes.webp
    frame: none
    alt: Helm's Focus view on a phone in six themes, each with its own landscape
    caption: Six themes on a phone
skills: [TypeScript, React, Node.js, Hono, SQLite, MCP, Claude Code, OpenAI API, LLMs, Voice AI, Human-in-the-loop, Real-time Systems, PWA, Docker, Raspberry Pi, Tailscale]
workflow:
  - title: Capture
    icon: mic
    description: Type with shorthand like "#work !now ~45", or speak, and an LLM turns the recording into task drafts.
  - title: Focus
    icon: target
    description: One task in progress, time against its estimate, and what's up next. Starting another pauses the first.
  - title: Agents
    icon: bot
    description: Claude Code, Claude Desktop or ChatGPT read and update the board over MCP, with scoped tokens and no delete.
  - title: Approve
    icon: circle-check
    description: The assistant suggests an order and proposes changes. Nothing is saved until I tick it.
  - title: Sync & log
    icon: radio
    description: Every change is logged with who made it and appears live on every device.
highlights:
  - Claude Code, Claude Desktop and ChatGPT use it over MCP
  - The AI proposes, I approve, and the log shows both
  - Runs on a Raspberry Pi at home, reached privately from my phone
  - About 114 automated tests across 5 packages
  - Six themes with woodblock-print style landscapes
links:
  - label: Source code
    url: https://github.com/Motyst/helm
    kind: repo
---

A self-hosted task board built to stay open all day and answer one question at a glance: what am I doing now, and what's next? The main screen isn't a list but a **Focus view** with one task in progress, and starting another pauses the first. Quick entry understands shorthand, and voice capture turns one spoken ramble into separate task drafts.

Its unusual goal is that **AI agents are users too**. Claude Code, Claude Desktop, ChatGPT or any script can read and update the board through an **MCP server** and a REST API, using scoped, expiring tokens with no delete tool. Inside the app, an assistant suggests the order of work and proposes changes, but nothing is saved until I approve it.

Every write goes through one service layer and one event log, which gives the audit trail, live sync across devices and per-token access in a single design. It's a TypeScript monorepo (React PWA, Hono, SQLite) in one Docker container, running on a **Raspberry Pi** at home over Tailscale. I was the architect and product owner, with Claude Code implementing 11 planned steps that I reviewed one by one.
