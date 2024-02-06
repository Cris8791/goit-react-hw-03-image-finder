import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'; // Asigură-te că calea este corectă

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)} // Elimină this.props
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
