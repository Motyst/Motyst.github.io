---
title: Polymarket Liquidity Guardian
summary: Real-time order protection bot
icon: shield-chart
tagline: A real-time bot that cancels liquidity orders the instant they reach the top of the Polymarket order book.
year: 2026
status: completed
role: Solo developer
order: 8
accent: '#60a5fa'
skills: [Python, WebSockets, REST APIs, Real-time Systems, Automation]
workflow:
  - title: Sync
    description: Fetches your open orders through the REST API.
  - title: Subscribe
    description: Opens a WebSocket and subscribes to live order book updates for each token.
  - title: Detect
    description: On every update, checks whether a buy equals the best bid or a sell equals the best ask.
  - title: Cancel & notify
    description: Cancels the order instantly and sends a desktop notification.
  - title: Re-sync
    description: Re-syncs every 60 seconds to pick up new orders and auto-reconnects on drops.
highlights:
  - Reacts in milliseconds, compared with 3–5 seconds when polling
  - Only cancels, never places or modifies orders
  - Pluggable notifiers, with Telegram and Discord templates included
links:
  - label: Source code
    url: https://github.com/Motyst/polymarket-bot-reward-farm
    kind: repo
---

Liquidity providers on Polymarket earn rewards for resting orders, but they don't want those orders to actually fill. This bot protects them. It streams the order book over **WebSockets** and cancels an order the moment it becomes the best bid or ask.

Moving from polling to streaming cut the reaction time from **3–5 seconds to milliseconds**. It also handles reconnection and periodic re-syncs, so orders placed on the website are picked up automatically.
