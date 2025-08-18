import './Footer.css';
import behanceIcon from '../assets/Behance_w.svg';
import behanceIconHover from '../assets/Behance_w_hover.svg';
import linkedinIcon from '../assets/Linkedin_w.svg';
import linkedinIconHover from '../assets/Linkedin_w_hover.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* 上方 icon */}
      <div className="footer-icons">
        <a
          href="https://www.behance.net/gallery/174963007/2025-"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon('behance')}
          onMouseLeave={() => setHoveredIcon('')}
        >
          <img
            src={hoveredIcon === 'behance' ? behanceIconHover : behanceIcon}
            alt="Behance"
            className="footer-icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ko-hsin-wei-312574241"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon('')}
        >
          <img
            src={hoveredIcon === 'linkedin' ? linkedinIconHover : linkedinIcon}
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
      </div>

      {/* 下方三組文字 */}
      <div className="footer-links">
        <Link
          to="/work"
          className="footer-link"
          onClick={scrollToTop}
        >
          <span className="footer-link-title">作品一覽</span>
          <span className="footer-link-subtitle">WORK</span>
        </Link>

        <Link
          to="/profile"
          className="footer-link"
          onClick={scrollToTop}
        >
          <span className="footer-link-title">個人簡介</span>
          <span className="footer-link-subtitle">PROFILE</span>
        </Link>

        <Link
          to="/contact"
          className="footer-link"
          onClick={scrollToTop}
        >
          <span className="footer-link-title">聯絡資訊</span>
          <span className="footer-link-subtitle">CONTACT</span>
        </Link>
      </div>

      {/* 版權文字 */}
      <div className="footer-copyright">
        © 2025 Wei C. All rights reserved.
      </div>
    </footer>
  );
}
