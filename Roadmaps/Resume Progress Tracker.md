**Owner:** Jayakanth Inturi **Window:** August 22, 2026 → October 15, 2026 (with a soft checkpoint Sept 30) **Purpose:** This is not a "finish the resume" checklist. It is the execution roadmap for *becoming* the person described in `Resume 0 - Living Draft.md`. Every TARGET/\[TO BUILD\] item in the three resumes traces back to a section here. Open this every morning.

> **Day 0 baseline (Aug 22, 2026): none of the aspirational technical achievements in Resume 0 exist yet.** No Tempitera v02 rebuild, no JWT auth, no Redis, no PostgreSQL schema, no rate limiting, no centralized error handling, no structured logging, no measured performance numbers, no Smart API Aggregator, no Typing Tutor, no analytics article, no hackathon result, no real DSA count, no polished portfolio, no Medium article. Nothing on the resumes should be read as "already true" just because it's written there — the resumes describe the destination.

---

## Table of Contents

1.  Current Baseline
2.  Target State (claim → build sequence)
3.  Tempitera v02 Roadmap
4.  Smart API Aggregator Roadmap
5.  Typing Tutor Roadmap (+ Future ML Experiment)
6.  DSA Roadmap
7.  GitHub / Portfolio Roadmap
8.  Analytics / Medium Roadmap
9.  Hackathon Roadmap
10.  Weekly Execution Plan (Aug 22 → Oct 15)
11.  Definition of Done (per resume bullet)
12.  Evidence Log
13.  Resume Claim Validation Checklist
14.  Final October Target

---

## 1\. Current Baseline

### Verified / already true

-   21 months industrial experience at JSW Steel (Capex procurement, Assistant Manager) — Jul 2024–Apr 2026
-   B.Tech Mechanical Engineering, NIT Durgapur, CGPA 8.48
-   Vocational traineeship, RINL Vizag Steel Plant
-   Solar Air Heater final year project (ANSYS CFD) — complete
-   SAP MM, Ariba, Power BI, CATIA, SolidWorks, ANSYS, Photoshop — genuine working exposure from prior roles/education
-   ISTE leadership roles (Graphic Designer → Event Management Head)
-   JavaScript: working proficiency (not expert)
-   SQL: basic-intermediate
-   Git/GitHub: basics only

### In progress, not yet mastered

-   Node.js, Express, PostgreSQL fundamentals
-   REST API design
-   DSA fundamentals (arrays/strings level or earlier — verify against actual DSA log, do not assume)

### Zero / not started (Tier 1 gaps as of Aug 22, 2026)

-   Tempitera v02 rebuild (0% — no code written)
-   JWT authentication, refresh-token rotation
-   PostgreSQL schema for Tempitera
-   Redis (never used)
-   Rate limiting, centralized error handling, structured logging
-   Any performance measurement/benchmarking
-   Smart API Aggregator (not started)
-   Typing Tutor (not started)
-   MongoDB (never used in a real project)
-   React/Tailwind (not practiced)
-   C++ (not practiced for DSA)
-   Tempitera analytics project + Medium article
-   Hackathon participation or results
-   Public GitHub presence / polished portfolio
-   Deployment experience (Vercel, Railway, or any production deploy)

**Rule:** A technology only moves from "zero" to "in progress" when you've written real code with it this cycle. It only moves to "verified" when the Definition of Done in Section 11 is met and logged in Section 12.

---

## 2\. Target State — every resume claim, decomposed

### Claim: "Built custom JWT authentication with access + refresh token rotation"

-   [ ]  Learn JWT fundamentals (structure, signing, verification)
-   [ ]  Understand access vs. refresh token models and why rotation matters
-   [ ]  Implement password hashing (bcrypt/argon2)
-   [ ]  Implement register/login endpoints
-   [ ]  Implement access token generation + verification middleware
-   [ ]  Implement refresh token issuance and storage strategy
-   [ ]  Implement refresh token rotation (invalidate old on use)
-   [ ]  Implement logout / revocation strategy
-   [ ]  Write tests for the auth flow (happy path + tampered/expired token cases)
-   [ ]  Document the architecture (README section)
-   [ ]  Only then: mark resume claim COMPLETE, log evidence (Section 12)

