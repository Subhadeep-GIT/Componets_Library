import React from 'react';
import './WebBanner.css';

const WebBanner = () => {
  return (
    <section className="web-banner">
      <div className="banner-content">
        <h1>Welcome to My Website</h1>
        <p>This is a responsive web banner placed below the pixel grid.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default WebBanner;