---
title: Publishing Automation
summary: One video in, eight networks out
icon: broadcast
tagline: One video in, eight social networks out — transcription, captions, scheduling and posting on autopilot.
year: 2026
status: completed
role: Solo developer
featured: true
order: 2
accent: '#f472b6'
private: true
skills: [Python, FastAPI, React, TypeScript, LLMs, Whisper, REST APIs, Scheduling, Automation, Human-in-the-loop]
workflow:
  - title: Upload
    description: A video is uploaded once, in one place.
  - title: Transcribe
    description: Speech is transcribed automatically so every caption is grounded in what was actually said.
  - title: Draft captions
    description: An LLM drafts captions for each network, ready to review and edit.
  - title: Schedule
    description: Posts are queued per network on a publishing schedule.
  - title: Publish
    description: The system posts to all eight networks automatically.
highlights:
  - Publishes to eight social networks from a single upload
  - FastAPI backend with a React dashboard
---

A system that takes a video from **upload to published posts on eight networks**. It transcribes the video, drafts captions, schedules everything and posts it, so one piece of content becomes a full publishing run without manual copy-pasting.

The backend is **FastAPI** and the dashboard is **React**. It works as part of the same system as my [YouTube → X Post Bot](/work/video-to-x-posts): ground everything in the transcript, keep a human in control, and automate the rest.
