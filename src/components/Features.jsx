import React from 'react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      title: "Verified Talent Network",
      description: "Access a pre-screened pool of skilled blue and grey collar workers ready to contribute to your business."
    },
    {
      title: "Anti-Ghosting Ledger",
      description: "Eliminate hiring risks with a data-driven Loyalty Score that institutionalizes 100% worker accountability."
    },
    {
      title: "Empowering the Workforce",
      description: "We provide fair wages, transparent contracts, and upskilling opportunities for every gig worker on our platform."
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title text-center">Empowering the Indian workforce</h2>

        <div className="features-container">
          <div className="features-art animate-fade-in">
            <img src="/assets/empower-art-custom.png" alt="Empowering workforce art" className="feature-img" onError={(e) => { e.target.src = '/assets/empower-art-v2.png'; }} />
          </div>

          <div className="features-list">
            {featureList.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon-wrapper">
                  <div className="feature-number">{index + 1}</div>
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
