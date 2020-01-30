import React from "react";
import PropTypes from "prop-types";
import { Backdrop } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  backdrop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1200,
    position: "fixed",
    touchAction: "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};

function ModalBackdrop(props) {
  const { classes, open } = props;
  return <Backdrop open={open} className={classes.backdrop} />;
}

ModalBackdrop.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ModalBackdrop);
