import PropTypes from "prop-types";
import { Audio } from "react-loader-spinner";

export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
