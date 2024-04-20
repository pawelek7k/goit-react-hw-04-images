import Notiflix from "notiflix";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { Searchbar } from "./components/Searchbar/Searchbar";

function App() {
  const apiKey = "42475479-1764a7314469942521760576b";
  const [isLoading, setIsLoading] = useState(true);
  const [loadMoreState, setLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = () => {
    setLoadMore(true);
    setError(false);
    setIsLoading(false);
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
        Notiflix.Notify.Failure(
          "Network error. Please check your internet connection."
        );
      })
      .finally(() => {
        setLoadMore(true);
        setIsLoading(false);
      });
  };

  const getSearches = async (searchText) => {
    setPage(1);
    setLoadMore(true);
    setError(false);
    setIsLoading(true);
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
        Notiflix.Notify.Failure(
          "Network error. Please check your internet connection."
        );
      })
      .finally(() => {
        setLoadMore(true);
        setIsLoading(false);
      });
  };

  const handleImageClick = (imageId) => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&id=${imageId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.hits && data.hits.length > 0) {
          const imageUrl = data.hits[0].webformatURL;
          setSelectedImageUrl(imageUrl);
          setIsModalOpen(true);
        } else {
          console.error("No image found with the provided ID.");
        }
      })
      .catch((error) => {
        console.error("Error fetching image details:", error);
      });
  };

  const handleCloseModal = () => {
    setSelectedImageUrl("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Searchbar onSubmit={getSearches} />
      <ImageGallery images={images} handleImageClick={handleImageClick} />

      <Button onClick={loadMore} loadMore={loadMoreState} />
      <Loader isLoading={isLoading} />

      {isModalOpen && selectedImageUrl && (
        <Modal
          imageUrl={selectedImageUrl && selectedImageUrl.toString()}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
}

export default App;
