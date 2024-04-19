import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import { Searchbar } from "./components/Searchbar/Searchbar";

function App() {
  const apiKey = "42475479-1764a7314469942521760576b";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedImageId, setSelectedImageId] = useState(null);

  const loadMore = () => {
    setIsLoading(true);
    setError(null);
    const prevPage = page + 1;

    fetch(
      `https://pixabay.com/api/?q=${encodeURIComponent(
        searchText
      )}&page=${prevPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getSearches = async (searchText) => {
    setIsLoading(true);
    setError(null);
    setSearchText(searchText);

    fetch(
      `https://pixabay.com/api/?q=${encodeURIComponent(
        searchText
      )}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.hits);
        setPage(1);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  return (
    <>
      <Searchbar onSubmit={getSearches} isLoading={isLoading} error={error} />
      <ImageGallery images={images} onImageClick={handleImageClick} />

      <Button onClick={loadMore} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load More"}
      </Button>
      {selectedImageId !== null && (
        <Modal
          images={images}
          onClose={() => setSelectedImageId(null)}
          startIndex={images.findIndex((image) => image.id === selectedImageId)}
        />
      )}
    </>
  );
}

export default App;
