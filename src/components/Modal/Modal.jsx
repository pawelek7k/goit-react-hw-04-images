import BasicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = ({ images, onClose, startIndex }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const imageUrls = images.map((image) => image.largeImageURL);
    const instance = BasicLightbox.create(imageUrls, {
      onClose: () => {
        onClose();
      },
      startIndex: startIndex,
      closable: true,
    });

    instance.show();

    return () => {
      instance.close();
    };
  }, [images, onClose, startIndex]);

  return null;
};

Modal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
};
