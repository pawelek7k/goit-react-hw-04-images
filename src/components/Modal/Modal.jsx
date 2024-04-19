import PropTypes from "prop-types";

// import { useEffect } from "react";

export const Modal = ({ imageUrl, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="overlay" onClick={handleCloseModal}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
