import React from 'react';

const Events = () => {
    const eventsData = [
        {
            id: 1,
            title: "Adventure Awaits",
            date: "March 15, 2025",
            time: "5:00 PM",
            description: "Join us for a night of storytelling and adventure! Experience a world of magic and tales.",
            image: "https://via.placeholder.com/400x250",
        },
        {
            id: 2,
            title: "Quest for Knowledge",
            date: "April 20, 2025",
            time: "2:00 PM",
            description: "A workshop exploring the world of mythical creatures and ancient legends. Don't miss it!",
            image: "https://via.placeholder.com/400x250",
        },
        {
            id: 3,
            title: "Heroic Battle",
            date: "May 10, 2025",
            time: "7:00 PM",
            description: "An epic gathering of warriors! Battle it out in a tournament to prove your strength.",
            image: "https://via.placeholder.com/400x250",
        },
    ];

    return (
        <section id="events" className="events-section">
            <div className="container text-center">
                <h2 className="section-title">Upcoming Events</h2>
                <p className="section-description">Check out our latest events and join us for exciting activities!</p>

                <div className="events-list">
                    {eventsData.map((event) => (
                        <div key={event.id} className="event-card">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-date">{event.date} at {event.time}</p>
                                <p className="event-description">{event.description}</p>
                                <button className="cta-button">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
