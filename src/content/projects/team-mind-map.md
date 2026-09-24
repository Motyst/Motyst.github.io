---
title: Team Mind Map
tagline: An interactive, fully editable team mind map in a single HTML file. No install, no accounts.
year: 2026
status: live
role: Solo developer
order: 7
accent: '#e0b454'
cover:
  type: image
  src: /media/mindmap-tool/map.png
  alt: Team Mind Map in the Navy Chalk theme
gallery:
  - type: embed
    src: /demos/mindmap.html
    caption: Live demo. Drag boxes, double-click to edit, scroll to zoom.
  - type: image
    src: /media/mindmap-tool/map.png
    caption: Navy Chalk theme (default).
  - type: image
    src: /media/mindmap-tool/paper-theme.png
    caption: Paper theme, one of five built-in themes.
skills: [JavaScript, React, HTML, CSS, SVG, UX Design]
workflow:
  - title: Open
    description: Double-click the file and it opens in any browser. Nothing to install.
  - title: Edit
    description: Drag any box, double-click to edit text, add or remove team members.
  - title: Style
    description: Switch between five themes and toggle icons and labels.
  - title: Save & share
    description: Save bakes your changes into a new self-contained HTML file. You can also export SVG or high-res PNG.
highlights:
  - One self-contained file you can share by email or chat
  - Save creates a new file with the state baked in, and saves can be chained
  - PNG export at 3× for A3 printing
links:
  - label: Try it live
    url: /demos/mindmap.html
    kind: live
  - label: Source code
    url: https://github.com/Motyst/mindmap-tool-html
    kind: repo
---

A mind map of a whole team (departments, people, their skills and their hobbies) that anyone can open and edit in a browser. **No install, no accounts and no server.**

The interesting engineering is in **Save**. Instead of relying on local storage, it writes a brand-new HTML file with the current state baked into the source. That file is a fully working copy you can send to a colleague, who can edit it and save again.

Try the live demo above, or [open it full screen](/demos/mindmap.html).
