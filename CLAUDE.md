# Pulseboard Landing — Android OSS Network Monitor Landing Page

This repo is the **landing page** for **Pulseboard** — the Android OSS network monitor (renamed from `NetworkMonitorCN` 2026-04-19). Sponsor-ready, Play Store candidate.

## Claude Preamble
**Universal laws** (§4), **MCP routing** (§6), **Drift protocol** (§11), **Capability resolution** (§15), **Subagent SKILL POLICY** (§16), **Cite format** (§19), **Anti-hallucination** (§34), **Brand architecture** (§41), **Design system integration** (§42).

**Sources**: `~/.claude/conventions/universal-claudemd.md` + `~/.claude/conventions/project-hygiene.md` + `~/.claude/conventions/design-system.md`.

---

## Status & Tier

**Tier B — fork of host_page Tier-A design.** Token-swap fork. Pre-launch.

- **App repo**: `~/AndroidStudioProjects/pulseboard` (Android Kotlin — separate codebase)
- **This repo**: marketing landing page only (Next.js)
- Active cadence: pre-launch
- Inherits: design tokens, CI gates (Trivy + Cosign), Renovate canonical, observability scrape pattern

## Stack

- **Framework**: Next.js 14 App Router (this repo: landing only)
- **App** (separate): Android Kotlin — Pulseboard mobile app
- **UI**: React 18 + Tailwind 3 + shadcn/ui (new-york, baseColor neutral)
- **Deploy**: Coolify (Vagary VPS) → docker-compose.yml + Dockerfile

## Brand Tokens (4-token swap from host_page)

- `primary`: `#06B6D4` — pulse-cyan (CTAs, network signal)
- `secondary`: `#0EA5E9` — sky (deeper accent)
- `accent`: `#14B8A6` — teal (links, info)
- `brand`: `#22D3EE` — vibrant-cyan (logo + brand surfaces)

## Key Directories

- `app/` — Next.js App Router routes
- `components/` — Product components
- `lib/` — Utilities
- `docs/design/` — Design surface

## Pairing

- `~/AndroidStudioProjects/pulseboard` — Android app source (Kotlin)
- This landing — Play Store funnel + sponsor outreach + OSS contributor onboarding

## Sponsor angle

Pulseboard is sponsor-ready (per Phase 3 fleet rename 2026-04-19). The landing surfaces:
- GitHub Sponsors button
- Open Collective backer link (when set up)
- Sponsor tier benefits (logo placement, priority issue triage)

## Security & Secrets

- NEVER hardcode API keys; use `.env.local` (gitignored)
- Coolify env vars for prod
- Play Store metadata + screenshots managed in `~/AndroidStudioProjects/pulseboard`, not here

## Past / Retired

- `NetworkMonitorCN` (renamed 2026-04-19): repo path renamed to `pulseboard`, brand introduced
