---
title: Privet
summary: A phone-first app for speaking Russian out loud
icon: matryoshka
tagline: A phone-first app that gets complete beginners speaking Russian out loud, with real recordings, record-and-replay and spaced reviews.
year: 2026
status: in-progress
role: Solo developer
order: 5
accent: '#f59e0b'
private: true
skills: [TypeScript, React, Vite, Cloudflare Workers, Cloudflare D1 & R2, PWA, Web Audio, Spaced Repetition, OpenAI API, Voice AI, Product Design]
workflow:
  - title: Listen
    icon: headphones
    description: Each phrase plays from a real human recording, with slow playback that keeps the pitch.
  - title: Check
    icon: ear
    description: Pick what you heard from three shuffled options. A wrong pick means listening again.
  - title: Speak
    icon: mic
    description: Record yourself and replay it next to the original. The recording never leaves the device.
  - title: Recall
    icon: repeat
    description: Say the Russian before it's revealed, rate yourself honestly, and spaced repetition picks the next date.
  - title: Save
    icon: cloud
    description: Progress is saved privately on the server, not in the browser, and syncs when you come back.
highlights:
  - Speaking and listening first, with Cyrillic as support
  - Reviews only advance on honest, successful recalls
  - Recordings stay on the device and are never stored
  - Voice AI for four providers, behind daily and monthly request caps
---

A phone-first app that teaches complete beginners to **speak Russian**, not just read it. Explanations are in English, every lesson starts with listening and speaking, and Cyrillic and English sound hints are there as support. It installs from Android Chrome like a native app and works on a laptop too.

Five starter lessons teach words and short phrases with **real human recordings**. Learners record themselves and replay it against the original, and reviews ask them to produce the Russian before revealing it. An honest self-rating then schedules the next attempt with **spaced repetition**, and the whole method is based on research into how adults learn to speak a language.

It's built with React and TypeScript on **Cloudflare**: progress lives in D1 and generated audio is cached in R2. Live voice conversation with an AI coach is built for OpenAI, Grok, Gemini and ElevenLabs, with per-user and site-wide limits, and is being reworked before release. The app is in active development.
