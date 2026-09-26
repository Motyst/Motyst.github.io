# Design archive

Earlier or alternative designs that were set aside but may come back.
Each entry says what it looked like, where the code goes and how to restore it.

## Screenshot panel (`src/components/Showcase.astro`)

### Caption bar floating over the screenshot

Used until 26 Sep 2026 (commit `43e5f81`). The caption, dots and arrows
floated over the bottom of the box on a dark fade, and the screenshot could run
underneath them. It gave the screenshot a little more height, but on some
window sizes the screenshot reached the arrows. It was replaced by a fixed
strip at the bottom of the box.

To restore it, replace the `@container (min-width: 521px) { … }` block in
`Showcase.astro` with the block below. In the `.show .win :global(.media)` rule,
change `max-height` back to
`calc(var(--stage) - 2 * var(--pad) - var(--bar, 0px))`.

```css
@container (min-width: 521px) {
  .stage {
    --stage: min(var(--stage-h, 420px), (100cqw - 2rem) * 0.625 + 5.4rem);
  }
  .under {
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 1px;
    margin: 0;
    min-height: 0;
    padding: 0.9rem 1rem 0.6rem;
    border-radius: 0 0 var(--radius) var(--radius);
    background: linear-gradient(transparent, rgb(9 9 11 / 0.88) 60%);
    pointer-events: none;
  }
  .ctrl {
    pointer-events: auto;
  }
  .cap {
    color: var(--text);
  }
  .slide {
    padding: 0.8rem 1rem 3.2rem;
  }
  .win {
    --pad: 2rem;
  }
}
```

Full file at that point: `git show 43e5f81:src/components/Showcase.astro`

### "Floating in a halo" (lab round 10, option C)

There's no box: the screenshot floats in a cloud of the project colour, with
the caption and arrows below it. It's the most atmospheric look, but less
structured than the current aura around the box.

To try it, add the rules below to the end of the `<style>` in
`Showcase.astro`. Drop the `:global(html[data-lab='glow-float'])` prefix to make
it the default, or add `'glow-float'` to `src/data/lab-variants.ts` to show it
in the lab (any page also previews it with `?lab=glow-float`).

```css
:global(html[data-lab='glow-float']) .stage {
  border-color: transparent;
  overflow: visible;
  background: none;
  box-shadow: none; /* removes the current aura */
}
:global(html[data-lab='glow-float']) .stage::before {
  inset: -4% -3% 6%;
  background: color-mix(in oklab, var(--c) 70%, transparent);
  mask-image: none;
  border-radius: 30%;
  filter: blur(70px);
  opacity: 0.6;
}
:global(html[data-lab='glow-float']) .under {
  background: none;
}
```

Lab screenshot of it: `git show 001254e:public/lab/glow/glow-float.webp > glow-float.webp`

### Older layouts, for reference

- **Description above the screenshots, framed:** commit `f3711f7`
  (`git show f3711f7:src/components/ProjectPanel.astro`).
- **Plain image strip with "← 1 / 4 →":** commit `a7c94a5`.
