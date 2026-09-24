---
title: Video Transcriber
tagline: Transcribe videos from YouTube, TikTok, Instagram, X or local files, fully offline with no API costs.
year: 2026
status: completed
role: Solo developer
order: 6
accent: '#c084fc'
cover:
  type: image
  src: /media/video-transcriber/web-ui.png
  alt: Video Transcriber web interface
gallery:
  - type: image
    src: /media/video-transcriber/web-ui.png
    caption: Web UI. Paste a URL or upload files, then pick the model, output format and language.
skills: [Python, Whisper, FastAPI, yt-dlp, ffmpeg, CLI Tools]
workflow:
  - title: Fetch
    description: Downloads audio from a URL with yt-dlp, or reads local files and whole folders.
  - title: Extract
    description: ffmpeg pulls out a clean audio track.
  - title: Transcribe
    description: faster-whisper runs locally, from the tiny model up to large-v3.
  - title: Export
    description: Saves plain text or SRT subtitles next to the source or in a chosen folder.
highlights:
  - Runs 100% locally, with no API keys and no per-minute costs
  - Web UI and CLI, including recursive batch mode
links:
  - label: Source code
    url: https://github.com/Motyst/video-transcriber
    kind: repo
---

A local transcription tool with two front doors: a **web UI** built on FastAPI and a **CLI** built with Click. Paste a link from YouTube, TikTok, Instagram or X, or point it at a file or an entire folder, and get back text or SRT subtitles.

Everything runs on your own machine with `faster-whisper`, so there are no API costs and nothing leaves your computer. It also became the transcription building block for my later publishing tools.
