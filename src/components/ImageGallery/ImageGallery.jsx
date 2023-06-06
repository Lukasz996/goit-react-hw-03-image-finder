import PropTypes from 'prop-types';
import React from 'react';

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
