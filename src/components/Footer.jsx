import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src="/logo.png" alt="" />
            <p>Crafted with care.<br />Brewed for community.</p>
        </div>
        <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Visit Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-info">
            <div className="info1">
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 8:00 AM - 9:00 PM</p>
                <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
            </div>
            <div className="info2">
                <h3>Contact Us</h3>
                <p>📍 123 Brew Street, Coffee, Ameerpeth</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ hello@brownbeans.in</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
