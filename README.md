# Portfolio

A minimal, modern portfolio built with [Astro](https://astro.build). Projects are
plain Markdown files; the Skills section is generated from them automatically.

## Run it

```bash
source ~/.nvm/nvm.sh   # only needed if `node` isn't on your PATH
npm install
npm run dev            # http://localhost:4321 (also reachable on your LAN)
npm run build          # type-check + build static site into dist/
npm run preview        # serve the built site
```

## Where things live

| What                            | File                              |
| ------------------------------- | --------------------------------- |
| Your name, bio, links, timeline | `src/data/profile.ts`             |
| Projects                        | `src/content/projects/*.md`       |
| Project screenshots/videos      | `public/media/<project>/`         |
| Skill groups shown on homepage  | `src/data/skills.ts`              |
| Project icons                   | `src/data/icons.ts`               |
| Project fields (schema)         | `src/content.config.ts`           |
| Colors, fonts, spacing          | `src/styles/global.css` (`:root`) |

## Adding a project

1. Create `src/content/projects/my-app.md` (the file name becomes the URL: `/work/my-app`).
2. Put media in `public/media/my-app/`.
3. Fill in the frontmatter:

```yaml
---
title: My App
summary: Short line for the tile  # shown under the title on the homepage
icon: brain             # key from src/data/icons.ts (falls back to a letter)
tagline: One sentence that sells it, shown in the project window.
year: 2026
status: live            # live | in-progress | archived | concept
role: Solo developer
order: 1                # lower = shown first
accent: '#34d399'       # project color
cover:                  # optional — a generated cover is used if omitted
  type: video           # image | video | youtube
  src: /media/my-app/demo.mp4
  poster: /media/my-app/poster.jpg
gallery:
  - type: image
    src: /media/my-app/screen-1.png
    caption: The main screen.
  - type: youtube
    src: VIDEO_ID       # just the ID after "v="
  - type: embed         # any iframe-able URL (Figma, CodePen, live demo…)
    src: https://example.com
skills: [TypeScript, React, Docker]
workflow:
  - title: Step one
    description: What happens here.
highlights:
  - A measurable outcome
links:
  - label: Try it
    url: https://example.com
    kind: live          # live | repo | download | video | docs | other
---

Write the story of the project here in Markdown.
```

Clicking a project on the homepage opens its window (media, story, workflow,
skills, links). Each project also has a full page at `/work/<file-name>`, and
`/?project=<file-name>` opens its window directly, which is handy for sharing.

The homepage Skills section only shows skills listed in `src/data/skills.ts`
(in that order, max 6 per group). Every skill is still shown in its project window.

Set `draft: true` to hide a project without deleting it.

## Deploying

Live at **https://motyst.github.io**. Every push to `main` builds and deploys
automatically via GitHub Actions (`.github/workflows/deploy.yml`).
