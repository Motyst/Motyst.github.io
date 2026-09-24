---
# EXAMPLE PROJECT — replace with your own (see README.md → "Adding a project")
title: Pulse Dashboard
tagline: A real-time monitoring dashboard for my home lab, running on a Raspberry Pi.
year: 2026
status: live
role: Solo developer
featured: true
order: 1
accent: '#34d399'
cover:
  type: image
  src: /media/pulse-dashboard/overview.svg
  alt: Pulse dashboard overview with live charts
gallery:
  - type: image
    src: /media/pulse-dashboard/overview.svg
    caption: Live overview — CPU, memory and network across every device.
  - type: image
    src: /media/pulse-dashboard/devices.svg
    caption: Device list with health status at a glance.
  - type: image
    src: /media/pulse-dashboard/alerts.svg
    caption: Alert rules editor.
skills: [TypeScript, React, Node.js, WebSockets, SQLite, Raspberry Pi, Docker, Data Visualisation]
workflow:
  - title: Collect
    description: Tiny agents on each device push metrics every few seconds over WebSockets.
  - title: Store
    description: A Node.js service batches writes into SQLite with automatic downsampling.
  - title: Visualise
    description: The React UI streams live data into lightweight, custom SVG charts.
  - title: Alert
    description: Rules run on every update and send a notification when something drifts.
highlights:
  - Monitors 9 devices with under 2% CPU overhead
  - Runs 24/7 on a Raspberry Pi 5
  - Zero-config device discovery
links:
  - label: Live demo
    url: https://example.com
    kind: live
  - label: Source code
    url: https://github.com/your-handle/pulse
    kind: repo
---

Pulse started because I wanted to **see my whole home lab at a glance** — without paying for a cloud service or running a heavy monitoring stack.

The result is a small, fast dashboard that streams metrics from every device in real time and tells me when something needs attention.

## What I learned

Building it end to end taught me how to design a real-time data pipeline on constrained hardware: batching, downsampling and keeping the UI smooth even with thousands of points on screen.
