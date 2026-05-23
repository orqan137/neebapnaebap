# NeepickNaepick MVP PRD

## Goal

NeepickNaepick은 친구끼리 각자의 선택지를 올리고, 카테고리별 기준으로 비교한 뒤, 필요하면 커뮤니티 판정을 받아 승자를 고르는 소셜 배틀 앱이다. 첫 번째 대표 카테고리는 니밥내밥이며, 매일 점심시간마다 친구 그룹에 자동으로 열리는 사진 업로드/투표 경험을 제공한다.

## MVP scope

1. Friend/group creation.
2. Daily 니밥내밥 battle auto-creation for each opted-in friend group.
3. Food photo upload through presigned storage URLs.
4. Short menu memo and price input.
5. Friend voting by three 니밥내밥 criteria: taste, value, diet.
6. Results by criterion and overall winner.
7. Community vote request when friends want outside judgement.
8. Shareable result card for today’s winner.
9. Category model that can later support 니옷내옷 and 니일내일 with their own criteria.

## Primary categories

- **니밥내밥:** lunch/meal photos judged by taste, value, and diet.
- **니옷내옷:** outfit or shopping picks judged by fit, usefulness, and price sense.
- **니일내일:** work/study/task choices judged by efficiency, difficulty, and sustainability.

## Core loop

1. A category battle opens for a friend group.
2. For 니밥내밥, lunch time opens today’s battle automatically.
3. Friends in the group upload their photos or choices.
4. The group votes across the category’s criteria.
5. The app calculates per-criterion winners and an overall winner.
6. Optional community voting resolves ties or adds outside judgement.

## Non-goals for first skeleton

- Payments.
- Restaurant booking or delivery ordering.
- Heavy recommendation ranking.
- Public-first anonymous feed before friend-group usage works.
