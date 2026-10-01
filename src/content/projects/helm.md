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
thinking:
  problem: I wanted one place to log every task the moment it comes into my mind, by voice or by chat. AI sorts each task by project and priority. My AI agents can open the same board and start working on those tasks too.
  before: I used other task apps for years and always saw their downsides. They were clunky and slow, with too many clicks. Their AI integration was messy.
  choices:
    - title: One task at a time
      icon: target
      text: The main screen is simple and minimalist, a bit like a Pomodoro timer. I'm still experimenting with it, but for now it works well.
    - title: Start small with the AI
      icon: bot
      text: Agents can add and change tasks, but not delete them yet. I'm testing what's there first and making sure the AI works well with it. I'll add more, like delete, when I need it.
    - title: Hosted at home
      icon: server
      text: It runs on my own Raspberry Pi. It's free, and I was curious what hosting it myself would be like.
    - title: I decided the features
      icon: user-check
      text: I planned the main features. Claude Code did most of the work on making the UI work well and look good.
  result: I use it every day now and log all my to-dos in it. It's still new, so it's too early to say if it becomes my daily driver. I'm happy with how it turned out. As the main user, I'll keep spotting new efficiencies and adding them.
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

<div class="ov-old">

A self-hosted task board built to stay open all day and answer one question at a glance: what am I doing now, and what's next? The main screen isn't a list but a **Focus view** with one task in progress, and starting another pauses the first. A timer runs on the server, so every device shows one countdown and a locked phone still rings. Voice capture turns one spoken ramble into separate task drafts.

Its unusual goal is that **AI agents are users too**. Claude Code, other MCP clients or any script can read and update the board through an **MCP server** and a REST API, using scoped, expiring tokens with no delete tool. Inside the app, an assistant suggests the order of work and proposes changes, but nothing is saved until I approve it.

Every write goes through one service layer and one event log, which gives the audit trail, live sync across devices and per-token access in a single design. It's a TypeScript monorepo (React PWA, Hono, SQLite) in one Docker container, running on a **Raspberry Pi** at home over Tailscale. I was the architect and product owner, with Claude Code implementing 11 planned steps that I reviewed one by one.

</div>
<div class="ov-new">

I wanted one place to log every task the moment it comes into my mind, by voice or by chat. The task apps I used before were clunky and slow, with too many clicks and messy AI integration. So I built my own. AI sorts each task by project and priority.

The main screen is a simple **Focus view**: one task in progress, a bit like a Pomodoro timer. **AI agents are users too.** Claude Code or any MCP client can open the board and start working on tasks. They can add and change tasks, but not delete them yet. The assistant in the app suggests an order, and nothing is saved until I approve it.

I decided the main features. Claude Code built it in 11 planned steps that I reviewed one by one, and did most of the work on making the UI work well and look good. Every change goes through one service layer and one event log, so all devices stay in sync and every change is logged. It runs on my own **Raspberry Pi** at home. It's free, and I was curious what hosting it myself would be like. I use it every day now and log all my to-dos in it.

</div>
<div class="ov-own">

I wanted one place to log all my tasks rapidly, the moment they come into my mind, either by voice or chat. AI sorts them by project and priority. My AI agents can access the projects and begin executing those tasks as well. The apps I always used were clunky. They were slow, needed too many clicks and had messy AI integration.

The main screen is a simple, minimalist **Focus view**, a bit like a Pomodoro screen. It shows one task in progress at a time. **AI agents** like Claude Code connect over MCP. They can add and change tasks, but not delete them yet. Delete might come later, when I need it. The assistant in the app suggests the order of tasks, and nothing is saved until I approve it. Every change is logged with who made it.

I decided on most of the main features. AI was mainly responsible for making the UI work well and look good. Claude Code built it step by step, and I reviewed every step. It runs on my own **Raspberry Pi** at home. It's free, and I was simply curious how it would be to host it myself. I use it daily now and log all my to-dos in it. As the main user, I'll easily see new efficiencies I can add.

</div>
<div class="ov-pro">

I wanted one place to rapidly log all my tasks the moment they come into my mind, either by voice or chat. AI sorts them by project and priority. My AI agents can then access the projects and begin executing those tasks as well. The apps I used before were clunky: slow, with too many clicks and messy AI integration.

The main screen is a simple, minimalist **Focus view** with one task in progress at a time, a bit like a Pomodoro screen. **AI agents** like Claude Code connect over MCP. They can add and change tasks, but can't delete them yet. Delete might come later, when needed. In the app, the assistant suggests the order of tasks, but nothing is saved until I approve it. Every change is logged, along with who made it.

I decided on most of the main features, while AI was mainly responsible for making the UI work well and look good. Claude Code built it step by step, and I reviewed every step. It runs at home on my own **Raspberry Pi**. It's free, and I was simply curious what it would be like to host it myself. I now use it daily and log all my to-dos in it. As its main user, I can easily see new efficiencies to add.

</div>
