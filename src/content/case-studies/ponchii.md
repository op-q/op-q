---
title: Ponchii
description: A creator-first storytelling and worldbuilding platform — Next.js, Supabase, a standalone Rust chat service, and a Stripe Connect payout system, built end to end.
draft: false
publishedAt: 2026-07-31
projectUrl: https://ponchii.com
---

<div class="cs">
<style>
  .cs {
    --cs-accent: #1f6f8b;
    --cs-accent-strong: #14526a;
    --cs-accent-soft: #e2eef3;
    --cs-surface: #ffffff;
    --cs-code-bg: #eef2f5;
    --cs-ok: #2c7a4b;
    --cs-ok-soft: #e3f2e8;
    --cs-warn: #96660c;
    --cs-warn-soft: #faf0dc;
    --cs-danger: #a5432c;
    --cs-danger-soft: #f7e6e0;
    font-family: -apple-system, "Segoe UI", "Inter", system-ui, sans-serif;
    color: var(--text);
    line-height: 1.6;
  }
  .cs * { box-sizing: border-box; }
  .cs a { color: var(--cs-accent-strong); }
  .cs code {
    font-family: ui-monospace, "SFMono-Regular", "IBM Plex Mono", Menlo, monospace;
    font-size: 0.88em;
    background: var(--cs-code-bg);
    padding: 0.12em 0.42em;
    border-radius: 4px;
    color: var(--cs-accent-strong);
  }
  .cs-hero { padding: 4px 0 32px; border-bottom: 1px solid var(--line); margin-bottom: 44px; }
  .cs-eyebrow {
    font-family: "Courier New", Courier, monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cs-accent);
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 16px;
  }
  .cs-eyebrow::before { content: ""; width: 22px; height: 1.5px; background: var(--cs-accent); display: inline-block; }
  .cs-hero h1 {
    font-size: clamp(2rem, 4.4vw, 2.9rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    font-weight: 700;
    margin: 0 0 14px;
    color: var(--text);
  }
  .cs-hero h1 .cs-accent-text { color: var(--cs-accent); }
  .cs-tagline { font-size: 1.05rem; color: var(--muted); max-width: 66ch; margin: 0 0 24px; }
  .cs-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .cs-pill {
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--line);
    background: var(--cs-surface);
    color: var(--muted);
  }
  .cs-pill.done { color: var(--cs-ok); background: var(--cs-ok-soft); border-color: transparent; }
  .cs-pill.next { color: var(--cs-accent-strong); background: var(--cs-accent-soft); border-color: transparent; }
  .cs section { margin: 52px 0 0; }
  .cs .cs-section-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 6px; }
  .cs .cs-index { font-family: "Courier New", Courier, monospace; color: var(--muted); font-size: 12.5px; }
  .cs h2 { font-size: 1.3rem; letter-spacing: -0.01em; margin: 0; font-weight: 700; color: var(--text); }
  .cs .cs-rule { border: none; border-top: 1px solid var(--line); margin: 10px 0 22px; }
  .cs h3 { font-size: 1rem; font-weight: 700; margin: 24px 0 10px; color: var(--text); }
  .cs p { max-width: 68ch; }
  .cs p.muted, .cs li.muted { color: var(--muted); }
  .cs .diagram {
    background: var(--cs-surface);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 18px;
    overflow-x: auto;
    margin: 16px 0 6px;
  }
  .cs .diagram-caption { font-size: 12.5px; color: var(--muted); margin: 10px 0 0; max-width: 70ch; }
  .cs pre.mermaid { margin: 0; display: flex; justify-content: center; min-width: 480px; }
  .cs .cs-concepts { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 12px; margin: 18px 0 6px; }
  .cs .cs-concept { background: var(--cs-surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; }
  .cs .cs-concept .cs-name { font-family: "Courier New", Courier, monospace; font-size: 12.5px; color: var(--cs-accent-strong); margin-bottom: 6px; }
  .cs .cs-concept p { font-size: 14px; color: var(--muted); margin: 0; }
  .cs .cs-table-scroll { overflow-x: auto; border: 1px solid var(--line); border-radius: 8px; }
  .cs table { border-collapse: collapse; width: 100%; min-width: 480px; font-size: 13.5px; background: var(--cs-surface); }
  .cs th, .cs td { text-align: left; padding: 9px 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
  .cs thead th {
    font-family: "Courier New", Courier, monospace;
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--background);
  }
  .cs tbody tr:last-child td { border-bottom: none; }
  .cs .cs-tag { display: inline-block; font-family: "Courier New", Courier, monospace; font-size: 10.5px; padding: 2px 7px; border-radius: 4px; }
  .cs .cs-tag.ok { background: var(--cs-ok-soft); color: var(--cs-ok); }
  .cs .cs-tag.warn { background: var(--cs-warn-soft); color: var(--cs-warn); }
  .cs .cs-tag.danger { background: var(--cs-danger-soft); color: var(--cs-danger); }
  .cs .cs-tag.neutral { background: var(--background); color: var(--muted); }
  .cs ol.cs-steps { padding-left: 0; list-style: none; counter-reset: step; max-width: 68ch; }
  .cs ol.cs-steps li { counter-increment: step; position: relative; padding: 4px 0 4px 38px; margin-bottom: 4px; }
  .cs ol.cs-steps li::before {
    content: counter(step);
    position: absolute;
    left: 0;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--cs-accent-soft);
    color: var(--cs-accent-strong);
    font-family: "Courier New", Courier, monospace;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cs ul.cs-list { max-width: 68ch; padding-left: 20px; }
  .cs .cs-footer { margin: 60px 0 0; padding: 20px 0 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 12.5px; }
</style>
<div class="cs-hero">
  <p class="cs-eyebrow">Case study</p>
  <h1>Ponchii — <span class="cs-accent-text">every story deserves a world</span></h1>
  <p class="cs-tagline">
    A creator-first storytelling and worldbuilding platform. Creators build a project, fill it with
    stories and a worldbook, publish entries, and sell monthly access. Readers subscribe, read, and
    talk about it in chapter chat. A Next.js web app, a read-only Expo mobile app, and a standalone
    Rust chat service all sit on top of one Postgres database that stays the source of truth for
    access and money.
  </p>
  <div class="cs-pills">
    <span class="cs-pill done">project → story → entry core loop</span>
    <span class="cs-pill done">block-based entry editor + asset library</span>
    <span class="cs-pill done">worldbook + story hub</span>
    <span class="cs-pill done">EUR subscriptions via Stripe Connect</span>
    <span class="cs-pill done">layered signup abuse protection</span>
    <span class="cs-pill done">SSR + SEO with a protection boundary</span>
    <span class="cs-pill done">five-surface CI pipeline</span>
    <span class="cs-pill done">Rust chat service (standalone)</span>
    <span class="cs-pill next">chat wired into the web app</span>
    <span class="cs-pill next">text-to-speech service</span>
  </div>
</div>
<section>
  <div class="cs-section-head"><span class="cs-index">01</span><h2>The product</h2></div>
  <hr class="cs-rule" />
  <p>
    The idea behind Ponchii is that creators aren't publishing isolated chapters — they're building
    worlds. Stories, characters, lore, timelines, reader community, and eventually products all
    orbit one creative world, and readers should feel like they're entering a living space rather
    than opening another content page.
  </p>
  <div class="cs-concepts">
    <div class="cs-concept">
      <div class="cs-name">creator loop</div>
      <p>Create a world, write stories and entries, build lore in the worldbook, launch paid access, and choose which lore appears on the reader-facing story hub.</p>
    </div>
    <div class="cs-concept">
      <div class="cs-name">reader loop</div>
      <p>Discover a world, read in a cinematic reader, subscribe when access is paid, explore the connected lore, and react in chapter chat.</p>
    </div>
    <div class="cs-concept">
      <div class="cs-name">launch wedge</div>
      <p>Independent manga, webcomic, and illustrated serial creators — stories where chapters, lore, community, and membership genuinely benefit from living in one place.</p>
    </div>
  </div>
  <p class="muted">
    The long-term platform is multi-format — text, comics, audio, interactive stories — but v1 is
    deliberately about making this one loop feel real and trustworthy end to end.
  </p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">02</span><h2>System boundary</h2></div>
  <hr class="cs-rule" />
  <p>
    <code>apps/web</code> is the product: the entry editor and viewer, the worldbook, the story hub,
    every Stripe route, and Supabase Auth. <code>apps/mobile</code> is a reader — it can show a
    library and already-purchased access, but by product rule it can never start a payment,
    subscription, or payout flow; that stays on <code>ponchii.com</code> under App Store and Play
    policy. <code>services/chat</code> is a separate Rust process for chapter chat, reachable only
    with a token the web app issues after checking access. Everything durable — projects, stories,
    entries, worldbook content, access state, chat history — lives in one Supabase Postgres
    database.
  </p>
  <div class="diagram">
    <pre class="mermaid">
flowchart LR
    R["Reader / creator browser"] --> WEB["Next.js web app\napps/web · Vercel"]
    M["Mobile app\napps/mobile · Expo\nread-only, no payments"] --> WEB
    WEB --> PG[("Supabase Postgres\nprojects, stories, entries,\nworldbook, access, billing")]
    WEB --> SBA["Supabase Auth"]
    WEB --> ST["Stripe\nConnect + subscriptions"]
    WEB --> AB["CAPTCHA +\nlayered rate limits"]
    WEB -->|signed access token| CHAT["Chat service\nservices/chat · Fly.io"]
    CHAT --> PG
    CHAT -.-> RD[("Redis\npub/sub fanout")]
    EDGE["Scheduled functions\ncleanups + ops digest"] --> PG
    EDGE --> MAIL["Transactional email"]
    TTS["services/tts\nplanned"] -.-> WEB
    classDef store fill:#1f6f8b,stroke:#14526a,color:#fff
    classDef planned stroke-dasharray: 4 3
    class PG store
    class RD,TTS planned
    </pre>
  </div>
  <p class="diagram-caption">Dashed nodes are implemented but not yet load-bearing, or not built yet.</p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">03</span><h2>The core domain records</h2></div>
  <hr class="cs-rule" />
  <p>The product's core loop is four concepts deep, and almost everything else hangs off them.</p>
  <div class="cs-concepts">
    <div class="cs-concept">
      <div class="cs-name">project</div>
      <p>A creator's world. Owns members, privacy defaults, and the design/layout config for its public page.</p>
    </div>
    <div class="cs-concept">
      <div class="cs-name">story</div>
      <p>Lives inside a project. Carries its own access, subscription price tier, and launch/monetization state.</p>
    </div>
    <div class="cs-concept">
      <div class="cs-name">entry</div>
      <p>What a reader actually reads — chapters built from text, image, and scene blocks in the entry editor.</p>
    </div>
    <div class="cs-concept">
      <div class="cs-name">worldbook entry</div>
      <p>The creator's private lore and timeline notes. Linked to specific stories only when marked to appear on the story hub.</p>
    </div>
  </div>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">04</span><h2>The creative surface: editor, viewer, assets</h2></div>
  <hr class="cs-rule" />
  <p>
    The entry editor is the emotional center of the product — it has to feel like a creative tool,
    not a form. Entries are block-based: rich text (built on a vendored ProseMirror/tiptap core),
    images, and visual scene blocks, with a creator mode and a reader mode rendering from the same
    content so the preview a creator trusts is the page a reader gets. The editor carries the
    details a real writing tool needs — keyboard shortcuts, calm autosave, and block actions that
    stay out of the way until hovered — because the product pillar is that creators should never
    feel blocked by a spinner or an admin flow.
  </p>
  <p>
    Uploads feed a scoped asset library. Every asset belongs to a project, story, or entry scope,
    can be copied or moved between scopes, and supports drag-and-drop into the editor. The UI
    inserts an optimistic placeholder immediately — with the real upload settling in the background —
    so creators are never stuck watching a spinner.
  </p>
  <div class="diagram">
    <pre class="mermaid">
flowchart LR
    ED["Entry editor\ntext · image · scene blocks"] -->|upload| API["Server route\nownership + limit checks"]
    API --> R2[("Object storage\nprivate bucket")]
    API --> DB[("asset + usage rows")]
    ED -->|stores stable object key| DB
    RV["Reader view"] -->|asset key| SIGN["short-lived signed URL\ncached just under its expiry"]
    SIGN --> R2
    classDef store fill:#1f6f8b,stroke:#14526a,color:#fff
    class R2,DB store
    </pre>
  </div>
  <p class="diagram-caption">
    Entries store stable object keys, never URLs. Readers get short-lived signed URLs minted on
    demand and cached client-side just under their expiry, so protected story images stay protected
    without re-signing on every render.
  </p>
  <p class="muted">
    Usage rows tie every stored object to what references it, so lifecycle cleanup jobs can tell
    which objects are safe to remove from storage — deleting a story can't silently strand or orphan
    a paid story's assets.
  </p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">05</span><h2>The public web: SSR, SEO, and the protection boundary</h2></div>
  <hr class="cs-rule" />
  <p>
    Discovery is a product feature: a public creator, world, or story should be findable from a
    search engine, while private, draft, unlaunched, and paid-only content must never leak into
    public HTML. Every public surface is server-rendered by the Next.js App Router, and access is
    decided on the server before render — so protected content can't end up in a cache, a crawler,
    or view-source, no matter what the client does.
  </p>
  <ul class="cs-list">
    <li>
      URLs are the information architecture: <code>/handle/project/story/entry</code>, built from a
      single canonical-path module so every surface — pages, metadata, sitemap — agrees on one URL
      per resource, with slugs normalized and encoded in one place instead of ad hoc per page.
    </li>
    <li>
      The sitemap is generated from the database and includes only what is genuinely public:
      public profiles, public projects, launched stories, published entries. Robots rules keep
      account, settings, and API routes out of the index entirely.
    </li>
    <li>
      Static route names are reserved at the database level, so no one can register a handle like
      <code>settings</code> and shadow a real route — the URL namespace is protected by a
      constraint, not a code review.
    </li>
    <li>
      Canonical URLs, Open Graph metadata, and structured descriptions come from one shared
      metadata module, so a retitled story keeps one canonical address instead of forking into
      duplicates.
    </li>
  </ul>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">06</span><h2>Signup: passwordless, and abuse-resistant by construction</h2></div>
  <hr class="cs-rule" />
  <p>
    Ponchii signup is a single email-OTP form that serves both login and registration. That
    convenience has a cost: the send-code endpoint is a spam cannon if left open, so a CAPTCHA
    challenge and several independent layers of rate limiting stand between an email address and an
    OTP send.
  </p>
  <div class="diagram">
    <pre class="mermaid">
sequenceDiagram
    participant B as Browser
    participant CF as CAPTCHA provider
    participant API as send-code endpoint
    participant KV as Rate limiter
    participant SB as Supabase Auth
    B->>CF: render managed/invisible challenge
    CF-->>B: challenge token
    B->>API: send-code(email, token)
    API->>CF: verify token, action, hostname
    API->>KV: check layered windows
    KV-->>API: within limits
    API->>SB: send OTP
    SB-->>API: pending auth identity created
    API-->>B: server-side OTP session
    B->>API: verify-code(otp)
    API->>SB: verify code, bound to OTP session
    SB-->>API: email confirmed
    API->>SB: create application profile
    Note over SB: the application profile only exists<br/>after verification — never before
    </pre>
  </div>
  <p class="diagram-caption">
    Supabase's OTP flow creates a pending auth identity for a brand-new email by default. Ponchii
    treats that row as a pending challenge, not a product user — the application profile isn't
    created until the email is actually confirmed.
  </p>
  <h3>Rate-limit layers</h3>
  <div class="cs-table-scroll">
    <table>
      <thead><tr><th>Layer</th><th>Why this axis</th></tr></thead>
      <tbody>
        <tr><td>Flood gate</td><td>The cheapest circuit breaker — runs before CAPTCHA verification even happens.</td></tr>
        <tr><td>IP</td><td>Coarsest signal; also the easiest for an attacker to rotate, so it never stands alone.</td></tr>
        <tr><td>Network prefix</td><td>Catches a botnet spreading requests across one shared range.</td></tr>
        <tr><td>Email</td><td>The identity actually being registered.</td></tr>
        <tr><td>IP + email pair</td><td>Can't be bypassed by rotating only one axis at a time.</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:10px;">
    Verification has its own tighter policy on top: repeated failures escalate to a fresh CAPTCHA
    and then to blocking, tracked by keyed HMAC identifiers rather than raw email or IP addresses.
    And the limiter fails closed — if the backing store is unavailable, the endpoint returns 503
    rather than pretending a request is the first one it has seen.
  </p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">07</span><h2>Pending users don't linger</h2></div>
  <hr class="cs-rule" />
  <p>
    A scheduled cleanup worker claims unverified auth identities past their retention window using
    <code>FOR UPDATE SKIP LOCKED</code>, assigns each job a lock token and a short lease, and only
    deletes an identity if it's still unverified and the worker still owns the lock at the moment of
    deletion. An expired lease just returns the job to the pool for the next run.
  </p>
  <div class="diagram">
    <pre class="mermaid">
stateDiagram-v2
    [*] --> pending_auth: OTP requested
    pending_auth --> verified: email confirmed<br/>inside retention window
    pending_auth --> claimed: cleanup worker,<br/>lock token + lease
    claimed --> deleted: still unverified,<br/>worker still owns the lock
    claimed --> pending_auth: lease expired,<br/>recovered next run
    verified --> [*]
    deleted --> [*]
    classDef terminal fill:#2c7a4b,stroke:#1e5a37,color:#fff
    classDef dead fill:#a5432c,stroke:#7c3220,color:#fff
    class verified terminal
    class deleted dead
    </pre>
  </div>
  <p class="diagram-caption">
    Retention is a bounded, database-configured window. No verification-reminder email is ever sent
    to a pending identity — bot-created addresses never receive mail from Ponchii.
  </p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">08</span><h2>Money: Stripe and Supabase, never the frontend</h2></div>
  <hr class="cs-rule" />
  <p>
    Story access is EUR-only, tax-inclusive, priced at one of four fixed tiers, with a 15% platform
    fee taken through destination charges on the platform account. Creators need a connected Stripe
    Express account — one per user, country confirmed up front — before they can launch a paid story
    at all.
  </p>
  <div class="diagram">
    <pre class="mermaid">
stateDiagram-v2
    [*] --> no_access
    no_access --> subscribing: reader opens pay modal<br/>saved card or new SetupIntent
    subscribing --> active: subscription created,<br/>automatic_tax + tax-inclusive EUR
    active --> canceling: auto-renew off
    canceling --> active: auto-renew back on<br/>before period end
    canceling --> expired: current period ends
    active --> expired: payment fails permanently
    expired --> subscribing: resubscribe
    expired --> [*]
    classDef terminal fill:#2c7a4b,stroke:#1e5a37,color:#fff
    class active terminal
    </pre>
  </div>
  <p class="diagram-caption">
    Access follows Stripe subscription status and period dates, never optimistic frontend state.
    Canceling keeps access until the current paid period actually ends.
  </p>
  <ul class="cs-list">
    <li>Existing subscribers keep their original monthly price when a creator changes the public tier — repricing is never retroactive.</li>
    <li>New subscriptions block before payment if Stripe Tax can't actually collect for the buyer's location, so Ponchii never silently charges an untaxed invoice.</li>
    <li>Returning readers subscribe from a saved card in roughly two clicks; billing address is collected once, through Stripe's own Elements, and stored on the Stripe Customer rather than in Ponchii's tables.</li>
  </ul>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">09</span><h2>Scheduled jobs</h2></div>
  <hr class="cs-rule" />
  <p>
    Lifecycle work runs as scheduled serverless functions over Postgres job queues. Each
    cron-invoked function validates its own long random bearer secret and fails closed if any
    required configuration is missing.
  </p>
  <div class="cs-table-scroll">
    <table>
      <thead><tr><th>Job</th><th>Guarantee</th></tr></thead>
      <tbody>
        <tr><td>Unverified-user cleanup</td><td>Lock token + lease over <code>FOR UPDATE SKIP LOCKED</code>; structurally unable to touch a verified user.</td></tr>
        <tr><td>Account cleanup</td><td>Drains a due-time job queue for account deletions, with bounded retry.</td></tr>
        <tr><td>Project cleanup</td><td>Moves a project through its pending-deletion lifecycle.</td></tr>
        <tr><td>Story cleanup</td><td>Mirrors story-level deactivation and deletion, including subscription wind-down.</td></tr>
        <tr><td>Daily ops digest</td><td>One email per local day. An hourly gate checks the local hour instead of hardcoding UTC — so it survives DST — and a per-date run record blocks duplicate sends.</td></tr>
      </tbody>
    </table>
  </div>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">10</span><h2>Chapter chat</h2></div>
  <hr class="cs-rule" />
  <p>
    Chat is a standalone Rust/Axum WebSocket service on Fly.io — deliberately decoupled from the
    Next.js request lifecycle. It never trusts the browser for identity: the web app checks Supabase
    Auth and paid access, then issues a short-lived signed token scoped to one user and one room
    before the browser ever opens a socket.
  </p>
  <div class="diagram">
    <pre class="mermaid">
sequenceDiagram
    participant R as Reader browser
    participant WEB as Web app
    participant CHAT as Chat service
    participant PG as Postgres
    participant RD as Redis
    R->>WEB: open chapter (has paid access)
    WEB->>WEB: issue short-lived signed token<br/>scoped to user + room
    WEB-->>R: token
    R->>CHAT: wss connect with token
    CHAT->>CHAT: verify token + origin allow-list
    CHAT->>PG: room exists and enabled?
    PG-->>CHAT: room is live
    CHAT-->>R: recent history replay
    R->>CHAT: send message
    CHAT->>PG: persist message
    CHAT->>RD: publish to room channel
    RD-->>CHAT: fan out to other instances
    CHAT-->>R: broadcast message
    </pre>
  </div>
  <p class="diagram-caption">
    Messages are persisted before they're broadcast, so a client that reconnects mid-flight recovers
    from Postgres even if it misses a pub/sub event. Redis is fanout only — Postgres is still the
    durable store, capped per room and trimmed by retention.
  </p>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">11</span><h2>Repository layout</h2></div>
  <hr class="cs-rule" />
  <div class="cs-table-scroll">
    <table>
      <thead><tr><th>Path</th><th>Owns</th></tr></thead>
      <tbody>
        <tr><td><code>apps/web</code></td><td>Next.js product: entry editor/viewer, worldbook, story hub, every Stripe route, Supabase Auth integration, signup abuse protection.</td></tr>
        <tr><td><code>apps/mobile</code></td><td>Expo reader app. Shows purchased access only — never initiates a payment or payout flow.</td></tr>
        <tr><td><code>services/chat</code></td><td>Standalone Rust/Axum WebSocket chat service, deployed to Fly.io independently of the web app.</td></tr>
        <tr><td><code>services/tts</code></td><td>Planned Rust text-to-speech service behind a provider-neutral adapter — not implemented yet.</td></tr>
        <tr><td><code>supabase/migrations</code></td><td>Every schema change: core tables, RLS policies, cleanup job queues, chat tables, worldbook, billing history.</td></tr>
        <tr><td><code>supabase/functions</code></td><td>Scheduled functions — the cleanup workers and the daily ops digest.</td></tr>
      </tbody>
    </table>
  </div>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">12</span><h2>How it ships</h2></div>
  <hr class="cs-rule" />
  <p>
    Four surfaces, four toolchains, one validation pipeline. Every push and pull request runs five
    parallel CI jobs, each checking its surface with that surface's native tools — and a repository
    safety job scans for common secret shapes before anything else matters.
  </p>
  <div class="diagram">
    <pre class="mermaid">
flowchart LR
    PUSH["push / PR\nmain · dev"] --> SAFE["Repository safety\nsecret-shape scan"]
    PUSH --> W["Web\nlint · typecheck · unit tests\n· build · Playwright e2e"]
    PUSH --> MO["Mobile\nlint · typecheck\n· Expo config check"]
    PUSH --> CH["Chat\nrustfmt · clippy -D warnings\n· cargo test"]
    PUSH --> EF["Functions\ndeno check, frozen deps"]
    W --> V["Vercel"]
    CH --> F["Fly.io\nDocker image"]
    EF --> SBD["Supabase\nfunctions + reviewed migrations"]
    classDef target fill:#1f6f8b,stroke:#14526a,color:#fff
    class V,F,SBD target
    </pre>
  </div>
  <p class="diagram-caption">
    Deploys are per-surface: the web app ships through Vercel, the chat service as a Docker image on
    Fly.io, and scheduled functions and migrations through the Supabase CLI — with migrations
    reviewed against the pending list before every push.
  </p>
  <ul class="cs-list">
    <li>Toolchains are pinned everywhere — Node via <code>.nvmrc</code>, an exact pnpm version, a pinned Rust toolchain — and every install uses a frozen lockfile, so CI and a laptop build the same thing.</li>
    <li>The end-to-end job drives the real signup flow in a real browser using the CAPTCHA provider's published test keys, so the auth path is exercised on every push without touching production services.</li>
    <li>CI runs against placeholder environment values, and the app fails closed on missing configuration — a misconfigured environment breaks the build, not production.</li>
    <li>Only <code>main</code> and <code>dev</code> are long-lived branches; feature branches are short-lived and deleted after merge, and in-flight CI runs are cancelled when a branch moves on.</li>
  </ul>
</section>
<section>
  <div class="cs-section-head"><span class="cs-index">13</span><h2>What keeps it correct</h2></div>
  <hr class="cs-rule" />
  <ul class="cs-list">
    <li>Stripe and Supabase stay the source of truth for access — the frontend never grants access optimistically.</li>
    <li>An application profile only exists after email verification, so an address that never verifies never becomes a product user, a billing target, or a metric.</li>
    <li>Row Level Security is enabled on every public table reachable through a Supabase client; server routes use the cookie-backed anon client by default, so policies still apply unless a route deliberately drops to service-role.</li>
    <li>The mobile app is structurally incapable of starting a Stripe flow — there's no route for it to call, by design, not just by convention.</li>
    <li>The cleanup workers' lock-token-plus-lease claims mean a crashed or overlapping run can never double-delete or permanently strand a row.</li>
    <li>Asset usage rows tie every stored object to what references it, so lifecycle cleanup can't strand or orphan a paid story's assets.</li>
  </ul>
</section>
<div class="cs-footer">
  Generated from the current state of <code>apps/</code>, <code>services/</code>, and
  <code>supabase/</code> in the Ponchii repository. Diagrams reflect implemented behavior — dashed
  nodes and the "next" pills above are directions that don't have code behind them yet.
</div>
<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "base",
    themeVariables: {
      primaryColor: "#e2eef3",
      primaryTextColor: "#121a22",
      primaryBorderColor: "#1f6f8b",
      lineColor: "#57677a",
      secondaryColor: "#eef2f5",
      tertiaryColor: "#ffffff",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: "14px",
    },
  });
  mermaid.run({ querySelector: ".cs pre.mermaid" });
</script>
</div>