### Claim: "Designed relational PostgreSQL schema with indexing"

-   [ ]  Learn relational modeling basics (normalization, keys, relationships)
-   [ ]  Design schema for destinations/users/ratings (ERD)
-   [ ]  Write migrations
-   [ ]  Implement constraints (FKs, unique, not-null)
-   [ ]  Identify at least one genuinely slow query
-   [ ]  Add an index and prove the improvement with EXPLAIN ANALYZE
-   [ ]  Document schema decisions
-   [ ]  Mark COMPLETE + log evidence

### Claim: "Implemented Redis caching, reduced latency Xms → Yms"

-   [ ]  Learn what Redis is for / when caching helps
-   [ ]  Identify a genuine cache candidate endpoint
-   [ ]  Implement cache read/write around that endpoint
-   [ ]  Implement TTL strategy
-   [ ]  Implement invalidation on writes
-   [ ]  Benchmark latency before implementing cache (baseline)
-   [ ]  Benchmark latency after (same conditions)
-   [ ]  Record real Xms → Yms numbers — never estimate or invent
-   [ ]  Mark COMPLETE + log evidence

### Claim: "Rate limiting + centralized error handling + structured logging"

-   [ ]  Implement rate limiting middleware (e.g. token bucket / fixed window)
-   [ ]  Test rate limit triggers correctly under load
-   [ ]  Implement centralized error-handling middleware (consistent error shape)
-   [ ]  Implement structured logging (request id, level, timestamp, context)
-   [ ]  Verify logs are actually useful for debugging a real bug
-   [ ]  Mark COMPLETE + log evidence

### Claim: "Deployed live at tempitera.in — X users / X destinations"

-   [ ]  Deploy backend (Railway or equivalent) + frontend (Vercel)
-   [ ]  Configure environment variables, CORS, health checks
-   [ ]  Confirm domain routing to tempitera.in
-   [ ]  Only report real user/destination counts pulled from the production DB — never round up or invent
-   [ ]  Mark COMPLETE + log evidence

### Claim: "Domain-driven 'why this recommendation' feature"

-   [ ]  Design recommendation logic (rules-based is fine — do not over-engineer into ML)
-   [ ]  Move logic from client to backend service
-   [ ]  Test with real data
-   [ ]  Mark COMPLETE + log evidence

### Claim: "Smart API Aggregator — multi-API integration with MongoDB caching"

-   [ ]  See Section 4 in full

### Claim: "Typing Tutor — MERN, cross-device sync, deployed"

-   [ ]  See Section 5 in full

### Claim: "Tempitera Data Analytics — published on Medium"

-   [ ]  See Section 8 in full

### Claim: "Hackathon participation/result"

-   [ ]  See Section 9 in full

### Claim: "\[X\]/310 DSA problems across \[X\]/15 patterns"

-   [ ]  See Section 6 in full — this number must come from the actual log, never estimated

---

## 3\. Tempitera v02 Roadmap

**Stack decision (final): React + Node.js + Express + PostgreSQL + Redis.** No MongoDB in this project. This is the Tier-1, must-complete project — the technical backbone of Resume 1.

Adjust ordering below if inspecting the actual existing Tempitera codebase reveals a better dependency order (e.g. if v01 already has usable frontend or data you can migrate).

### Phase A — Backend foundation

-   [ ]  Project structure (folders, config separation, scripts)
-   [ ]  Express app architecture (routers, controllers, services layer)
-   [ ]  Environment configuration (.env, config module)
-   [ ]  Database connection setup (pg / an ORM decision — Prisma or raw SQL, pick one deliberately)
-   [ ]  Input validation strategy (e.g. zod/joi)
-   [ ]  Baseline error handling skeleton

