import '../index.css';
import '../css/WorkPage.css';
import { useState, useEffect, useRef } from 'react';
import workTitle from '../assets/work-title.svg';

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const bookRefs = useRef([]);

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'Motion', id: 'motion' },
    { label: 'UI/UX', id: 'uiux' },
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

  useEffect(() => {
    // 只有在 All 分類時才初始化書本效果
    if (activeCategory !== 'all') return;
    if (!window.jQuery) return;
    const $ = window.jQuery;
    if (typeof $.fn.bookblock !== 'function') return;

    const books = [];

    bookRefs.current.forEach((bookEl) => {
      if (!bookEl) return;

      const $book = $(bookEl);
      const $bookBlock = $book.find('.bb-bookblock');
      const $backCover = $book.find('.bk-cover-back');
      const $backCoverBookBlock = $bookBlock.clone().appendTo($backCover);

      const bookDefault = () => $book.removeClass('bk-viewback bk-viewinside').addClass('bk-bookdefault').data({ opened: false, flip: false });
      const bookBack = () => $book.removeClass('bk-viewinside bk-bookdefault').addClass('bk-viewback').data({ opened: false, flip: true });
      const bookInside = () => $book.removeClass('bk-viewback bk-bookdefault').addClass('bk-viewinside').data({ opened: true, flip: false });

      bookDefault();

      $book.find('.bk-bookview').on('click', bookInside);
      $book.find('.bk-bookback').on('click', () => $book.data('flip') ? bookDefault() : bookBack());

      $bookBlock.bookblock({ speed: 800, shadow: false });
      $backCoverBookBlock.bookblock({ speed: 800, shadow: false });

      const bookBlockNext = () => $bookBlock.bookblock('next');
      const bookBlockPrev = () => $bookBlock.bookblock('prev');

      $bookBlock.children().add($backCoverBookBlock.children()).on('click', (e) => {
        if ($(e.target).closest('.bk-cover-back').length === 0) bookBlockNext();
        else bookBlockPrev();
      });

      books.push($book);
    });

    const handleClickOutside = (e) => {
      if ($(e.target).closest('.bk-book').length === 0) {
        books.forEach(($book) => {
          $book.removeClass('bk-viewinside bk-viewback').addClass('bk-bookdefault');
        });
      }
    };

    $('html').on('click', handleClickOutside);

    // 清除事件與 DOM 狀態
    return () => {
      $('html').off('click', handleClickOutside);
      books.forEach(($book) => {
        $book.off();
        $book.find('*').off();
        $book.removeClass('bk-viewinside bk-viewback').addClass('bk-bookdefault');
      });
    };
  }, [activeCategory]);

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

      {/* 菜單設計區塊（只在 All 時顯示） */}
      {activeCategory === 'all' && (
        <section
          className="menu-design-section"
          style={{
            backgroundColor: getSectionBgColor('menu'),
            height: '630px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '150px',
            gap: '50px',
            flexWrap: 'wrap'
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="menu-book bk-book"
              ref={(el) => (bookRefs.current[i] = el)}
              style={{
                width: '263px',
                height: '372px',
                backgroundColor: '#ccc',
                borderRadius: '4px',
                position: 'relative'
              }}
            >
              <div className="bb-bookblock">
                <div className="bb-item">Page 1</div>
                <div className="bb-item">Page 2</div>
                <div className="bb-item">Page 3</div>
              </div>
              <div className="bk-cover-back"></div>
            </div>
          ))}
        </section>
      )}

      {/* 平面設計區塊 */}
      <section
        className="graphic-design-section"
        style={{
          backgroundColor: getSectionBgColor('graphic'),
          height: '760px',
          width: '100%',
        }}
      ></section>

      {/* UI/UX 設計區塊 */}
      <section
        className="uiux-design-section"
        style={{
          backgroundColor: getSectionBgColor('uiux'),
          height: '720px',
          width: '100%',
        }}
      ></section>

      {/* 最後一個設計區塊 */}
      <section
        className="final-design-section"
        style={{
          backgroundColor: getSectionBgColor('final'),
          height: '760px',
          width: '100%',
        }}
      ></section>
    </div>
  );
}

export default WorkPage;
