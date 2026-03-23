import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about bg-pattern">
      <div className="container about-container">
        <h2 className="section-title about-title">About us</h2>
        
        <div className="about-content">
          <p className="about-text">
            At Kayaka, we recognized a fundamental gap in the Indian labor market. While gig and blue-collar work form the backbone of our economy, finding reliable talent and securing dignified work remained disjointed challenges.
          </p>
          <p className="about-text">
            We are solving this problem by building a bridge of trust. Our platform leverages technology to connect businesses with a verified, ready-to-deploy workforce. We go beyond mere matchmaking; we ensure compliance, provide skill development, and champion fair practices for our gig workers.
          </p>
          <p className="about-text">
            Our vision is drawn from the very spirit of the Indian worker—resilient, hard-working, and driven. Kayaka is here to empower both the employer and the employee, fostering a sustainable ecosystem where everyone thrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
