import PropTypes from "prop-types";
import ButtonStyles from "./ButtonStyles";
ButtonStyles;

export const Button = ({ onClick, loadMore }) => {
  return (
    <ButtonStyles
      onClick={onClick}
      style={{ display: loadMore ? "block" : "none" }}
    >
      Load more
    </ButtonStyles>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loadMore: PropTypes.bool.isRequired,
};
