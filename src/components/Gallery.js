import React, { useState } from 'react';

const galleryImages = [
    "https://i.pinimg.com/736x/0a/65/64/0a656443ea48ac6408ce034f8b28ee0c.jpg",
    "https://i.pinimg.com/736x/0c/d1/8d/0cd18d407b5247c204e4f8dd9ec1591a.jpg",
    "https://i.pinimg.com/736x/4b/f2/99/4bf2994702ce7fbdeccacaa57eb19748.jpg"
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
                            <img
                                src={image}
                                alt={`Himmel sang pahlawan`} // Simple dynamic alt for each image
                                onClick={() => openModal(image)}
                            />
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
