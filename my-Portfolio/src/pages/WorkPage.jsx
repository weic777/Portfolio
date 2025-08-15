import '../index.css';
import '../css/WorkPage.css';
import { useState } from 'react';
import workTitle from '../assets/work-title.svg';

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'Motion', id: 'motion' },
    { label: 'UI/UX', id: 'uiux' },
    { label: 'Client', id: 'client' },
  ];

  const contentByCategory = {
    all: <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>888</span>,
    graphic: <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>777</span>,
    motion: <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>666</span>,
    uiux: <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>555</span>,
    client: <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>333</span>,
  };

  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        {/* 作品標題區塊 */}
        <section className="px-0 py-0">
          <div style={{
      display: 'flex',
      justifyContent: 'center', // 水平置中
      marginTop: '110px',}}>
            <img
              src={workTitle}
              alt="作品標題圖"
              className="fade-up"
              style={{
                width: '180px',
                maxWidth: '100%',
                
              }}

            />

          </div>
        </section>

        {/* 分類選項區塊 */}
        <section
          className="px-8 text-center mb-20 fade-up-delay"
          style={{ marginTop: '100px' }}
        >
          <div className="inline-flex flex-col font-bold text-xl items-center w-full">
            <div className="inline-flex flex-wrap justify-center alignItems: 'centergap-x-8 gap-y-4">
              {categories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`hover-link ${activeCategory === item.id ? 'active' : ''}`}
                  type="button"
                >
                  <span className="hover-label">
                    {item.label}
                    <span className="count-text">(66)</span>
                  </span>
                </button>
              ))}
            </div>

            {/* 黑色分隔線 */}
            <div
              className="line-grow"

              style={{
                width: '100%',
                marginTop: '20px',
              }}
            ></div>

            {/* 分類內容區 */}
            <div
              style={{
                marginTop: '40px',
                fontSize: '24px',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              {contentByCategory[activeCategory]}

            </div>
            <svg className="my-svg"viewBox="0 0 200 200" width="100%" height="100%">
  {/* 白色背景 */}
  <rect width="100%" height="100%" fill="white" />

  {/* 手繪濾鏡 */}
  <defs>
    <filter id="rough">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise"/>
      <feDisplacementMap in2="noise" in="SourceGraphic" scale="2"/>
    </filter>
  </defs>

  {/* 線條 */}
  <path
    className="line"
    pathLength="1"
    d="M94 86 
       L79 77.53
       C78.6948 77.3538 78.4415 77.1001 78.2659 76.7945 
       78.0903 76.4889 77.9986 76.1424 78 75.79
       V40
       C78 29.9218 73.9964 20.2563 66.8701 13.1299
       C59.7437 6.00356 50.0782 2 40 2
       C29.9218 2 20.2563 6.00356 13.1299 13.1299
       C6.00356 20.2563 2 29.9218 2 40
       V134
       C2 144.078 6.00356 153.744 13.1299 160.87
       C20.2563 167.996 29.9218 172 40 172
       C50.0782 172 59.7437 167.996 66.8701 160.87
       C73.9964 153.744 78 144.078 78 134
       V95.5"
    stroke="black"
    strokeWidth="3"
    strokeMiterlimit="10"
    strokeLinecap="round"
    style={{ filter: 'url(#rough)' }}
  />
</svg>

              <svg viewBox="0 0 200 200" width="200">
  <path class="part" pathLength="1" d="M 10 150 Q 95 10 180 150" />
  <path class="part" pathLength="1" d="M 30 150 Q 95 30 160 150" />
</svg>

          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkPage;
