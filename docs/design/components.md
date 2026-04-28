# Components — Pulseboard Landing (fork of host_page)

Inherits Kinetic Observatory component library. Product-specific additions for the landing surface.

## Inherited (use as-is)

- `<OrbitHero />` — full-viewport hero
- `<FeatureTile />` — glass-surface card for feature grid
- `<EyebrowLabel />` — uppercase eyebrow
- `<KineticCTA />` — primary button
- `<GridBackdrop />` — observatory grid overlay

## Pulseboard-specific (1–2 components)

### `<PulseHero />`
Replaces `<OrbitHero />` for landing. Animated waveform of network packets pulsing across the hero — semi-transparent cyan strokes (`--color-primary`) that radiate from a central phone-silhouette. Reduced-motion fallback: static waveform.

### `<SponsorTierCard />`
Pricing-card variant for sponsorship tiers ($5 / $25 / $100). Glass-surface base from `<FeatureTile />` + `--color-brand` vibrant-cyan accent. CTAs link to GitHub Sponsors. Includes tier-benefit checklist + optional "Most Popular" eyebrow on the $25 tier.

## Stack

- React 18, Tailwind 3, shadcn/ui (new-york + neutral)
- `lucide-react` icons (Network, Wifi, Activity, Shield)
- `framer-motion` for waveform animation
- `next-themes` for dark-default + light support

## Note

The Android app (in `~/AndroidStudioProjects/pulseboard`) uses Material 3 components, NOT this library. This components doc only covers the marketing landing surface.
