---
# EXAMPLE PROJECT — replace with your own
title: Snapshot CLI
tagline: A fast command-line tool that backs up and diffs server configs.
year: 2024
status: archived
role: Author & maintainer
order: 3
accent: '#fbbf24'
cover:
  type: image
  src: /media/snapshot-cli/run.svg
gallery:
  - type: image
    src: /media/snapshot-cli/run.svg
    caption: A snapshot run across three servers.
  - type: image
    src: /media/snapshot-cli/report.svg
    caption: HTML diff report generated after each run.
skills: [Rust, Linux, Automation, GitHub Actions, CI/CD, Testing]
workflow:
  - title: Snapshot
    description: Connects over SSH and captures config files in parallel.
  - title: Diff
    description: Compares against the last snapshot and highlights changes.
  - title: Report
    description: Publishes a report via GitHub Actions on every scheduled run.
links:
  - label: Source code
    url: https://github.com/your-handle/snapshot
    kind: repo
  - label: Download
    url: https://github.com/your-handle/snapshot/releases
    kind: download
---

A small but sharp tool I wrote to stop worrying about "what changed on that server?". It's written in **Rust** for speed and ships as a single binary.
