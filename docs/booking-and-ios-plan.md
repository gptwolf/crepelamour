# Booking & iOS App — Plan (on hold)

**Status:** On hold pending business-owner discovery  
**Last updated:** 2026-08-07  
**Stack today:** Next.js 16 marketing site (home + `/crepes` / `/minis` / `/dubai-chocolate`), Instagram booking CTA, no backend

This document captures product/architecture decisions for (1) online booking and (2) an App Store iOS app. **Do not implement booking or Capacitor until the owner process is documented.**

---

## Decisions so far

| Topic | Decision |
|-------|----------|
| Why iOS? | App Store presence — look more legit |
| Shell tech (when ready) | **Capacitor** wrapping the hosted Next.js site |
| Where booking lives | **On the web (Next.js)** — not a separate native booking app |
| Sequence | **Owner discovery → booking on web → then Capacitor App Store** |
| Current phase | **Hold implementation; contact business owner** |

---

## Core architecture (when we resume)

```
┌─────────────────────────┐
│  App Store (Capacitor)  │  ← thin native shell (splash, icons, share, push)
│  WKWebView              │
└───────────┬─────────────┘
            │ shows
            ▼
┌─────────────────────────┐
│  Next.js site           │  ← booking UI + logic lives HERE
│  /book, API, Stripe…    │
└─────────────────────────┘
```

- **One product:** Safari, SEO, and the iOS app share the same booking flow.
- **Capacitor is distribution**, not a second frontend.
- Content/booking UX updates ship via web deploy; App Store resubmit only for native plugins/permissions.
- Avoid building booking only in Swift/RN while the website stays Instagram-only.

---

## Why we’re holding off

We do not yet know how the business actually takes and confirms jobs. Building forms, calendars, or deposits without that is guesswork.

| If we build without owner input… | Risk |
|----------------------------------|------|
| Generic inquiry form | Owner only replies on IG; dead inbox |
| Public open calendar | slots/travel/setup rules unknown |
| Stripe deposits | Wrong amounts/policies |
| App Store “Book now” | Promise ≠ ops → bad reviews |

**Today’s real process:** marketing site + Instagram DM (`@crepe_lamour`). Changing that is a business decision first.

---

## Phase 0 — Owner discovery (current)

### Goal

Document **current** booking flow and **desired** flow (what they would actually use).

### Discovery questions

#### A. How booking works today

1. How do most clients first reach you? (Instagram DM, referral, website, etc.)
2. Walk through a typical booking from first message to event day. What do you ask?
3. What info do you **always** need before you can quote or say yes? (date, city, guest count, indoor/outdoor, power, sweet vs savory, budget, …)
4. How far in advance do people usually book? Any minimum notice?
5. How many events per weekend/day? Travel limits (miles / counties)?
6. Do you hold tentative dates? How do you track holds today?

#### B. Money & commitments

7. Deposits? How much / when / how (Venmo, Zelle, cash, card)?
8. When is the balance due?
9. Cancellation / weather / reschedule policy (even if informal)?
10. Public prices or custom quotes only?

#### C. Service reality (affects form fields)

11. What’s included vs add-ons?
12. Setup/teardown time? Minimum guest count or spend?
13. Dietary (keto/GF/vegan) — notice needed? Extra fee?
14. Event types you won’t do, or peak seasons that book out?

#### D. What they want from a website/app

15. If clients could only do **one** thing online, what should it be?
    - Request a quote
    - See real-time availability
    - Pay a deposit
    - Just look at photos/menu (status quo)
16. Would they check/reply to web form leads? How fast? Which email/phone?
17. Stop relying on Instagram, or keep IG primary and web as backup?
18. App Store for **clients**, or later for **ops**?
19. Who manages content (photos, blackout dates) week to week?

#### E. App Store specifically

20. Is App Store near-term, or only after online booking works?
21. Apple Developer ($99/yr) + Mac/Xcode access?

### Pitch paragraph for the owner

> We’re planning better booking and maybe an iPhone app later. The app would show the same site — we won’t build booking twice. Before any of that, we need how you actually take jobs today: what you ask clients, deposits, how you track dates, and whether you’d use a website form. Once that’s clear, we can build something that matches your process instead of guessing.

