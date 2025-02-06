import React from 'react';
import './footer.scss';

function Footer({ isAbout }) {
  return (
    <div className={`footer-background ${isAbout ? 'about-page-footer' : ''}`}>
      <footer className="footer-container">
        <p className="footer-text">
          &copy; Copyright 2025. All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
