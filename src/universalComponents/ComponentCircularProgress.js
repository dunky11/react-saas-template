import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

function ComponentCircularProgress(props) {
  const { size } = props;
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <CircularProgress size={size ? size : 30} className="text-secondary" />
    </div>
  );
}

ComponentCircularProgress.propTypes = {
  size: PropTypes.number
};

export default ComponentCircularProgress;
