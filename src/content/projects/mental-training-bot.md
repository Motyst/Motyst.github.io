---
title: Mental Training Bot
tagline: A gamified Telegram bot for memory training, built for a paid community and running live.
year: 2026
status: live
role: Solo developer
featured: true
order: 1
accent: '#34d399'
skills: [Python, Telegram Bot API, Async Python, SQLAlchemy, SQLite, Streamlit, Analytics, Gamification, Product Design, VPS Deployment, Linux]
workflow:
  - title: Onboard
    description: A two-minute placement test calibrates each new member and recommends a starting level.
  - title: Train
    description: Word memorization drills in pairs or chains, training or timed test modes, from 5 to 100 words.
  - title: Score & reward
    description: Fuzzy answer matching, XP per skill bar, 21 achievements, streaks and an opt-in leaderboard.
  - title: Analyse
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

A Telegram bot for **brain training**, built as a product for a mental-training community. Members practise memorisation drills, and the bot keeps them coming back through a full gamification layer.

## The exercises

**Word Memorization** is the main exercise. You can study pairs, where you recall each word's partner, or word lists, where each word prompts the next. It has a study-only training mode and a test mode where the words disappear on a timer before the quiz. Three difficulty tiers change the vocabulary, and counts go from 5 up to 100 words.

Answers are matched with fuzzy matching (Levenshtein distance ≤ 2, turned off for short words). A 2-second grace window catches answers typed just after the timer runs out. You can also retry your mistakes, run a reverse quiz, or level up in one tap.

**Audio Visualization** is narrated stories that members listen to and visualise, with an optional detail quiz and a focus check afterwards. It ships behind a feature flag, and adding a new story is as simple as dropping in an `.mp3`, with no restart.

## Under the hood

- Async throughout: `python-telegram-bot` with async SQLAlchemy, concurrent updates enabled
- SQLite through `aiosqlite` in WAL mode, with a PostgreSQL migration planned
- A modular exercise system, so a new exercise is one module plus a registry entry
- Runtime feature flags stored in the database and toggled from an `/admin` panel
- A private Streamlit dashboard showing time on task, commitment vs improvement, engagement and per-member drilldowns
