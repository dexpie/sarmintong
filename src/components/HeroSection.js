import React from 'react';
import '../index.css';  // Import custom CSS

const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay">
                <div className="container">
                    <h1 className="hero-title scroll-effect">Enter the Realm of Adventure</h1>
                    <p className="hero-description scroll-effect">
                        A world of magic, battles, and tales await you. Discover the adventures of Frieren, explore epic landscapes, and unlock your own destiny.
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-button">Our Program</button>
                        <button className="cta-button">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
