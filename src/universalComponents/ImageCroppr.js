import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { withStyles } from "@material-ui/core/styles";


const styles = {
  cropperWrapper: {
    "& img": {
      height: "auto",
      width: "100%",
      maxWidth: "100%"
    }
  }
};

class ImageCroppr extends PureComponent {
  componentDidMount() {
    const { setCropFunction } = this.props;
    setCropFunction(this.crop);
  }

  crop = () => {
    const { onCrop } = this.props;
    onCrop(this.cropper.getCroppedCanvas().toDataURL());
  };

  render() {
    const { classes, src, aspectRatio } = this.props;
    return (
      <div className={classes.cropperWrapper}>
        <Cropper
          ref={element => {
            this.cropper = element;
          }}
          src={src}
          // Cropper.js options
          guides={false}
          zoomable={false}
          viewMode={3}
          aspectRatio={aspectRatio}
          cropmove={
            /**
             * If a fixed aspect ratio is set(Story) we will use it,
             * otherwise (Picture) we will use this function to get a picture
             * between 1:1 and 16/9 (still have to find out).
             */
            aspectRatio
              ? null
              : () => {
                  const cropBoxData = this.cropper.getCropBoxData();
                  const cropBoxWidth = cropBoxData.width;
                  const aspRatio = cropBoxWidth / cropBoxData.height;
                  if (aspRatio < 1) {
                    this.cropper.setCropBoxData({
                      height: cropBoxWidth / 1
                    });
                  } else if (aspRatio > 16 / 9) {
                    this.cropper.setCropBoxData({
                      height: cropBoxWidth / (16 / 9)
                    });
                  }
                }
          }
        />
      </div>
    );
  }
}

ImageCroppr.propTypes = {
  classes: PropTypes.object,
  src: PropTypes.string,
  onCrop: PropTypes.func,
  setCropFunction: PropTypes.func,
  aspectRatio: PropTypes.number
};

export default withStyles(styles)(ImageCroppr);
