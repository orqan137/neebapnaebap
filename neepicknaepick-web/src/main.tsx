import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const lunchPicks = [
  {
    owner: '민지의 점심',
    title: '연어 포케',
    meta: '12,500원 · 회사 근처 샐러드집',
    image: 'linear-gradient(135deg, #f8e7d2 0%, #e8b985 46%, #f6f0e8 47%, #8ab17d 100%)',
    votes: 62,
  },
  {
    owner: '현우의 점심',
    title: '제육 정식',
    meta: '9,000원 · 백반집 오늘 메뉴',
    image: 'linear-gradient(135deg, #f4e6d4 0%, #d75b3f 42%, #f1d29a 43%, #7c9f5a 100%)',
    votes: 38,
  },
];

const communityItems = [
  { label: '연어 포케', percent: 57, note: '다이어트 점수는 확실히 포케가 앞서요.' },
  { label: '제육 정식', percent: 43, note: '가성비랑 만족감은 제육이 더 강함.' },
];

const criteria = ['맛', '가성비', '다이어트'];
const verticals = ['니밥내밥', '니옷내옷', '니일내일'];

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <nav className="nav-bar">
          <div className="brand-mark">NP</div>
          <span>NeepickNaepick</span>
          <button>앱 미리보기</button>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">니픽내픽 · category battle app</p>
            <h1>첫 번째 카테고리는 매일 점심에 열리는 니밥내밥.</h1>
            <p>
              NeepickNaepick은 친구끼리 선택지를 올리고 기준별로 승자를 고르는 범용 앱입니다.
              니밥내밥을 시작으로 니옷내옷, 니일내일 같은 일상 배틀로 확장됩니다.
            </p>
            <div className="category-tabs">
              {verticals.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <PhoneFrame title="니밥내밥 · 오늘의 점심">
            <LunchBattleScreen />
          </PhoneFrame>
        </div>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Featured flow</p>
        <h2>니밥내밥은 친구끼리 점심 사진을 올리고, 필요하면 커뮤니티가 판정합니다.</h2>
      </section>

      <section className="screens-grid">
        <PhoneFrame title="점심 자동 생성">
          <DailyOpenScreen />
        </PhoneFrame>
        <PhoneFrame title="친구 기준 투표">
          <LunchBattleScreen />
        </PhoneFrame>
        <PhoneFrame title="커뮤니티 판정">
          <CommunityVoteScreen />
        </PhoneFrame>
      </section>
    </main>
  );
}

function PhoneFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="phone-card">
      <div className="phone-top"><span />{title}</div>
      <div className="phone-screen">{children}</div>
    </article>
  );
}

function DailyOpenScreen() {
  return (
    <div className="daily-screen">
      <div className="screen-header">
        <span className="status-pill">12:05 자동 생성</span>
        <strong>마케팅팀 점심방</strong>
      </div>
      <h3>오늘 먹은 밥 사진을 올려주세요.</h3>
      <p className="muted">같이하기로 한 친구 5명 중 3명이 업로드했어요.</p>
      <div className="upload-grid">
        <div className="photo-tile warm" />
        <div className="photo-tile red" />
        <button className="photo-tile add">+</button>
      </div>
      <button className="full-button">내 점심 올리기</button>
    </div>
  );
}

function LunchBattleScreen() {
  return (
    <div className="pick-screen">
      <div className="screen-header">
        <span className="status-pill">친구 5명 참여중</span>
        <strong>맛 · 가성비 · 다이어트</strong>
      </div>
      <div className="pick-stack">
        {lunchPicks.map((pick) => (
          <button className="pick-card" key={pick.title}>
            <div className="pick-photo" style={{ background: pick.image }} />
            <div>
              <small>{pick.owner}</small>
              <h3>{pick.title}</h3>
              <p>{pick.meta}</p>
            </div>
            <b>{pick.votes}%</b>
          </button>
        ))}
      </div>
      <div className="criteria-row">
        {criteria.map((category) => <span key={category}>{category}</span>)}
      </div>
      <button className="full-button">기준별 승자 보기</button>
    </div>
  );
}

function CommunityVoteScreen() {
  return (
    <div className="community-screen">
      <div className="screen-header">
        <span className="status-pill hot">커뮤니티</span>
        <strong>승자 판정 요청</strong>
      </div>
      <h3>오늘 점심 승자는 누구?</h3>
      <p className="muted">친구 투표가 갈려서 20분 동안 커뮤니티 판정 중</p>
      <div className="poll-list">
        {communityItems.map((item) => (
          <div className="poll-item" key={item.label}>
            <div className="poll-label"><b>{item.label}</b><span>{item.percent}%</span></div>
            <div className="bar"><i style={{ width: `${item.percent}%` }} /></div>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
      <div className="comment-card">
        <b>💬 jiwon</b>
        <span>맛은 제육인데 오늘 기준 종합은 포케가 더 깔끔해 보여요.</span>
      </div>
      <button className="full-button secondary-fill">나도 판정하기</button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
