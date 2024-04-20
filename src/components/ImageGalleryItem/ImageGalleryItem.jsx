import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageUrl, alt, id, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(id)}>
      <img src={imageUrl} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
