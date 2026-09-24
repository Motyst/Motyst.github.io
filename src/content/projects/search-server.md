---
title: Search Server
tagline: A document search engine in C++17 with TF-IDF ranking, minus-words and paginated results.
year: 2025
status: completed
role: Yandex Practicum project
order: 11
accent: '#22d3ee'
cover:
  type: image
  src: /media/search-server/run.svg
  alt: Search server ranking documents for the query "furry dog"
gallery:
  - type: image
    src: /media/search-server/run.svg
    caption: Real output. Five documents are indexed and the query "furry dog" is ranked by TF-IDF relevance.
skills: [C++, Information Retrieval, Algorithms, Data Structures]
workflow:
  - title: Index
    description: Documents are tokenised, stop words are removed and term frequencies are stored.
  - title: Query
    description: The query is parsed into plus-words and minus-words. Documents with a minus-word are excluded.
  - title: Rank
    description: Results are scored by TF-IDF relevance, with rating as a tie-breaker.
  - title: Serve
    description: Results come back paginated, with duplicate detection and a request queue.
links:
  - label: Source code
    url: https://github.com/Motyst/search-server
    kind: repo
---

A small search engine that works like the core of a web search engine. It indexes documents, supports **minus-words** to exclude results, and ranks matches by **TF-IDF**. Built in C++17 with pagination, duplicate removal and a request-rate queue.
