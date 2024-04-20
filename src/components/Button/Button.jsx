import PropTypes from "prop-types";

export const Button = ({ onClick, isLoading }) => {
  return (
    <button onClick={onClick} style={{ display: isLoading ? "block" : "none" }}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
