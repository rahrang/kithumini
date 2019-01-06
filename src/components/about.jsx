import React from 'react';

import kimiMainImage from '../images/kimi-main.jpg';
import kimiRunningImage from '../images/kimi-running.jpg';
import kimiWinningImage from '../images/kimi-winning.jpg';
import kimiGoldenGateImage from '../images/kimi-gg.jpg';

const About = () => (
  <div className="about section">
    {/* <h2>About</h2> */}
    <div className="about__desc-container">
      <p>
        As a senior at the University of California at Berkeley, I’m extremely
        interested in the intersection of nutrition, toxicology, and physiology.
        I live an active and healthy lifestyle from a macro perspective all the
        way down to a molecular level, and my passion is to bring my knowledge,
        experiences, and motivation to improve the lives of everyone I meet.
      </p>
      <img src={kimiMainImage} alt="at ocean beach!" />
    </div>
    <div className="about__desc-container reverse">
      <img src={kimiRunningImage} alt="running at my hometown track" />
      <p>
        I am self-driven. At the beginning of 2018, I struggled to run 25 miles
        in two weeks. By the end of the year, I had ran two full marathons,
        including over 1000 miles in the last 6 months. I train almost every day
        of the week, cook my own meals, and as I run farther into the running
        community, I am increasingly motivated to achieve my goals.
      </p>
    </div>
    <div className="about__desc-container">
      <p>
        I am always willing to take on a challenge that will give me the
        opportunity to break out of my comfort zone, as I now know it will
        ultimately help me grow, learn about myself, and the world around me. As
        I deeply empathize with others, I place a great importance in showing
        this through real actions — I volunteer a significant amount of my time
        to serving my communities.
      </p>
      <img
        src={kimiWinningImage}
        alt="after completing the California International Marathon"
      />
    </div>
    <div className="about__desc-container reverse">
      <img src={kimiGoldenGateImage} alt="with the Golden Gate Bridge" />
      <p>
        Whether it’s working on a team with people from omnifarious backgrounds,
        or with someone in need of a healthy lifestyle change, I understand the
        importance of listening to others and keeping an open mind, no matter
        how difficult the situation or unconventional the perspective.
      </p>
    </div>
  </div>
);

export default About;
