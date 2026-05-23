# NeebapNaebap

니밥내밥: friends-only lunch photo battles.

## Apps

- `neebapnaebap-mobile`: Bare React Native + TypeScript mobile app.
- `neebapnaebap-be`: FastAPI backend.
- `neebapnaebap-web`: React web frontend for admin, landing, share/fallback pages.

## Core loop

1. Friends upload lunch images.
2. Friends vote by multiple dimensions: taste, value, healthy.
3. Battle results choose category winners and an overall winner.
4. If friends disagree or want outside judgement, the battle can be shared to community review.

## Local services

```bash
docker compose up -d postgres minio
```

- Postgres: `localhost:5432`
- MinIO S3 API: `localhost:9000`
- MinIO console: `localhost:9001`

## Backend

```bash
cd neebapnaebap-be
uv sync
uv run pytest
uv run uvicorn app.main:app --reload
```

## Web

```bash
cd neebapnaebap-web
npm install
npm run dev
```

## Mobile

The mobile package is intentionally bare React Native-oriented, not WebView/Capacitor.

```bash
cd neebapnaebap-mobile
npm install
npm run start
```
