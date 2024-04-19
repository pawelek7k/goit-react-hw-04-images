import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageUrl, alt, id, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div className="gallery-item" onClick={handleClick}>
      <img src={imageUrl} alt={alt} />
      <p>------------------</p>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