### Phase B — PostgreSQL

-   [ ]  Relational modeling for destinations/users/ratings
-   [ ]  Schema design + migrations
-   [ ]  Relationships and constraints
-   [ ]  Indexes on real query patterns
-   [ ]  Practice queries: joins, aggregation, filtering
-   [ ]  EXPLAIN ANALYZE on at least one query — understand the plan
-   [ ]  Migrate any existing v01 data if it exists and is worth keeping

### Phase C — Authentication

-   [ ]  Password hashing
-   [ ]  JWT access tokens
-   [ ]  Refresh tokens + rotation
-   [ ]  Logout/revocation
-   [ ]  Protected route middleware
-   [ ]  Basic authorization (owner-only actions where relevant)

### Phase D — Core backend

-   [ ]  Destinations CRUD
-   [ ]  Users CRUD/profile
-   [ ]  Ratings/preferences
-   [ ]  Recommendation logic (rules-based "why this recommendation")
-   [ ]  API design pass (consistent routes, status codes, response shape)

### Phase E — Redis

-   [ ]  Understand caching fundamentals
-   [ ]  Identify genuine cache candidates (read-heavy, rarely-changing endpoints)
-   [ ]  Implement caching
-   [ ]  Invalidation on writes
-   [ ]  TTL tuning
-   [ ]  Measure cache hit/miss behavior
-   [ ]  Benchmark before/after — record real numbers

### Phase F — Reliability

-   [ ]  Rate limiting
-   [ ]  Centralized error handling
-   [ ]  Structured logging
-   [ ]  Input validation coverage across all endpoints
-   [ ]  Basic API security pass (helmet, sanitization, secrets hygiene)

### Phase G — Deployment

-   [ ]  Production environment setup
-   [ ]  Deploy frontend to Vercel
-   [ ]  Deploy backend to Railway
-   [ ]  Production PostgreSQL instance
-   [ ]  Production Redis instance
-   [ ]  Environment variables in production
-   [ ]  CORS configured correctly
-   [ ]  Health check endpoint
-   [ ]  Production logging/monitoring basics
-   [ ]  Practice debugging a real production issue

### Phase H — Documentation

-   [ ]  README (setup, run, architecture)
-   [ ]  Architecture diagram
-   [ ]  API documentation (routes, payloads)
-   [ ]  Technical decisions log (why Postgres, why this auth approach, etc.)
-   [ ]  Known limitations section — honesty here builds interview credibility

---

## 4\. Smart API Aggregator Roadmap

**Stack: Node.js + external APIs + MongoDB.** Tier 2 — start only after Tempitera v02's core phases (A–D) are solid, unless you find it useful as a smaller confidence-building project first.

-   [ ]  HTTP/API fundamentals refresh (status codes, headers, auth schemes)
-   [ ]  Pick 2–3 real third-party APIs (weather, maps, holidays are reasonable defaults — swap if better ones fit)
-   [ ]  API key management via environment variables
-   [ ]  Basic integration: fetch and normalize responses from each API
-   [ ]  Request timeout handling
-   [ ]  Retry logic with exponential backoff
-   [ ]  Fallback behavior when an API is down or slow
-   [ ]  MongoDB setup for caching raw responses
-   [ ]  Stale-data handling strategy (TTL, refresh-on-demand)
-   [ ]  Deliberately test failure scenarios (kill network, mock 500s, timeouts)
-   [ ]  Logging around external calls
-   [ ]  Basic tests (mock the external APIs)
-   [ ]  **Optional:** BullMQ background job queue — only add if there's a genuine async job (e.g. scheduled cache refresh) that needs it. Do not add BullMQ just to have it on the resume.

---

## 5\. Typing Tutor Roadmap

**Stack: React + Node.js + Express + MongoDB (MERN).** Tier 2 — deliberately different architecture from Tempitera to show range.

### Core typing engine

