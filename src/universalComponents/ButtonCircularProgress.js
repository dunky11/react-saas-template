import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

function ButtonCircularProgress(props) {
  const { size } = props;
  return (
    <CircularProgress
      size={size ? size : 24}
      style={{
        marginLeft: 12
      }}
      thickness={size ? (size / 5) * 24 : 5}
      className="text-secondary mr-1"
    />
  );
}

ButtonCircularProgress.propTypes = {
  size: PropTypes.number
};

export default ButtonCircularProgress;
