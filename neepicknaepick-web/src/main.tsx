import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const friendPicks = [
  {
    owner: '내 픽',
    title: '실버 러너 스니커즈',
    meta: '주말 데이트 · 129,000원',
    emoji: '👟',
    gradient: 'linear-gradient(135deg, #dbeafe, #a78bfa)',
    votes: 58,
  },
  {
    owner: '네 픽',
    title: '노이즈캔슬링 헤드폰',
    meta: '출퇴근 필수템 · 189,000원',
    emoji: '🎧',
    gradient: 'linear-gradient(135deg, #fee2e2, #fb7185)',
    votes: 42,
  },
];

const communityItems = [
  { label: '감성 카페 A', percent: 64, note: '사진 찍기 좋고 대화하기 편함' },
  { label: '루프탑 바 B', percent: 36, note: '분위기는 좋지만 웨이팅 리스크' },
];

const categories = ['분위기', '실용성', '가성비', '친구 반응'];

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
            <p className="eyebrow">니픽내픽 · social pick battle</p>
            <h1>친구의 픽과 내 픽, 고르기 어려울 땐 같이 투표받자.</h1>
            <p>
              패션, 장소, 선물, 콘텐츠, 음식까지. NeepickNaepick은 일상의 선택지를
              친구 배틀과 커뮤니티 투표로 바꾸는 모바일 앱입니다.
            </p>
            <div className="hero-actions">
              <button className="primary">픽 배틀 시작</button>
              <button className="secondary">커뮤니티 투표 보기</button>
            </div>
          </div>
          <PhoneFrame title="오늘 뭐 고를까?">
            <PickBattleScreen />
          </PhoneFrame>
        </div>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Main screens</p>
        <h2>실제 프론트 앱처럼 잡아둔 임시 핵심 화면</h2>
      </section>

      <section className="screens-grid">
        <PhoneFrame title="친구끼리 픽 고르기">
          <PickBattleScreen />
        </PhoneFrame>
        <PhoneFrame title="커뮤니티 투표 받기">
          <CommunityVoteScreen />
        </PhoneFrame>
        <PhoneFrame title="결과 공유 카드">
          <ResultScreen />
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

function PickBattleScreen() {
  return (
    <div className="pick-screen">
      <div className="screen-header">
        <span className="status-pill">친구 4명 참여중</span>
        <strong>내 픽 vs 네 픽</strong>
      </div>
      <div className="pick-stack">
        {friendPicks.map((pick) => (
          <button className="pick-card" key={pick.title}>
            <div className="pick-art" style={{ background: pick.gradient }}><span>{pick.emoji}</span></div>
            <div>
              <small>{pick.owner}</small>
              <h3>{pick.title}</h3>
              <p>{pick.meta}</p>
            </div>
            <b>{pick.votes}%</b>
          </button>
        ))}
      </div>
      <div className="category-row">
        {categories.map((category) => <span key={category}>{category}</span>)}
      </div>
      <button className="full-button">이 픽으로 투표하기</button>
    </div>
  );
}

function CommunityVoteScreen() {
  return (
    <div className="community-screen">
      <div className="screen-header">
        <span className="status-pill hot">LIVE</span>
        <strong>커뮤니티 판정 요청</strong>
      </div>
      <h3>첫 데이트 장소, 어디가 더 좋아?</h3>
      <p className="muted">친구끼리 2:2로 갈려서 30분 동안 투표받는 중</p>
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
        <b>💬 minji</b>
        <span>대화 목적이면 카페 A가 압승. 사진도 더 잘 나올 듯!</span>
      </div>
      <button className="full-button purple">나도 투표하기</button>
    </div>
  );
}

function ResultScreen() {
  return (
    <div className="result-screen">
      <div className="trophy">🏆</div>
      <p className="eyebrow">winner pick</p>
      <h3>실버 러너 스니커즈</h3>
      <p className="muted">친구 투표 58% · 커뮤니티 재확인 71%</p>
      <div className="result-stats">
        <span><b>126</b> votes</span>
        <span><b>18</b> comments</span>
      </div>
      <button className="full-button">결과 공유하기</button>
      <button className="ghost-button">새 픽 배틀 만들기</button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