-   [ ]  Keyboard input handling
-   [ ]  Character-by-character matching
-   [ ]  Error detection
-   [ ]  WPM calculation
-   [ ]  Accuracy calculation
-   [ ]  Mistake tracking (which keys, how often)
-   [ ]  Keyboard visualization (highlight next key / errors)

### Learning engine

-   [ ]  Progressive lesson structure: home row → top row → bottom row → combinations → words → sentences
-   [ ]  Difficulty progression logic
-   [ ]  Weak-key repetition (surface keys the user struggles with more often)

### Progress system

-   [ ]  Track lessons completed
-   [ ]  WPM history over time
-   [ ]  Accuracy history over time
-   [ ]  Weak-key list
-   [ ]  Streak/progress indicators

### Cross-device sync (no login)

-   [ ]  Personal sync code generation
-   [ ]  Create/retrieve progress by code
-   [ ]  Device linking flow
-   [ ]  Handle sync conflicts (last-write-wins is fine to start)
-   [ ]  Basic rate limiting/security on the sync endpoint
-   [ ]  Recovery/reset strategy if a code is lost

### Deployment

-   [ ]  Frontend on Vercel, backend on Railway
-   [ ]  MongoDB Atlas (or equivalent) in production

### Definition of MVP done

All of the above sections complete and deployed. Language to use once true: "structured progressive practice designed to reinforce correct typing patterns." **Never** use "psychology approved" or similar without a genuine cited source/methodology.

### Future Experiment — Personalized Typing Model (post-MVP, optional, not on the critical path)

Idea: typing telemetry (WPM, accuracy, per-key error frequency, error-causing combinations, inter-keystroke timing, correction/backspace patterns, lesson performance, improvement over time) → collected and cleaned → Python ML pipeline → model that identifies weaknesses and suggests next exercises/difficulty → optionally served via a Django API back into the Typing Tutor.

-   [ ]  (Future) Design data collection schema with privacy in mind
-   [ ]  (Future) Collect and clean a real dataset from actual usage
-   [ ]  (Future) Explore simple models before anything complex (start with heuristics, not deep learning)
-   [ ]  (Future) Only build a Django service if it's genuinely the right tool — not by default

**This future work must never block:** Typing Tutor core completion, cross-device sync, deployment, MERN implementation, or resume readiness. It only starts after the MVP checkpoints above are done.

---

## 6\. DSA Roadmap

Not a "310 problems" checklist — a pattern-based competence system. Log every problem with:

| Field | What to record |
| --- | --- |
| Problem | Name/link |
| Platform | LeetCode / GFG / etc. |
| Difficulty | Easy/Medium/Hard |
| Pattern | e.g. sliding window, two pointers |
| Date solved | — |
| First attempt | Success / Failure |
| Time taken | minutes |
| Solved independently? | Yes/No (hints/solution used = No) |
| Revision date | when to revisit |
| Confidence | 1–5, honest |

*(Keep this table in a separate DSA tracker file/sheet if it grows large — link it here once created. Don't invent a count here; pull the real number from wherever you're actually logging problems.)*

### Phase 1 — Foundations

-   [ ]  Arrays
-   [ ]  Strings
-   [ ]  Hashing
-   [ ]  Two pointers
-   [ ]  Sliding window

### Phase 2 — Core structures

-   [ ]  Stack
-   [ ]  Queue
-   [ ]  Binary search
-   [ ]  Linked lists
-   [ ]  Recursion

### Phase 3 — Advanced structures

-   [ ]  Trees
-   [ ]  Heaps
-   [ ]  Graphs
-   [ ]  Backtracking

### Phase 4 — DP and interview mix

-   [ ]  Dynamic programming
-   [ ]  Mixed interview-style problems (company-tagged sets, timed mocks)

**Adjust the exact pattern list/order to match whatever course or sheet you're actually following** (e.g. NeetCode 150, Striver's sheet) — don't invent a curriculum disconnected from your real learning resource. The goal is interview competence, not a cosmetic problem count.

