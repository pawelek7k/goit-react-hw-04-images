import PropTypes from "prop-types";
import { useEffect } from "react";
import ModalWindow from "./ModalWindow";
import Overlay from "./Overlay";

const Modal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalWindow>
        <img src={imageUrl} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
