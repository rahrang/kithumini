import React from 'react';

import landingImage1440vw from '../images/kimi-landing-1440vw.jpg';
import landingImage576vw from '../images/kimi-landing-576vw.jpg';

const Landing = () => (
  <div className="landing">
    <img
      src={landingImage1440vw}
      srcSet={`
      ${landingImage576vw} 573w,
      ${landingImage1440vw} 1080w
      `}
      sizes={`(max-width: 570px) 100vw, 100vw`}
      alt=""
    />
    <div className="text-container">
      <div className="greeting">Hello, I'm</div>
      <h1>Kithumini Jayasiri</h1>
    </div>
  </div>
);

export default Landing;