---

## 7\. GitHub / Portfolio Roadmap

-   [ ]  Clean up GitHub profile (bio, pinned repos, contribution consistency — meaningful commits, not spam)
-   [ ]  Tempitera v02 repo: clear README, screenshots, architecture diagram, deployed link
-   [ ]  Smart API Aggregator repo: same standard
-   [ ]  Typing Tutor repo: same standard
-   [ ]  Solar Air Heater — optional writeup/repo if any reusable materials exist
-   [ ]  Pin the 3 strongest repos
-   [ ]  Build a simple portfolio site linking to all of the above (can be a single well-made page — doesn't need to be elaborate)
-   [ ]  Each pinned project gets a short case-study section: problem, approach, stack, key technical decisions, what you'd do differently

---

## 8\. Analytics / Medium Roadmap

Depends on Tempitera v02 having real backend data first.

-   [ ]  Identify what data actually exists (destinations, ratings, usage)
-   [ ]  Clean the data
-   [ ]  Define 2–4 real questions worth answering
-   [ ]  SQL analysis: joins, aggregation, window functions where genuinely useful
-   [ ]  Basic indexing/performance analysis on the queries used
-   [ ]  Derive actual insights from the results — never draft conclusions before running the analysis
-   [ ]  Build visualizations if they add clarity
-   [ ]  Write the article
-   [ ]  Publish on Medium
-   [ ]  Link the article from Resume 0/1

---

## 9\. Hackathon Roadmap

-   [ ]  Shortlist realistic upcoming hackathons (online-friendly given current schedule)
-   [ ]  Register
-   [ ]  Form a team if applicable
-   [ ]  Scope an idea that's actually finishable in the time window
-   [ ]  Build/implement
-   [ ]  Submit
-   [ ]  Record the actual result

**Participation alone is listable once it happens.** Do not put a "result" on the resume until there is a real result.

---

## 10\. Weekly Execution Plan (Aug 22 → Oct 15, 2026)

Assumes CAT 2026 prep continues in parallel — this plan covers backend/build time only, not your full daily schedule. Priority order: (1) Tempitera, (2) DSA, (3) Smart API Aggregator, (4) Typing Tutor, (5) Analytics/publication, (6) Hackathons/portfolio. Adjust week-to-week based on actual progress, not the calendar.

### Week 1 (Aug 22–28) — Foundations

-   Primary objective: Tempitera Phase A complete; DSA habit started
-   Learning: Express architecture patterns, JWT concepts (reading/videos, no code yet needed for JWT)
-   Build: Project structure, config, DB connection skeleton
-   DSA target: Arrays + strings, ~10–15 problems, daily practice established
-   GitHub target: Repo created, first real commits (not boilerplate-only)
-   Resume evidence: none yet — too early
-   Definition of done: `npm run dev` boots a working Express server connected to a local Postgres instance

### Week 2 (Aug 29–Sep 4) — PostgreSQL

-   Primary objective: Tempitera Phase B complete
-   Learning: Relational modeling, migrations, indexing basics
-   Build: Schema designed, migrations written, seed data working
-   DSA target: Hashing + two pointers, ~10–15 problems
-   GitHub target: Schema/ERD documented in repo
-   Resume evidence: none yet
-   Definition of done: Can run real joins/aggregation queries against seeded data

### Week 3 (Sep 5–11) — Authentication

-   Primary objective: Tempitera Phase C complete
-   Learning: JWT implementation details, refresh rotation strategies
-   Build: Full auth flow (register/login/refresh/logout) with tests
-   DSA target: Sliding window + stack/queue, ~10–15 problems
-   GitHub target: Auth module documented
-   Resume evidence: JWT auth claim can move toward COMPLETE once tested
-   Definition of done: Section 11's "JWT auth" definition of done fully met

### Week 4 (Sep 12–18) — Core backend + start Redis

-   Primary objective: Tempitera Phase D complete, Phase E started
-   Learning: Caching fundamentals
-   Build: Destinations/users/ratings CRUD, recommendation logic; begin Redis integration
-   DSA target: Binary search + linked lists, ~10–15 problems
-   GitHub target: Core API routes documented
-   Resume evidence: none locked yet
-   Definition of done: Core endpoints functional and manually tested via Postman

### Week 5 (Sep 19–25) — Redis + reliability

-   Primary objective: Tempitera Phases E & F complete
-   Learning: Rate limiting strategies, structured logging patterns
-   Build: Redis caching with real before/after benchmark; rate limiting, error handling, logging
-   DSA target: Recursion + intro trees, ~10–15 problems
-   GitHub target: Benchmark numbers documented in README
-   Resume evidence: Redis + reliability claims can move toward COMPLETE
-   Definition of done: Real Xms → Yms number recorded in Evidence Log

### Week 6 (Sep 26–Oct 2) — Deployment — Sept 30 checkpoint

-   Primary objective: Tempitera Phase G complete; **Sept 30 checkpoint: core backend fully built, even if not yet deployed**
-   Learning: Deployment basics (Vercel/Railway env config, CORS)
-   Build: Production deploy of Tempitera v02, health checks, env vars
-   DSA target: Trees + heaps, ~10–15 problems
-   GitHub target: Deployed link in README, screenshots added
-   Resume evidence: Tempitera v02 deployment claim can move to COMPLETE
-   Definition of done: tempitera.in serving the new backend live, no critical bugs

### Week 7 (Oct 3–9) — Smart API Aggregator

-   Primary objective: Smart API Aggregator MVP (integration, retries, MongoDB caching)
-   Learning: Retry/backoff patterns, MongoDB basics
-   Build: 2–3 API integrations with resilience logic
-   DSA target: Graphs, ~10–12 problems
-   GitHub target: New repo, documented
-   Resume evidence: Smart API Aggregator claim can move toward COMPLETE
-   Definition of done: Aggregator handles a simulated API failure gracefully

### Week 8 (Oct 10–15) — Typing Tutor MVP push + wrap-up

-   Primary objective: Typing Tutor core engine + basic deployment (full polish may extend past Oct 15 — that's fine)
-   Learning: MongoDB schema for progress/sync
-   Build: Core typing engine, basic lesson progression, deploy MVP
-   DSA target: Backtracking or DP intro, ~8–10 problems
-   GitHub target: Portfolio site live linking all 3 projects
-   Resume evidence: Update Resume 0/1/2 with everything genuinely completed this cycle
-   Definition of done: Re-run Section 13 validation on every bullet before using resumes in applications

**Note:** Analytics/Medium article and hackathon participation are lower priority — slot them in if a week finishes early, otherwise push into a next-cycle tracker after Oct 15 rather than rushing them and producing weak output.

---

## 11\. Definition of Done (per major resume bullet)

### "JWT authentication with refresh rotation implemented"

NOT DONE: JWT package installed; login route returns a token DONE: Register/login/refresh/logout all working; refresh rotation invalidates prior token; passwords hashed; tests cover expired/tampered token cases; documented; deployed and verified working in production

### "PostgreSQL schema with indexing"

NOT DONE: Tables exist DONE: Schema documented (ERD), migrations versioned, at least one index proven via EXPLAIN ANALYZE against a real slow query, constraints enforced, seed/demo data present

### "Redis caching implemented"

NOT DONE: Redis installed, package imported, cache exists in code DONE: Cache key strategy documented, TTL implemented, cache hit/miss behavior tested, invalidation strategy implemented where required, before/after performance measured with real numbers, production deployment verified, README updated, resume bullet updated with actual evidence

### "Rate limiting + centralized error handling + structured logging"

NOT DONE: Middleware added but untested DONE: Rate limit verified to trigger under real load test; error handler returns consistent shape across all routes; logs include request id/level/timestamp and were actually useful in debugging a real issue

### "Deployed live at tempitera.in"

NOT DONE: `vercel deploy` ran once DONE: Custom domain routes correctly, env vars set, CORS configured, health check passes, has survived at least a few days without breaking, real (not invented) usage numbers if quoted

### "Smart API Aggregator built"

NOT DONE: One API called successfully DONE: Multiple APIs integrated, retry/backoff implemented and tested against simulated failure, MongoDB caching working with stale-data handling, failure scenarios deliberately tested

### "Typing Tutor built"

NOT DONE: Typing input detection works locally DONE: Full MVP per Section 5, deployed, cross-device sync tested across two actual devices/browsers

### "X/310 DSA problems, X/15 patterns"

NOT DONE: A round or estimated number DONE: Number pulled directly from the actual problem log, patterns genuinely practiced (not just problems solved once and forgotten — revision dates respected)

### "Published Tempitera analytics on Medium"

NOT DONE: Draft exists DONE: Article published, linked from resume, findings are real (traceable to actual queries run), no fabricated insights

---

## 12\. Evidence Log

Use this table to record proof for every claim as it becomes real. Update it the same day you complete a milestone — don't rely on memory later.

| Claim | Date completed | GitHub commit/repo | Deployed URL | Benchmark/Test | Article/Demo | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| *(example)* JWT auth | — | — | — | — | — | — |
| PostgreSQL schema |  |  |  |  |  |  |
| Redis caching |  |  |  |  |  |  |
| Rate limiting/logging |  |  |  |  |  |  |
| Tempitera deployment |  |  |  |  |  |  |
| Recommendation engine |  |  |  |  |  |  |
| Smart API Aggregator |  |  |  |  |  |  |
| Typing Tutor MVP |  |  |  |  |  |  |
| Analytics article |  |  |  |  |  |  |
| Hackathon |  |  |  |  |  |  |
| DSA milestone (per phase) |  |  |  |  |  |  |
| GitHub/portfolio polish |  |  |  |  |  |  |

---

## 13\. Resume Claim Validation Checklist

For every technical bullet, before it goes on a resume you actually send, answer honestly:

-   [ ]  I actually built it (not copied from a tutorial unmodified)
-   [ ]  I understand how it works, end to end
-   [ ]  I can explain why I chose this approach
-   [ ]  I can explain the alternatives I considered or could have used
-   [ ]  I can explain failure cases / what breaks it
-   [ ]  I can demonstrate it live if asked
-   [ ]  I can point to the actual code
-   [ ]  If a metric is claimed, I can show the measurement, not just state the number

**If any answer is NO → mark the bullet NOT READY and keep it as a TARGET/\[TO BUILD\] item.** Never let a resume claim outrun what you can defend in an interview — this is the single most important rule in this whole system.

---

## 14\. Final October Target (~Oct 15, 2026)

### Must Have

-   Tempitera v02 core backend complete: auth, PostgreSQL schema, Redis caching (with real measured numbers), rate limiting/error handling/logging, deployed live
-   DSA: solid coverage of Phases 1–2 (foundations + core structures) with genuine independent-solve rate, real logged count
-   GitHub: Tempitera repo polished (README, architecture, deployed link)
-   Resume 0/1/2 fully in sync, no false claims, every bullet passes Section 13

### Strongly Desired

-   Smart API Aggregator MVP complete and deployed
-   DSA: Phase 3 (trees/heaps/graphs) underway
-   Portfolio site live linking Tempitera (and Aggregator if done)

### Nice to Have

-   Typing Tutor MVP complete and deployed
-   Tempitera analytics article published
-   Hackathon participation logged
-   DSA: Phase 4 (DP/mixed) started

**Guiding principle:** one excellent, deeply-understood, production-style project beats five half-finished ones. If forced to choose between breadth and depth in the final weeks, choose depth on Tempitera and DSA fundamentals — everything else is genuinely optional for the October target.