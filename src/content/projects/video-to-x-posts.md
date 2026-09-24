---
title: YouTube → X Post Bot
summary: YouTube videos into on-voice X posts
icon: video-to-post
tagline: Turns a creator's YouTube videos into X posts in their own voice, with every draft approved in Telegram first.
year: 2026
status: completed
role: Solo developer
order: 4
accent: '#fb923c'
skills: [Python, Claude API, Prompt Engineering, Whisper, yt-dlp, Telegram Bot API, X API, SQLite, Scheduling, Human-in-the-loop, Automation]
workflow:
  - title: Monitor
    description: Checks a YouTube channel for new videos every day.
  - title: Transcribe
    description: Uses YouTube captions first and falls back to local Whisper when there are none.
  - title: Generate
    description: Claude writes post ideas in two versions, the creator's own style and a trend angle.
  - title: Review
    description: Drafts arrive in Telegram to approve, edit or reject in one tap.
  - title: Publish & learn
    description: Approved posts go out on schedule and are fed back in as style examples.
highlights:
  - Style feedback loop, so every approved post improves future drafts
  - Two versions of every idea, original voice and trend angle
  - Also writes long-form articles and promo copy
links:
  - label: Source code
    url: https://github.com/Motyst/video-to-x-posts
    kind: repo
---

A Telegram bot that watches a YouTube channel and turns each new video into **X posts written in the creator's own voice**. Nothing is published without a human saying yes.

## How it stays on-voice

Every idea comes in two versions. The *original* keeps the creator's exact vocabulary and tone. The *trend angle* reframes the same idea around patterns that perform well on X.

Every post the creator approves is saved as a **style example** and fed back into future Claude prompts, so the bot gets better the more it's used. Once a month it also re-reads old transcripts with the newer style examples to find ideas it missed.

## Built with

Python, the Anthropic API, `yt-dlp` and `youtube-transcript-api` for transcripts, `faster-whisper` as a local fallback, `tweepy` for posting, SQLite and APScheduler. Scheduling options run from +1h to +24h or a custom time, and every scheduled post can be cancelled.
