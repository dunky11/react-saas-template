import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/waveAnimation.css";
import classNames from "classnames";

const styles = theme => ({
  waveWrapperInner: {
    position: "absolute",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    bottom: -1
  },
  waveWrapperOuter: {
    position: "relative",
    height: 150
  }
});

function WaveBorder(props) {
  const { classes, flipped, color } = props;
  return (
    <div
      className={classes.waveWrapperOuter}
      style={{
        marginTop: flipped ? 0 : -2,
        marginBottom: flipped ? -2 : 0,
        transform: flipped ? "rotateX(180deg)" : ""
      }}
    >
      <div className="waveWrapper waveAnimation">
        <div
          className={classNames(classes.waveWrapperInner, "bgBottom")}
          style={{ background: color }}
        >
          <div
            className="wave"
            style={{
              backgroundImage: "url('/images/wave-top.png')"
            }}
          />
        </div>
      </div>
    </div>
  );
}

WaveBorder.propTypes = {
  classes: PropTypes.object,
  flipped: PropTypes.bool,
  color: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(WaveBorder);
