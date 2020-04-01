import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Portal, Backdrop, withStyles } from "@material-ui/core";
import ScrollbarSize from "@material-ui/core/Tabs/ScrollbarSize";

const styles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.modal,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  portalImgWrapper: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: theme.zIndex.modal,
    cursor: "pointer"
  },
  portalImgInnerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  portalImg: {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function ZoomImage(props) {
  const { alt, src, zoomedImgProps, classes, ...rest } = props;
  const [zoomedIn, setZoomedIn] = useState(false);
  const [scrollbarSize, setScrollbarSize] = useState(null);

  const zoomIn = useCallback(() => {
    setZoomedIn(true);
  }, [setZoomedIn]);

  const zoomOut = useCallback(() => {
    setZoomedIn(false);
  }, [setZoomedIn]);

  useEffect(() => {
    if (zoomedIn) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarSize}px`;
      document.querySelector(
        "header"
      ).style.paddingRight = `${scrollbarSize}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      document.querySelector("header").style.paddingRight = "0px";
    }
  }, [zoomedIn, scrollbarSize]);

  return (
    <Fragment>
      <ScrollbarSize onChange={setScrollbarSize}></ScrollbarSize>
      <Backdrop
        open={zoomedIn}
        className={classes.backdrop}
        onClick={zoomOut}
      ></Backdrop>
      {zoomedIn && (
        <Portal>
          <div onClick={zoomOut} className={classes.portalImgWrapper}>
            <div className={classes.portalImgInnerWrapper}>
              <img
                alt={alt}
                src={src}
                className={classes.portalImg}
                {...zoomedImgProps}
              ></img>
            </div>
          </div>
        </Portal>
      )}
      <img
        alt={alt}
        src={src}
        onClick={zoomIn}
        style={{ cursor: "pointer" }}
        {...rest}
      ></img>
    </Fragment>
  );
}

ZoomImage.propTypes = {
  classes: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  zoomedImgProps: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(ZoomImage);
