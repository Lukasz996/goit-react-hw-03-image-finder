import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => (
  <ul className="gallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onItemClick={onItemClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;