### Exit criteria for Phase 0

- [ ] Owner interviewed (or written answers)
- [ ] Current vs desired process written down
- [ ] Explicit choice: IG-only vs quote form vs availability vs deposits
- [ ] Whether App Store is still near-term or parked after booking

After answers land, add something like `docs/booking-process.md` and open an implementation plan.

---

## Decision tree after discovery

```
Owner wants to keep IG-only forever?
  └─ Yes → No booking build. Optional thin App Store brochure (weak) or skip app.
  └─ No → What first?
        ├─ Cleaner leads        → Slice A1: web inquiry form + email
        ├─ Show availability    → A1 + manual blackouts or Cal.com
        └─ Take deposits        → A1 + policies + Stripe when quote rules clear
              then → Capacitor App Store wrap when /book is real
```

---

## Phase A — Booking on the web (parked)

Ship on `crepelamour.com` first; the future app will load this same UI.

### Slice A1 — Lead capture (minimum)

- Route: `/book` (header/menu CTAs point here; Instagram secondary)
- Fields (finalize with owner): name, contact, event date, guest count, event type, package interest, city, notes
- Spam protection; notify owner by email (e.g. Resend)
- Success state + privacy policy (`/privacy`)

### Slice A2 — Packages + deep links

- Tie to crepes / minis / dubai-chocolate families
- Pre-fill `/book?offering=minis` from menu cards

### Slice A3 — Availability

| Model | Effort | When |
|-------|--------|------|
| Manual confirm after form | Low | Manageable volume |
| Cal.com / Calendly embed | Low–med | Self-serve times quickly |
| Custom calendar + DB | High | Complex rules, full brand control |

Prefer manual or Cal.com before custom calendar.

### Slice A4 — Deposits

- Stripe Checkout / Payment Links after policies are clear
- Don’t block everything on full self-serve “slot + pay” unless required

**Suggested order:** A1 → A2 → (A3) → (A4) → Phase B

---

## Phase B — Capacitor App Store (parked)

**Start only after** at least A1 works on production mobile Safari.

1. Apple Developer Program; Mac + Xcode
2. Scaffold `mobile/` Capacitor; `server.url` → production HTTPS
3. Icons, splash, safe areas, share, Instagram deep link
4. Primary CTA = in-app `/book`
5. TestFlight → App Store (Food & Drink)

**App Store risk:** thin WebView wrappers can hit Guideline 4.2. A real inquiry/booking flow is the main mitigation.

**Native-only extras (not booking logic):** push, share, status bar, optional Apple Pay plugin later.

### Repo layout (when scaffolded)

```
crepelamour/
  src/                 # Next.js (source of truth)
  public/
  mobile/              # Capacitor (future)
    capacitor.config.ts
    ios/
  docs/
    booking-and-ios-plan.md   # this file
```

---

## Phase C — Optional later

- Push (“event confirmed”, promos)
- Android via same Capacitor project
- Expo/Swift rebuild only if WebView UX becomes the bottleneck

---

## Explicitly out of scope until discovery

- Implementing `/book`, email API, Stripe
- Capacitor / Xcode / TestFlight / App Store submit
- Assuming deposit amounts, blackout rules, or public pricing

### Still OK without discovery

- Offering pages, gallery, SEO, copy, performance
- Light PWA manifest polish (optional; not App Store)

---

## Defaults if owner is light on detail

| Topic | Default |
|-------|---------|
| Notify | Email only |
| Pricing on site | Custom quote (no public prices) |
| First build | A1 form → A2 CTA wiring → Capacitor |
| Instagram | Keep as backup CTA |

---

## Resume checklist

1. Complete Phase 0 discovery with the owner
2. Write `docs/booking-process.md` from answers
3. Implement A1 (+ A2) on web
4. Scaffold Capacitor and submit when booking story is real
5. Deposits/calendar only when process and policies support them

---

## Related repo context

- Brand CTAs today: Instagram `https://www.instagram.com/crepe_lamour/` (`src/lib/site.ts`, `Visit.tsx`, offering pages)
- Site config / routes: `src/lib/site.ts`
- No booking API or form exists yet
