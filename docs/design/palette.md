# Palette — Pulseboard

Token-swap fork of host_page Kinetic Observatory. Only 4 swap-points changed.

## Brand swap-points (CSS custom-properties in `app/globals.css`)

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#06B6D4` | pulse-cyan — CTAs, signal indicators, active states |
| `--color-secondary` | `#0EA5E9` | sky — deeper accent, links |
| `--color-accent` | `#14B8A6` | teal — info states, secondary CTAs |
| `--color-brand` | `#22D3EE` | vibrant-cyan — logo + brand surfaces |

## Inherited from host_page (DO NOT modify)

- `ko-surface` family + `ko-on-surface` text colors
- `ko-healthy/warning/error/unknown` semantic status
- shadcn neutral HSL ramp

## Why pulse-cyan

Network packets pulse. Cyan is the dominant signal-monitoring color across tooling (Wireshark, network dashboards, terminal-based monitors). Vibrant-cyan brand surface evokes the always-on vigilance of a network monitor without going harsh-electric.

## Reference

Upstream: `~/Documents/Github/host_page/docs/design/palette.md` § Template swap points.
