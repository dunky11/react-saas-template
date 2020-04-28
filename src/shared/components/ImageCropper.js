import React, { useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Cropper from "react-cropper";
import { withStyles } from "@material-ui/core";
import shadeColor from "../functions/shadeColor";

const styles = {
  cropperWrapper: {
    "& img": {
      height: "auto",
      width: "100%",
      maxWidth: "100%",
    },
  },
  "@global": {
    ".cropper-container": {
      direction: "ltr",
      fontSize: "0",
      lineHeight: "0",
      position: "relative",
      M: "none",
      touchAction: "none",
      W: "none",
      fallbacks: [
        {
          M: "none",
        },
        {
          M: "none",
        },
      ],
      userSelect: "none",
    },
    ".cropper-container img": {
      display: "block",
      height: "100%",
      imageOrientation: "0deg",
      maxHeight: "none !important",
      maxWidth: "none !important",
      minHeight: "0 !important",
      minWidth: "0 !important",
      width: "100%",
    },
    ".cropper-wrap-box, .cropper-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-modal": {
      bottom: "0",
      left: "0",
      position: "absolute",
      right: "0",
      top: "0",
    },
    ".cropper-wrap-box, .cropper-canvas": {
      overflow: "hidden",
    },
    ".cropper-drag-box": {
      backgroundColor: "#fff",
      opacity: "0",
    },
    ".cropper-modal": {
      backgroundColor: "#000",
      opacity: "0.5",
    },
    ".cropper-view-box": {
      display: "block",
      height: "100%",
      outline: (props) => `1px solid ${props.color}`,
      outlineColor: (props) => `1px solid ${shadeColor(props.color, 0.75)}`,
      overflow: "hidden",
      width: "100%",
    },
    ".cropper-dashed": {
      border: "0 dashed #eee",
      display: "block",
      opacity: "0.5",
      position: "absolute",
    },
    ".cropper-dashed.dashed-h": {
      borderBottomWidth: 1,
      borderTopWidth: 1,
      height: "calc(100% / 3)",
      left: "0",
      top: "calc(100% / 3)",
      width: "100%",
    },
    ".cropper-dashed.dashed-v": {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      height: "100%",
      left: "calc(100% / 3)",
      top: "0",
      width: "calc(100% / 3)",
    },
    ".cropper-center": {
      display: "block",
      height: "0",
      left: "50%",
      opacity: "0.75",
      position: "absolute",
      top: "50%",
      width: "0",
    },
    ".cropper-center::before, .cropper-center::after": {
      backgroundColor: "#eee",
      content: "' '",
      display: "block",
      position: "absolute",
    },
    ".cropper-center::before": {
      height: 1,
      left: -3,
      top: "0",
      width: 7,
    },
    ".cropper-center::after": {
      height: 7,
      left: "0",
      top: -3,
      width: 1,
    },
    ".cropper-face, .cropper-line, .cropper-point": {
      display: "block",
      height: "100%",
      opacity: "0.1",
      position: "absolute",
      width: "100%",
    },
    ".cropper-face": {
      backgroundColor: "#fff",
      left: "0",
      top: "0",
    },
    ".cropper-line": {
      backgroundColor: (props) => props.color,
    },
    ".cropper-line.line-e": {
      cursor: "ew-resize",
      right: -3,
      top: "0",
      width: 5,
    },
    ".cropper-line.line-n": {
      cursor: "ns-resize",
      height: 5,
      left: "0",
      top: -3,
    },
    ".cropper-line.line-w": {
      cursor: "ew-resize",
      left: -3,
      top: "0",
      width: 5,
    },
    ".cropper-line.line-s": {
      bottom: -3,
      cursor: "ns-resize",
      height: 5,
      left: "0",
    },
    ".cropper-point": {
      backgroundColor: (props) => props.color,
      height: 5,
      opacity: "0.75",
      width: 5,
    },
    ".cropper-point.point-e": {
      cursor: "ew-resize",
      marginTop: -3,
      right: -3,
      top: "50%",
    },
    ".cropper-point.point-n": {
      cursor: "ns-resize",
      left: "50%",
      marginLeft: -3,
      top: -3,
    },
    ".cropper-point.point-w": {
      cursor: "ew-resize",
      left: -3,
      marginTop: -3,
      top: "50%",
    },
    ".cropper-point.point-s": {
      bottom: -3,
      cursor: "s-resize",
      left: "50%",
      marginLeft: -3,
    },
    ".cropper-point.point-ne": {
      cursor: "nesw-resize",
      right: -3,
      top: -3,
    },
    ".cropper-point.point-nw": {
      cursor: "nwse-resize",
      left: -3,
      top: -3,
    },
    ".cropper-point.point-sw": {
      bottom: -3,
      cursor: "nesw-resize",
      left: -3,
    },
    ".cropper-point.point-se": {
      bottom: -3,
      cursor: "nwse-resize",
      height: 20,
      opacity: "1",
      right: -3,
      width: 20,
    },
    "@media (min-width: 768px)": {
      ".cropper-point.point-se": {
        height: 15,
        width: 15,
      },
    },
    "@media (min-width: 992px)": {
      ".cropper-point.point-se": {
        height: 10,
        width: 10,
      },
    },
    "@media (min-width: 1200px)": {
      ".cropper-point.point-se": {
        height: 5,
        opacity: "0.75",
        width: 5,
      },
    },
    ".cropper-point.point-se::before": {
      backgroundColor: (props) => props.color,
      bottom: "-50%",
      content: "' '",
      display: "block",
      height: "200%",
      opacity: "0",
      position: "absolute",
      right: "-50%",
      width: "200%",
    },
    ".cropper-invisible": {
      opacity: "0",
    },
    ".cropper-bg": {
      backgroundImage:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC')",
    },
    ".cropper-hide": {
      display: "block",
      height: "0",
      position: "absolute",
      width: "0",
    },
    ".cropper-hidden": {
      display: "none !important",
    },
    ".cropper-move": {
      cursor: "move",
    },
    ".cropper-crop": {
      cursor: "crosshair",
    },
    ".cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point": {
      cursor: "not-allowed",
    },
  },
};

function ImageCropper(props) {
  const { onCrop, classes, src, aspectRatio, setCropFunction } = props;
  const cropper = useRef();

  const crop = useCallback(() => {
    onCrop(cropper.current.getCroppedCanvas().toDataURL());
  }, [onCrop, cropper]);

  useEffect(() => {
    setCropFunction(crop);
  }, [setCropFunction, crop]);

  return (
    <div className={classes.cropperWrapper}>
      <Cropper
        ref={cropper}
        src={src}
        guides={false}
        zoomable={false}
        viewMode={3}
        aspectRatio={aspectRatio}
        cropmove={
          aspectRatio
            ? null
            : () => {
                const cropBoxData = cropper.current.getCropBoxData();
                const cropBoxWidth = cropBoxData.width;
                const aspRatio = cropBoxWidth / cropBoxData.height;
                if (aspRatio < 1) {
                  cropper.current.setCropBoxData({
                    height: cropBoxWidth / 1,
                  });
                } else if (aspRatio > 16 / 9) {
                  cropper.current.setCropBoxData({
                    height: cropBoxWidth / (16 / 9),
                  });
                }
              }
        }
      />
    </div>
  );
}

ImageCropper.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  src: PropTypes.string,
  onCrop: PropTypes.func,
  setCropFunction: PropTypes.func,
  aspectRatio: PropTypes.number,
};

export default withStyles(styles)(ImageCropper);
