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
      <div style={{width: '100%' }}>
        {/* 作品標題區塊 */}
        <section className="px-0 py-0">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img
              src={workTitle}
              alt="作品標題圖"
              className="fade-up"
              style={{
                width: '180px',
                maxWidth: '100%',
                marginTop: '110px',
                marginLeft: '20px',
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
            <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4">
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkPage;
