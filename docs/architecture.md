# Architecture

## Frontends

- Mobile app: Bare React Native + TypeScript. Primary user surface.
- Web frontend: React, not a separate backend. Used for admin, landing, share pages, and deep-link fallback.

This is a normal split: React Native for native mobile UX; React web for browser-only operations. Both call the same FastAPI backend.

## Backend

FastAPI owns business logic, auth, image upload intents, battle lifecycle, voting rules, and community-share moderation state.

## Data

- PostgreSQL: relational text/metadata data — users, friends, groups, battles, entries, votes, comments, reports.
- S3-compatible object storage: original images/videos and generated thumbnails.
- Local dev: Postgres + MinIO via Docker Compose.

## Core domain

- Battle categories: `taste`, `value`, `healthy`.
- A friend can vote once per category.
- Category winners receive one overall point.
- Community sharing is a separate state transition so friend-only battles remain private by default.
