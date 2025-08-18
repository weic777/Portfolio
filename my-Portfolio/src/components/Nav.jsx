import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import behanceIcon from '../assets/Group_Behance.svg';
import behanceIconHover from '../assets/Group_Behance_hover.svg';
import linkedinIcon from '../assets/Group_linkedin.svg';
import linkedinIconHover from '../assets/Group_linkedin_hover.svg';

function Header() {
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const menuItems = [
    { label: 'WORK', to: '/work', tooltip: '作品一覽' },
    { label: 'PROFILE', to: '/profile', tooltip: '個人簡介' },
    { label: 'CONTACT', to: '/contact', tooltip: '聯絡資訊' },
  ];

  // 當路徑改變時自動滾動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="header sticky-header">
      <div className="title">
        <p className="subtitle">
          <span className="en-label">
            <span className="space-left"></span>
            <span className="word">Visual</span>
            <span className="space"></span>
            <span className="word">Designer</span>
          </span>
          <span className="zh-label">視覺設計師</span>
        </p>
        <h1 className="logo">
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            WEI KO-HSIN
          </Link>
        </h1>
      </div>

      <nav className="nav">
        {menuItems.map((item) => (
          <div className="nav-item" key={item.to}>
            <Link to={item.to}>{item.label}</Link>
            <div className={`tooltip ${location.pathname === item.to ? 'active' : ''}`}>
              {item.tooltip}
            </div>
            {location.pathname === item.to && <div className="nav-dot" />}
          </div>
        ))}

        <div
          className="nav-item"
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{ marginLeft: '5px' }}
        >
          <a
            href="https://www.linkedin.com/in/ko-hsin-wei-312574241"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={hoveredIcon === 'linkedin' ? linkedinIconHover : linkedinIcon}
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <div className="tooltip">LinkedIn</div>
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => setHoveredIcon('behance')}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{ marginLeft: '-5px' }}
        >
          <a
            href="https://www.behance.net/gallery/174963007/2025-"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={hoveredIcon === 'behance' ? behanceIconHover : behanceIcon}
              alt="Behance"
              className="icon"
            />
          </a>
          <div className="tooltip">Behance</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
