# Pulseboard

**Open-source Android network monitor.** Watch every packet, every connection, every app — on your terms.

**Status**: pre-launch
**Brand**: Vagary Labs (tech/R&D division of Vagary Life Pvt Ltd)
**Domain**: `pulseboard.build` (pending purchase)
**Repo (renamed)**: was `NetworkMonitorCN` until 2026-04-19

## What this repo is

This is the **landing page** for Pulseboard. The actual Android app lives separately:

| Repo | Purpose | Stack |
|---|---|---|
| `pulseboard-landing` (this) | Marketing site + sponsor + OSS funnel | Next.js / Coolify |
| `~/AndroidStudioProjects/pulseboard` | Android app source | Kotlin / Android Studio |

## Sponsor-ready

Pulseboard is built to be sponsor-supported OSS:
- GitHub Sponsors button on every page
- Open Collective backer link (when activated)
- Sponsor tier benefits surfaced on landing (logo placement, priority issue triage)

## Brand identity

Pulse + dashboard. Every packet pulses through your phone — Pulseboard makes that pulse visible.

- **Primary**: pulse-cyan `#06B6D4`
- **Secondary**: sky `#0EA5E9`
- **Accent**: teal `#14B8A6`
- **Brand surface**: vibrant-cyan `#22D3EE`

See `docs/design/` for full token system + component fork notes from `host_page`.

## Local dev

```bash
npm install
npm run dev   # http://localhost:3000
```

## License

MIT — see `LICENSE`. (App in `~/AndroidStudioProjects/pulseboard` may carry a separate OSS license — see app repo.)
