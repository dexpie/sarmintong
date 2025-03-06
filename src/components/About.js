import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section scroll-effect">
            <div className="container text-center">
                <h2 className="about-title">About Us: A Journey Begins</h2>
                <p className="about-text">
                    In a land where magic flows through every river and the sun casts a golden glow on the world, we, the keepers of stories, invite you to embark on a journey.<br />
                    Here, we craft stories filled with wonder, magic, and emotions that will leave you inspired, much like the adventures of Frieren and other heroic legends.
                </p>
                <p className="about-text">
                    We are inspired by the wonders of fantasy, combining the awe of **Genshin Impact**, **Honkai**, and the gentle, poignant world of **Frieren**. Every chapter we create is a new world waiting for you to explore. Join us, fellow traveler, as we chart the path forward.
                </p>

                <div className="about-image">
                    <img src="https://i0.wp.com/finalweapon.net/wp-content/uploads/2023/08/Frieren-Beyond-Journeys-End-opening-and-ending-theme-songs.jpg?fit=1920%2C1080&ssl=1" alt="Frieren" className="img-fluid rounded-circle" />
                </div>
            </div>
        </section>
    );
}

export default About;
