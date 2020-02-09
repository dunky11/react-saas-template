import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/waveAnimation.css";

function WaveBorder(props) {
  return (
    <div className={props.className} style={{ background: props.upperColor }}>
      <div class="inner-header flex"></div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use href="#gentle-wave" x="48" y="0" fill={props.lowerColor} />
        </g>
      </svg>
    </div>
  );
}

WaveBorder.propTypes = {
  classes: PropTypes.object.isRequired,
  upperColor: PropTypes.string.isRequired,
  lowerColor: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default withStyles()(WaveBorder);
