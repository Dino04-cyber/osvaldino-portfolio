# Validation Log

## v5 Rebuild

### Issue fixed
- Screenshot showed project card text being squeezed and overlapping.
- Root cause: project information was visually compressed by the card/index layout and the case-study fields did not have enough grid space.

### Layout changes
- Rebuilt project cards as a wide stacked ledger layout.
- Project index now uses a fixed safe column on desktop and becomes a top bar on mobile.
- Case-study fields now use a controlled 4-column grid on desktop, 2-column on tablet, and 1-column on mobile.
- Added `minmax(0, 1fr)`, `min-width: 0`, and `overflow-wrap: break-word` patterns to prevent text overflow.

### Visual changes
- Replaced the dull olive-only palette with a more eye-catching editorial analytics palette:
  - Deep ink
  - Warm cream
  - Electric lime
  - Mint
  - Coral
  - Amber
  - Soft cyan
- Avoided generic blue/purple SaaS gradients.
- Used Newsreader, Archivo, and IBM Plex Mono for a sharper editorial/data identity.

### Technical checks
- Removed external icon dependencies.
- Maintained strict TypeScript interfaces.
- Added accessible focus states for nav, buttons, and links.
- Added profile image support through `public/profile.jpg` with fallback initials.
