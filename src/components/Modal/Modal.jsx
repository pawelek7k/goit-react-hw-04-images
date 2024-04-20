import PropTypes from "prop-types";
import { useEffect } from "react";
import ModalWindow from "./ModalWindow";
import Overlay from "./Overlay";

const Modal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleClose}>
          <ModalWindow>
            <img src={imageUrl} alt="" />
          </ModalWindow>
        </Overlay>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
