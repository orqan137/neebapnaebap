import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const categories = [
  { key: 'taste', label: '맛있어 보임' },
  { key: 'value', label: '가성비' },
  { key: 'healthy', label: '건강밥' },
];

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">NeebapNaebap Web</p>
        <h1>친구끼리 점심 사진 승부를 관리하고 공유하는 웹 프론트</h1>
        <p>웹은 관리자, 랜딩, 공유 결과, 딥링크 fallback 전용이다. 앱 본체는 React Native가 담당한다.</p>
      </section>
      <section className="card">
        <h2>핵심 투표 축</h2>
        <div className="chips">{categories.map((category) => <span key={category.key}>{category.label}</span>)}</div>
      </section>
      <section className="card">
        <h2>Community share</h2>
        <p>친구끼리 의견이 갈리면 대결을 커뮤니티 판정 대기 상태로 올린다.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
