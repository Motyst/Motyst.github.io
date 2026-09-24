---
title: Mental Training Bot
summary: Gamified memory training on Telegram
icon: brain
tagline: A gamified Telegram bot for memory training, built for a paid community and running live.
year: 2026
status: live
role: Solo developer
featured: true
order: 1
accent: '#a78bfa'
skills: [Python, Telegram Bot API, Async Python, SQLAlchemy, SQLite, Streamlit, Analytics, Gamification, Product Design, VPS Deployment, Linux]
workflow:
  - title: Onboard
    icon: target
    description: A two-minute placement test calibrates each new member and recommends a starting level.
  - title: Train
    icon: dumbbell
    description: Word memorization drills in pairs or chains, training or timed test modes, from 5 to 100 words.
  - title: Score & reward
    icon: trophy
    description: Fuzzy answer matching, XP per skill bar, 21 achievements, streaks and an opt-in leaderboard.
  - title: Analyse
    icon: chart-column
    description: Engaged time and raw interactions feed a private Streamlit dashboard of where members stall.
highlights:
  - Live for a paid community, gated by one-time access codes
  - 21 achievements, streaks, XP and daily sprint challenges
  - New exercises plug in as a module plus a registry entry
  - Features ship behind runtime flags, no redeploy needed
links:
  - label: Source code
    url: https://github.com/Motyst/memory-exercise-telegram-bot
    kind: repo
---

A Telegram bot for **brain training**, built as a product for a mental-training community and running live. Members practise memorisation drills, and a full gamification layer of XP, streaks, achievements and a leaderboard keeps them coming back.

The main exercise is **Word Memorization**: word pairs or word chains, a study-only training mode or a timed test mode, three difficulty tiers and anywhere from 5 to 100 words. Answers use fuzzy matching with a short grace window, and members can retry mistakes or level up in one tap. A second exercise, narrated **Audio Visualization** stories, ships behind a feature flag.

Under the hood it's async throughout (`python-telegram-bot` with async SQLAlchemy on SQLite), with a modular exercise system, runtime feature flags toggled from an admin panel, and a private **Streamlit dashboard** showing time on task, engagement and where members stall.
