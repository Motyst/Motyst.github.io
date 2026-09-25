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
| Name, bio, email, GitHub, photo, “How I work” | `src/data/profile.ts` |
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
summary: What it does + the result  # one line under the title on the homepage
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

## Your photo

Put a square photo in `public/` (e.g. `public/me.jpg`) and set `photo: '/me.jpg'`
in `src/data/profile.ts`. Until then the About section shows your initials.

## Share image

`public/og.png` is the preview picture shown when the site is shared on
LinkedIn, WhatsApp, Telegram and so on. It's drawn by `src/pages/lab/og.astro`
from your profile and project icons. After changing either, start the site
(`npm run dev`) and run `npm run og` in a second terminal to save a fresh copy.

## Design lab

`/lab/` is an unlisted page (not linked, not indexed) for comparing design
ideas side by side. Click the options you like, add comments and press
**Copy reply** to paste your picks into the chat.

Double-click an option (or press **Full page**) to see the whole page with that
option applied, as a desktop or phone screen. Those pages live at
`/lab/preview/<variant>/`: add the variant id to `src/data/lab-variants.ts`, make
the component switch on its `variant` prop, and pass `preview="/lab/preview/<id>/"`
to the `<Choice>` (use `preview="/"` for Current, and `anchor` on the `<Question>`
to scroll to the right section).

To start a new round, edit `src/pages/lab/index.astro`: bump `round`, update
`applied` and swap the `<Question>` / `<Choice>` blocks.

## Deploying

Live at **https://motyst.github.io**. Every push to `main` builds and deploys
automatically via GitHub Actions (`.github/workflows/deploy.yml`).
