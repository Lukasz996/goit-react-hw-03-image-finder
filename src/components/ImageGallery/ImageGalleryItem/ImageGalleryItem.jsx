import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <li className="gallery-item" onClick={handleClick}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

export default ImageGalleryItem;
