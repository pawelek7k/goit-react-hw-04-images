import PropTypes from "prop-types";

export const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
