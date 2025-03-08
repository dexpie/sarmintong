import React from 'react';

const galleryImages = [
    "https://i.pinimg.com/736x/0a/65/64/0a656443ea48ac6408ce034f8b28ee0c.jpg",
    "https://i.pinimg.com/736x/0c/d1/8d/0cd18d407b5247c204e4f8dd9ec1591a.jpg",
    "https://i.pinimg.com/736x/4b/f2/99/4bf2994702ce7fbdeccacaa57eb19748.jpg"
];

const Gallery = () => (
    <div>
        {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
    </div>
);

export default Gallery;
