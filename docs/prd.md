# 니밥내밥 MVP PRD

## Goal

니밥내밥은 매일 점심시간마다 친구 그룹에 자동으로 열리는 사진 업로드/투표 경험이다. 같이하기로 한 친구들이 각자의 점심 사진을 올리고, 친구끼리 먼저 맛·가성비·다이어트 기준으로 승자를 고른다. 결론이 애매하면 커뮤니티가 외부 판정단처럼 승자를 정해준다.

## MVP scope

1. Friend/group creation.
2. Daily lunch battle auto-creation for each opted-in friend group.
3. Food photo upload through presigned storage URLs.
4. Short menu memo and price input.
5. Friend voting by three criteria: taste, value, diet.
6. Results by criterion and overall winner.
7. Community vote request when friends want outside judgement.
8. Shareable result card for today’s winner.

## Primary categories

- **니밥내밥:** lunch/meal photos judged by taste, value, and diet.
- **니옷내옷:** outfit or shopping picks judged by fit, usefulness, and price sense.
- **니일내일:** work/study/task choices judged by efficiency, difficulty, and sustainability.

## Core loop

1. Lunch time opens today’s 니밥내밥 automatically.
2. Friends in the group upload their food photos.
3. The group votes across taste, value, and diet.
4. The app calculates per-criterion winners and an overall winner.
5. Optional community voting resolves ties or adds outside judgement.

## Non-goals for first skeleton

- Payments.
- Restaurant booking or delivery ordering.
- Heavy recommendation ranking.
- Public-first anonymous feed before friend-group usage works.
