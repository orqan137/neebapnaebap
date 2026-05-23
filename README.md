# NeepickNaepick

![NeepickNaepick hero illustration](docs/assets/neepicknaepick-hero.png)

**NeepickNaepick(니픽내픽)**은 친구끼리 “내 픽 vs 네 픽”을 올리고, 서로 고르거나 커뮤니티에 물어보며 더 나은 선택을 정하는 소셜 픽 배틀 앱입니다.

점심 메뉴에만 묶이지 않습니다. 패션, 맛집, 카페, 여행지, 데이트 코스, 전자기기, 콘텐츠, 선물, 운동 루틴처럼 일상에서 고르는 모든 선택지가 배틀이 됩니다.

## App preview

이번 스캐폴드의 웹 프론트는 실제 앱 소개/프로토타입처럼 보이도록 임시 주요 화면을 포함합니다.

- **Friend Pick Battle:** 친구와 둘만의 픽을 나란히 놓고 바로 고르는 화면
- **Community Vote:** 친구끼리 결론이 안 날 때 커뮤니티 투표를 받는 화면
- **Result Share:** 투표율, 코멘트, 최종 픽을 확인하고 다시 공유하는 화면

## Product loop

1. 친구가 비교하고 싶은 두 개 이상의 픽을 올립니다.
2. 서로 “내 픽 / 네 픽” 중 하나를 고릅니다.
3. 갈리면 커뮤니티에 공개 투표로 넘깁니다.
4. 투표율, 댓글, 승자 픽을 모아 결과 카드로 공유합니다.

## Apps

- `neepicknaepick-mobile`: Bare React Native + TypeScript mobile app.
- `neepicknaepick-be`: FastAPI backend.
- `neepicknaepick-web`: React web frontend for landing, app preview, share/fallback pages.

## Local services

```bash
docker compose up -d postgres minio
```

- Postgres: `localhost:5432`
- MinIO S3 API: `localhost:9000`
- MinIO console: `localhost:9001`

## Backend

```bash
cd neepicknaepick-be
uv sync
uv run pytest
uv run uvicorn app.main:app --reload
```

## Web

```bash
cd neepicknaepick-web
npm install
npm run dev
```

## Mobile

The mobile package is intentionally bare React Native-oriented, not WebView/Capacitor.

```bash
cd neepicknaepick-mobile
npm install
npm run start
```
