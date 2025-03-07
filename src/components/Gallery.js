import React, { useState } from 'react';

// Sample gallery images (replace with your own images)
const galleryImages = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-title">Our Gallery</h2>
                <p className="section-description">Discover the highlights of our past events through our photo gallery.</p>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src="path/to/image.jpg" alt="Description of the image" />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <img src={selectedImage} alt="Selected" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
