import Notiflix from "notiflix";
import PropTypes from "prop-types";
import SearchbarStyles from "./SearchbarStyles";

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchText = event.target.elements.searchInput.value;
    if (searchText.trim() === "") {
      Notiflix.Notify.info("Enter phrase");
      return;
    }
    await onSubmit(searchText);
  };

  return (
    <SearchbarStyles>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <span className="input-border input-border-alt"></span>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </SearchbarStyles>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
