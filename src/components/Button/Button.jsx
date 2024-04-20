import PropTypes from "prop-types";

export const Button = ({ onClick, loadMore }) => {
  return (
    <button onClick={onClick} style={{ display: loadMore ? "block" : "none" }}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loadMore: PropTypes.bool.isRequired,
};
