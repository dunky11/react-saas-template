import React from "react";
import PropTypes from "prop-types";
import "../css/waveAnimation.css";

function WaveBorder(props) {
  const { className, lowerColor, upperColor } = props;
  return (
    <div className={className} style={{ background: upperColor }}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill={lowerColor} />
        </g>
      </svg>
    </div>
  );
}

WaveBorder.propTypes = {
  lowerColor: PropTypes.string.isRequired,
  upperColor: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default WaveBorder;
