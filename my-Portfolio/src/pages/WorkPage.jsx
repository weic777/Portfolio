import '../index.css';
import '../css/WorkPage.css';
import { useState } from 'react';
import workTitle from '../assets/work-title.svg';
import wafa from '../assets/wafa.jpg'; 
import wafa1 from '../assets/wafa1.png';
import wafa2 from '../assets/wafa2.png';
import wafa3 from '../assets/wafa3.png';
import wafa4 from '../assets/wafa4.png';
import wafa5 from '../assets/wafa5.png';
import wafa6 from '../assets/wafa6.png';
import HTMLFlipBook from 'react-pageflip';

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBook, setActiveBook] = useState(null);

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'Motion', id: 'motion' },
    { label: 'UI/UX', id: 'uiux' },
  ];

  const books = [
    {
      cover: wafa,
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa1, wafa2], [wafa3, wafa4], [wafa5, wafa6], [wafa1, wafa2], [wafa3, wafa4]],
    },
    {
      cover: wafa,
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
    {
      cover: wafa,
      size: { cover: { w: 263, h: 372 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
    {
      cover: wafa,
      size: { cover: { w: 175, h: 371 }, page: { w: 343, h: 486 } },
      pages: [[wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa], [wafa, wafa]],
    },
  ];

  const getSectionBgColor = (section) => {
    if (activeCategory !== 'all') return 'white';
    switch (section) {
      case 'menu': return 'rgba(13, 183, 214, 0.5)';
      case 'graphic': return 'white';
      case 'uiux': return '#EFEC64';
      case 'final': return '#E6E6DC';
      default: return 'white';
    }
  };

  const openBook = (index) => setActiveBook(index);
  const closeBook = () => setActiveBook(null);

  return (
    <div className="App">
      {/* 標題 */}
      <section className="title-section" style={{ marginTop: '110px', display: 'flex', justifyContent: 'center' }}>
        <img src={workTitle} alt="作品標題圖" style={{ width: '180px', maxWidth: '100%' }} />
      </section>

      {/* 分類選單 */}
      <section className="category-section" style={{ marginTop: '50px', textAlign: 'center' }}>
        <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-xl">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`hover-link ${activeCategory === item.id ? 'active' : ''}`}
              type="button"
            >
              <span className="hover-label">{item.label}<span className="count-text">(66)</span></span>
            </button>
          ))}
        </div>
        <div className="line-grow" style={{ width: '100%', height: '3px', backgroundColor: 'black', marginTop: '20px' }}></div>
      </section>

      {/* 書本封面區塊 */}
      {activeCategory === 'all' && (
        <section
          className="menu-design-section"
          style={{
            backgroundColor: getSectionBgColor('menu'),
            height: '630px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5vh',
            position: 'relative',
            flexWrap: 'wrap',
          }}
        >
          {/* ✅ 標題區塊 */}
          <div className="section-title">
            <div className="zh">菜單設計</div>
            <div className="en">Menu Design</div>
          </div>

          {/* 書本清單 */}
          {books.map((book, i) => (
  <div
    key={i}
    onClick={() => openBook(i)}
    className="book-cover"
    style={{
      width: `${book.size.cover.w}px`,
      height: `${book.size.cover.h}px`,
      backgroundImage: `url(${book.cover})`,
    }}
  >
    {/* 提示文字 + 漸層箭頭 */}
<div className="hint-wrapper">
  <div className="hint-text">點擊封面翻閱</div>
  <svg className="hint-arrow" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff7e5f" />
        <stop offset="100%" stopColor="#feb47b" />
      </linearGradient>
    </defs>
    <path d="M12 5v14M5 12l7 7 7-7" stroke="url(#arrowGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>

    {/* hover 時可顯示的標題 */}
    <div className="book-title">Book {i + 1}</div>
  </div>
))}

        </section>
      )}

      {/* 彈窗翻書 */}
      {activeBook !== null && (
        <div className="book-modal">
          <HTMLFlipBook
            width={books[activeBook].size.page.w}
            height={books[activeBook].size.page.h}
            size="fixed"
            showCover={true}
            mobileScrollSupport={true}
            maxShadowOpacity={0.5}
          >
            {books[activeBook].pages.flatMap((pair, index) => [
              <div
                key={`left-${index}`}
                className="flip-page"
                style={{ width: books[activeBook].size.page.w, height: books[activeBook].size.page.h }}
              >
                <img src={pair[0]} alt={`Book ${activeBook + 1} Page ${index * 2 + 1}`} />
              </div>,
              <div
                key={`right-${index}`}
                className="flip-page"
                style={{ width: books[activeBook].size.page.w, height: books[activeBook].size.page.h }}
              >
                <img src={pair[1]} alt={`Book ${activeBook + 1} Page ${index * 2 + 2}`} />
              </div>,
            ])}
          </HTMLFlipBook>

          <button className="book-modal-close" onClick={closeBook}>×</button>
        </div>
      )}

      {/* 平面設計區塊 */}
      <section className="graphic-design-section" style={{ backgroundColor: getSectionBgColor('graphic'), height: '760px', width: '100%' }}></section>

      {/* UI/UX 設計區塊 */}
      <section className="uiux-design-section" style={{ backgroundColor: getSectionBgColor('uiux'), height: '720px', width: '100%' }}></section>

      {/* 最後一個設計區塊 */}
      <section className="final-design-section" style={{ backgroundColor: getSectionBgColor('final'), height: '760px', width: '100%' }}></section>
    </div>
  );
}

export default WorkPage;
