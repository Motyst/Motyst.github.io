/**
 * Project icons: small multi-colour illustrations on a 64×64 grid.
 * `bg` is the tile background (any CSS background), `art` the SVG shapes.
 * Solid fills only (no <defs>/gradients) so many copies can share a page.
 * Reference one from a project with `icon: <key>`.
 */
export interface ProjectIconArt {
  bg: string;
  art: string;
}

export const icons: Record<string, ProjectIconArt> = {
  /** Mental Training Bot: a two-tone brain with a gold XP star. */
  brain: {
    bg: 'linear-gradient(150deg, #8b5cf6 0%, #4c1d95 100%)',
    art: `
      <path d="M32 16C28 13 20 14 18 20c-5 1-7 7-5 11-3 4-1 11 4 12 1 5 8 7 12 4 2 1 3 0 3-1z" fill="#ff7eb6" />
      <path d="M32 16c4-3 12-2 14 4 5 1 7 7 5 11 3 4 1 11-4 12-1 5-8 7-12 4-2 1-3 0-3-1z" fill="#ffb8d6" />
      <path d="M32 18v27" stroke="#c2185b" stroke-width="1.6" stroke-linecap="round" opacity=".55" />
      <g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".75">
        <path d="M21 25q5 1 6 6M18 36q5-1 8 3M42 24q-4 2-5 6M46 36q-5-1-8 3" />
      </g>
      <path d="M15 8l1.3 4 4 1.3-4 1.3-1.3 4-1.3-4-4-1.3 4-1.3z" fill="#67e8f9" />
      <circle cx="48" cy="48" r="9.5" fill="#ffd166" stroke="#4c1d95" stroke-width="2.5" />
      <polygon points="48,42.3 49.5,46 53.4,46.2 50.4,48.8 51.4,52.6 48,50.5 44.6,52.6 45.6,48.8 42.6,46.2 46.5,46" fill="#7c3aed" />`,
  },

  /** Publishing Automation: one video beaming out to eight networks. */
  broadcast: {
    bg: 'linear-gradient(150deg, #1e293b 0%, #020617 100%)',
    art: `
      <circle cx="32" cy="32" r="21" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="1.5" />
      <g stroke="#fff" stroke-opacity=".28" stroke-width="1.5">
        <path d="M32 32L53 32M32 32l14.85 14.85M32 32v21M32 32L17.15 46.85M32 32H11M32 32L17.15 17.15M32 32V11M32 32l14.85-14.85" />
      </g>
      <circle cx="53" cy="32" r="4.4" fill="#4cc9f0" />
      <circle cx="46.85" cy="46.85" r="4.4" fill="#f72585" />
      <circle cx="32" cy="53" r="4.4" fill="#ffd166" />
      <circle cx="17.15" cy="46.85" r="4.4" fill="#06d6a0" />
      <circle cx="11" cy="32" r="4.4" fill="#ff8c42" />
      <circle cx="17.15" cy="17.15" r="4.4" fill="#a78bfa" />
      <circle cx="32" cy="11" r="4.4" fill="#ef476f" />
      <circle cx="46.85" cy="17.15" r="4.4" fill="#3a86ff" />
      <rect x="21" y="21" width="22" height="22" rx="7" fill="#fff" />
      <path d="M29 26.5v11l9-5.5z" fill="#ff3b5c" />`,
  },

  /** AI Research Briefing: a radar sweep picking up coloured sources. */
  radar: {
    bg: 'linear-gradient(150deg, #0e7490 0%, #042f2e 100%)',
    art: `
      <g fill="none" stroke="#5eead4" stroke-width="1.5" opacity=".4">
        <circle cx="32" cy="32" r="23" /><circle cx="32" cy="32" r="15.5" /><circle cx="32" cy="32" r="8" />
      </g>
      <path d="M32 32V9a23 23 0 0 1 19.92 11.5z" fill="#34d399" opacity=".38" />
      <path d="M32 32l19.92-11.5" stroke="#a7f3d0" stroke-width="2.2" stroke-linecap="round" />
      <circle cx="43" cy="16.5" r="3.4" fill="#ff6b35" />
      <circle cx="19" cy="23" r="2.8" fill="#ffd166" />
      <circle cx="46" cy="41" r="2.8" fill="#f472b6" />
      <circle cx="23" cy="45" r="2.6" fill="#60a5fa" />
      <circle cx="35" cy="50" r="2.2" fill="#c4b5fd" />
      <path d="M32 24.5l1.9 5.6 5.6 1.9-5.6 1.9-1.9 5.6-1.9-5.6-5.6-1.9 5.6-1.9z" fill="#fff" />`,
  },

  /** YouTube → X Post Bot: a video turns into an approved post. */
  'video-to-post': {
    bg: 'linear-gradient(150deg, #9f1239 0%, #2a0a14 100%)',
    art: `
      <rect x="8" y="10" width="27" height="20" rx="5.5" fill="#ff2d55" />
      <path d="M19 15.5v9l7.5-4.5z" fill="#fff" />
      <path d="M37 20c8 0 11 3 11 9" fill="none" stroke="#ffd166" stroke-width="3" stroke-linecap="round" />
      <path d="M44 26l4 4 4-4" fill="none" stroke="#ffd166" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="25" y="32" width="30" height="23" rx="5.5" fill="#f8fafc" />
      <path d="M30 37l5 5M35 37l-5 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" />
      <rect x="39" y="38" width="11" height="2.6" rx="1.3" fill="#94a3b8" />
      <rect x="30" y="45.5" width="20" height="2.6" rx="1.3" fill="#cbd5e1" />
      <rect x="30" y="50" width="13" height="2.6" rx="1.3" fill="#cbd5e1" />
      <circle cx="53" cy="53" r="7" fill="#22c55e" stroke="#2a0a14" stroke-width="2.5" />
      <path d="M49.8 53.2l2.2 2.2 4-4.4" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />`,
  },

  /** Polymarket Guardian: a shield over market candles, with a cancel badge. */
  'shield-chart': {
    bg: 'linear-gradient(150deg, #2563eb 0%, #0b1f5c 100%)',
    art: `
      <path d="M32 8l19 6.5V31c0 12.5-8.5 20.5-19 25-10.5-4.5-19-12.5-19-25V14.5z" fill="#3b82f6" />
      <path d="M32 8L13 14.5V31c0 12.5 8.5 20.5 19 25z" fill="#7cb4ff" />
      <path d="M32 8l19 6.5V31c0 12.5-8.5 20.5-19 25-10.5-4.5-19-12.5-19-25V14.5z" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round" />
      <g stroke-width="1.6" stroke-linecap="round">
        <path d="M24 25v18" stroke="#bbf7d0" /><path d="M32 29v14" stroke="#fecaca" /><path d="M40 20v18" stroke="#bbf7d0" />
      </g>
      <rect x="21.5" y="28" width="5" height="11" rx="1.2" fill="#22c55e" />
      <rect x="29.5" y="32" width="5" height="7" rx="1.2" fill="#f87171" />
      <rect x="37.5" y="23" width="5" height="12" rx="1.2" fill="#22c55e" />
      <circle cx="49" cy="49" r="8" fill="#f43f5e" stroke="#0b1f5c" stroke-width="2.5" />
      <path d="M46 46l6 6M52 46l-6 6" stroke="#fff" stroke-width="2.3" stroke-linecap="round" />`,
  },
  /** Privet: a matryoshka saying hello out loud. */
  matryoshka: {
    bg: 'linear-gradient(150deg, #f59e0b 0%, #7c2d12 100%)',
    art: `
      <ellipse cx="27" cy="43" rx="15.5" ry="15" fill="#e11d48" />
      <circle cx="27" cy="23" r="12" fill="#e11d48" />
      <circle cx="27" cy="24" r="8" fill="#fff1e6" />
      <path d="M19.2 22.5c1.5-4.5 4.4-6.5 7.8-6.5s6.3 2 7.8 6.5c-2.6-1.6-5.2-2.3-7.8-2.3s-5.2.7-7.8 2.3z" fill="#7c2d12" />
      <circle cx="24" cy="24.5" r="1.1" fill="#1f2937" /><circle cx="30" cy="24.5" r="1.1" fill="#1f2937" />
      <circle cx="22.6" cy="27.6" r="1.5" fill="#fb7185" opacity=".7" /><circle cx="31.4" cy="27.6" r="1.5" fill="#fb7185" opacity=".7" />
      <path d="M25.3 28.6q1.7 1.3 3.4 0" fill="none" stroke="#be123c" stroke-width="1.2" stroke-linecap="round" />
      <ellipse cx="27" cy="45" rx="9.5" ry="10.5" fill="#fff7ed" />
      <g fill="#f59e0b"><circle cx="27" cy="40.6" r="2.6" /><circle cx="31.2" cy="44.2" r="2.6" /><circle cx="27" cy="47.8" r="2.6" /><circle cx="22.8" cy="44.2" r="2.6" /></g>
      <circle cx="27" cy="44.2" r="2.2" fill="#e11d48" />
      <path d="M40 7h15a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-7l-5 4.5V25h-3a5 5 0 0 1-5-5v-8a5 5 0 0 1 5-5z" fill="#fff" />
      <g stroke="#e11d48" stroke-width="2.4" stroke-linecap="round"><path d="M41.5 14v4M45.5 11.5v9M49.5 13v6M53.5 15v2" /></g>`,
  },
  /** Course Content Studio: stacked lesson slides with artwork and an approval badge. */
  'slide-stack': {
    bg: 'linear-gradient(150deg, #c026d3 0%, #3b0a45 100%)',
    art: `
      <rect x="16" y="9" width="36" height="25" rx="4.5" fill="#f0abfc" opacity=".45" />
      <rect x="12" y="14" width="38" height="27" rx="5" fill="#f5d0fe" opacity=".75" />
      <rect x="7" y="20" width="42" height="30" rx="5.5" fill="#1e1b4b" />
      <rect x="10" y="23" width="36" height="17" rx="3" fill="#312e81" />
      <circle cx="37" cy="28.5" r="3.6" fill="#fcd34d" />
      <path d="M10 40l9.5-9.5 6 6 4.5-4.5 16 8z" fill="#a78bfa" />
      <path d="M10 40l9.5-9.5 6 6z" fill="#7c3aed" />
      <rect x="10" y="43.5" width="18" height="2.6" rx="1.3" fill="#e9d5ff" />
      <rect x="31" y="43.5" width="9" height="2.6" rx="1.3" fill="#a78bfa" />
      <path d="M53 5.5l1.3 4 4 1.3-4 1.3-1.3 4-1.3-4-4-1.3 4-1.3z" fill="#fde68a" />
      <circle cx="50" cy="50" r="8.5" fill="#22c55e" stroke="#3b0a45" stroke-width="2.5" />
      <path d="M46.4 50.2l2.5 2.5 4.6-5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />`,
  },
  /** Helm: a ship's wheel, with a sparkle badge for the AI agents on board. */
  wheel: {
    bg: 'linear-gradient(150deg, #10b981 0%, #022c22 100%)',
    art: `
      <path d="M36.0 30.0L53.0 30.0M34.2 34.2L46.3 46.3M30.0 36.0L30.0 53.0M25.8 34.2L13.7 46.3M24.0 30.0L7.0 30.0M25.8 25.8L13.7 13.7M30.0 24.0L30.0 7.0M34.2 25.8L46.3 13.7" stroke="#fcd34d" stroke-width="3.2" stroke-linecap="round" />
      <g fill="#fbbf24"><circle cx="54.5" cy="30.0" r="3" /><circle cx="47.3" cy="47.3" r="3" /><circle cx="30.0" cy="54.5" r="3" /><circle cx="12.7" cy="47.3" r="3" /><circle cx="5.5" cy="30.0" r="3" /><circle cx="12.7" cy="12.7" r="3" /><circle cx="30.0" cy="5.5" r="3" /><circle cx="47.3" cy="12.7" r="3" /></g>
      <circle cx="30" cy="30" r="16" fill="none" stroke="#fde68a" stroke-width="4.5" />
      <circle cx="30" cy="30" r="6.5" fill="#f59e0b" stroke="#fde68a" stroke-width="2.5" />
      <circle cx="50" cy="50" r="9" fill="#f8fafc" stroke="#022c22" stroke-width="2.5" />
      <path d="M50 44.2l1.5 4.3 4.3 1.5-4.3 1.5-1.5 4.3-1.5-4.3-4.3-1.5 4.3-1.5z" fill="#059669" />`,
  },
};
