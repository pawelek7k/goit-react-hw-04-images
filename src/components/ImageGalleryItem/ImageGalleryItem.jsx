import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageUrl, alt, id, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <li className="gallery-item" onClick={handleClick}>
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
