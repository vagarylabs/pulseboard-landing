# Design surface — Pulseboard Landing (fork of host_page Kinetic Observatory)

Tier B per `~/.claude/conventions/design-system.md §2`. Token-swap fork.

## Fork lineage

Forked from `~/Documents/Github/host_page/docs/design/` 2026-04-28 by PCN Session 11B.

**Inherited (do NOT modify):**
- Typography scale (Manrope display + Inter body + JetBrains Mono dials)
- Component philosophy (`<OrbitHero />`, `<Gauge />`, `<Dial />`, `<FeatureTile />`, `<EyebrowLabel />`, `<KineticCTA />`)
- shadcn posture (baseColor: neutral, style: new-york, cssVariables: true)
- Surface family (`ko-surface-*`), semantic status (`ko-healthy/warning/error/unknown`)
- Animation timings + accessibility posture

**Forked (see local files):**
- `palette.md` — pulse-cyan network-vibrant palette
- `brand.md` — Pulseboard identity, voice, audience
- `components.md` — fork notes + product-specific 1-2 components

## Note: app vs landing design

The Android app in `~/AndroidStudioProjects/pulseboard` follows Material 3 design system (Android-native). The Material 3 dynamic-color system aligns with our cyan palette, but the app's design surface is owned in that repo, NOT here. This `docs/design/` only covers the **landing-page web surface**.

## Maintenance rule

When host_page upstream evolves, mirror upstream. Only the 4 brand swap-points stay product-specific.
