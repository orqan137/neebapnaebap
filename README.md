# NeebapNaebap

![NeebapNaebap hero illustration](docs/assets/neebapnaebap-hero.png)

**니밥내밥**은 친구들끼리 점심 사진을 올리고, 맛·가성비·건강함 기준으로 투표해 “오늘의 점심 승자”를 정하는 friends-only lunch photo battle 앱입니다.

## What it does

친구들의 점심 사진은 그냥 채팅방에 흘러가면 금방 잊힙니다. NeebapNaebap은 그 순간을 작은 게임으로 바꿉니다.

1. 친구들이 오늘 먹은 점심 사진을 업로드합니다.
2. 각 사진은 `taste`, `value`, `healthy` 같은 기준으로 평가됩니다.
3. 배틀 결과에서 항목별 우승자와 종합 우승자를 보여줍니다.
4. 의견이 갈리거나 외부 판정을 받고 싶으면 커뮤니티 리뷰로 공유할 수 있습니다.

## README image concept

The hero image shows the product’s core loop at a glance:

- **Upload:** 점심 사진을 빠르게 올리는 모바일 화면
- **Vote:** 맛, 가성비, 건강함 기준의 playful vote cards
- **Winner:** 친구 투표 결과와 커뮤니티 공유 흐름
- **Mood:** 따뜻한 점심 테이블, 한국적인 도시락/분식 무드, coral + green 포인트 컬러

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
