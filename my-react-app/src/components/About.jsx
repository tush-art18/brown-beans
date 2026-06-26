import React from 'react';

const About = () => {
  return (
    <div className="about">
        <div className="video"><video autoPlay loop muted src="/about_video.mp4"></video></div>
        <div className="content2">
            <h2>About Us</h2>
            <p>Welcome to Brown Beans, where coffee is more than just a drink—it’s a daily ritual, a cozy escape, and a connection to community. Nestled in the heart of the city, Brown Beans is your neighborhood café, serving handcrafted coffee, freshly baked pastries, and a warm smile every day.</p>
            <p>But Brown Beans isn’t just about coffee—it’s about people. From the moment you walk through our doors, you’re part of our story. Sit back, stay awhile, and let the aroma of fresh brews and the hum of conversation make you feel right at home.</p>
        </div>
    </div>
  );
};

export default About;
