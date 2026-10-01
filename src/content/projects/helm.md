---
title: Helm
summary: One place for all my tasks, shared with my AI agents
icon: wheel
tagline: One place to rapidly log all my tasks, by voice or chat. My AI agents can work on them too, but only with my approval.
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
    src: /media/helm/phone-app.webp
    frame: none
    alt: Helm on a phone, showing the board, a project's menu and the Done log grouped by day
    caption: On a phone, the board, a project's menu and Done
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
    description: One task in progress at a time, with a timer and what's up next. Starting another pauses the first.
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
  - Runs at home on my own Raspberry Pi, reached privately from my phone
  - Over 120 automated tests across 4 packages
links:
  - label: Source code
    url: https://github.com/Motyst/helm
    kind: repo
---

I wanted one place to rapidly log all my tasks the moment they come into my mind, either by voice or chat. AI sorts them by project and priority. My AI agents can then access the projects and begin executing those tasks as well. The apps I used before were clunky: slow, with too many clicks and messy AI integration.

The main screen is a simple, minimalist **Focus view** with one task in progress at a time, a bit like a Pomodoro screen. **AI agents** like Claude Code connect over MCP. They can add and change tasks, but can't delete them yet. Delete might come later, when needed. In the app, the assistant suggests the order of tasks, but nothing is saved until I approve it. Every change is logged, along with who made it.

I decided on most of the main features, while AI was mainly responsible for making the UI work well and look good. Claude Code built it step by step, and I reviewed every step. It runs at home on my own **Raspberry Pi**. It's free, and I was simply curious what it would be like to host it myself. I now use it daily and log all my to-dos in it. As its main user, I can easily see new efficiencies to add.
