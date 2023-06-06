import React from 'react';
import PropTypes from 'prop-types'

const Modal = ({ image, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default Modal;
