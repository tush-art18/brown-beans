import React from 'react';

const Gallery = () => {
  return (
    <div className="outer-gallery">
        <div className="message1">
            <h2>Our Creative Space</h2>
        </div>
        <div className="gallery">
            <div className="parent">
                <div className="div1 reveal-stagger">
                    <video autoPlay loop muted src="/one.mp4"></video>
                </div>
                <div className="div2 reveal-stagger">
                    <video autoPlay loop muted src="/two.mp4"></video>
                </div>
                <div className="div3 reveal-stagger">
                    <video autoPlay loop muted src="/three.mp4"></video>
                </div>
                <div className="div4 reveal-stagger">
                    <video autoPlay loop muted src="/four.mp4"></video>
                </div>
                <div className="div5 reveal-stagger">
                    <video autoPlay loop muted src="/five.mp4"></video>
                </div>
                <div className="div6 reveal-stagger">
                    <video autoPlay loop muted src="/six.mp4"></video>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Gallery;
