import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Kayaka</h2>
          <p className="footer-tagline">The fastest way to hire a workforce built on Trust.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Resources</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#trust">Trust & Safety</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kayaka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
