import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import GalleryStyles from "./GalleryStyles";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <GalleryStyles>
      <ul className="gallery">
        {images &&
          images.map((image) => (
            <ImageGalleryItem
              key={`${image.id}` + `${nanoid()}`}
              imageUrl={image.webformatURL}
              alt={image.tags}
              id={image.id}
              onClick={onImageClick}
            />
          ))}
      </ul>
    </GalleryStyles>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func,
};
