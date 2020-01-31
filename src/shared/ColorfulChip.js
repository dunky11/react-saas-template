import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@material-ui/core";
import shadeColor from "./shadeColor";

function ColorfulChip(props) {
  const { color, label, className } = props;
  return (
    <Chip
      style={{
        color: color,
        backgroundColor: shadeColor(color, 0.7)
      }}
      label={label}
      className={className ? className : null}
    />
  );
}

ColorfulChip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default ColorfulChip;
