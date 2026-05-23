# Architecture

## Frontends

- Mobile app: Bare React Native + TypeScript. Primary user surface.
- Web frontend: React, not a separate backend. Used for landing, app preview, share pages, admin, and deep-link fallback.

React Native owns the native pick battle UX. React web provides browser-visible product previews and public/community voting pages. Both call the same FastAPI backend.

## Backend

FastAPI owns business logic, auth, media upload intents, pick battle lifecycle, voting rules, and community-share moderation state.

## Data

- PostgreSQL: relational text/metadata data — users, friends, groups, pick battles, entries, votes, comments, reports.
- S3-compatible object storage: original images/videos and generated thumbnails.
- Local dev: Postgres + MinIO via Docker Compose.

## Core domain

- Pick categories: `vibe`, `value`, `usefulness`.
- A friend can vote once per category.
- Category winners receive one overall point.
- Community sharing is a separate state transition so friend-only pick battles remain private by default.
