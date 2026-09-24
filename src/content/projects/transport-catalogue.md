---
title: Transport Catalogue
tagline: A C++17 transit engine that answers route queries and draws geo-projected SVG maps, with no third-party libraries.
year: 2025
status: completed
role: Yandex Practicum project
order: 10
accent: '#fbbf24'
cover:
  type: image
  src: /media/transport-catalogue/dublin-map.svg
  alt: SVG map of Dublin bus routes rendered by the Transport Catalogue
gallery:
  - type: image
    src: /media/transport-catalogue/dublin-map.svg
    caption: Real output. Four Dublin bus routes fed in as JSON and rendered by the engine's own SVG library.
skills: [C++, Algorithms, Data Structures, Geo Projection, SVG, Parsing]
workflow:
  - title: Ingest
    description: Reads stops, GPS coordinates, road distances and routes from a single JSON document.
  - title: Index
    description: Stores everything in hash maps for O(1) lookups of buses, stops and distances.
  - title: Query
    description: Answers route stats (length, curvature, unique stops) and which buses serve a stop.
  - title: Render
    description: Projects coordinates onto a canvas and draws routes, stops and labels as SVG.
highlights:
  - Hand-written JSON parser and builder, with no nlohmann or similar libraries
  - Custom SVG rendering library
  - Haversine distances and a sphere-to-plane projection
links:
  - label: Source code
    url: https://github.com/Motyst/transport-catalogue
    kind: repo
---

A command-line transit catalogue. You give it bus routes and stops as JSON, and it answers statistical queries and renders the network as an SVG map. Everything is written from scratch in **C++17**, including the JSON parser and the SVG library.

For this portfolio I fed it four Dublin routes. Here is the real output for a query about the 46A and Trinity College:

```json
{ "request_id": 1, "route_length": 20626, "stop_count": 11,
  "unique_stop_count": 6, "curvature": 1.35006 }
{ "request_id": 2, "buses": ["46A", "C1"] }
```
