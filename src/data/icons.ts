/**
 * Project icon glyphs, drawn on a 24×24 grid with round 2px strokes
 * (the Lucide style). Reference one from a project with `icon: <key>`.
 *
 * To add an icon: copy the inner SVG of any icon from https://lucide.dev
 * (ISC licensed) or draw your own on the same grid, and add it here.
 * Brain, radar and shield below are from Lucide.
 */
export const icons: Record<string, string> = {
  brain: `
    <path d="M12 18V5" />
    <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
    <path d="M18 18a4 4 0 0 0 2-7.464" />
    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
    <path d="M6 18a4 4 0 0 1-2-7.464" />
    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />`,

  /** One video in the middle, broadcast out to eight networks. */
  broadcast: `
    <circle cx="12" cy="12" r="4.75" />
    <path d="M10.9 10.1v3.8l3.1-1.9z" fill="currentColor" />
    <path d="M21.25 12h.01M18.54 18.54h.01M12 21.25h.01M5.46 18.54h.01M2.75 12h.01M5.46 5.46h.01M12 2.75h.01M18.54 5.46h.01" stroke-width="2.6" />`,

  radar: `
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    <path d="M4 6h.01" />
    <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    <path d="M12 18h.01" />
    <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
    <circle cx="12" cy="12" r="2" />
    <path d="m13.41 10.59 5.66-5.66" />`,

  /** A video becomes a post: play button → arrow → X. */
  'video-to-post': `
    <rect x="2" y="3.5" width="11.5" height="8.5" rx="2.5" />
    <path d="M6.6 5.9v3.7l3-1.85z" fill="currentColor" />
    <path d="M13.5 7.75h1.75a2 2 0 0 1 2 2v2.75" />
    <path d="m15.25 10.75 2 2 2-2" />
    <rect x="11.5" y="14" width="10.5" height="8" rx="2.5" />
    <path d="m14.9 16.2 3.7 3.6M18.6 16.2l-3.7 3.6" />`,

  /** Shield with a market line inside. */
  'shield-chart': `
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m8 14 2.5-2.75 2 2L16 9.5" />
    <path d="M13.75 9.5H16v2.25" />`,
};
