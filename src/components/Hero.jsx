import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const trustWords = ['TRUST', 'ನಂಬಿಕೆ', 'भरोसा', 'నమ్మకం', 'நம்பிக்கை', 'വിശ്വാസം'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % trustWords.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero bg-pattern">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-headline">
            The fastest way to hire a workforce built on <span className="highlight-text changing-text" key={wordIndex}>{trustWords[wordIndex]}</span>
          </h1>
          <p className="hero-subtext">Connecting gig and blue & grey collar talent with verified opportunities across India.</p>
          <a href="https://chat.whatsapp.com/F6J4angQBcRFsqI8DDbRyd?mode=gi_t" target="_blank" rel="noopener noreferrer" className="cta-btn">Join us</a>
        </div>
        <div className="hero-art">
          <img src="/assets/hero-art.png" alt="Kayaka Workforce Art" className="art-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
