import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  dialogPaper: { maxWidth: `${theme.breakpoints.values.md}px !important` },
  dialogContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
});

function ImageCropperDialog(props) {
  const {
    ImageCropper,
    classes,
    onClose,
    open,
    src,
    onCrop,
    aspectRatio,
    theme,
  } = props;
  const [crop, setCrop] = useState(null);

  const getCropFunctionFromChild = useCallback(
    (cropFunction) => {
      setCrop(() => cropFunction);
    },
    [setCrop]
  );

  return (
    <Dialog
      open={open}
      onEscapeKeyDown={onClose}
      classes={{ paper: classes.dialogPaper }}
      style={{ overflowX: "visible" }}
    >
      <DialogContent className={classes.dialogContent}>
        <ImageCropper
          src={src}
          setCropFunction={getCropFunctionFromChild}
          onCrop={onCrop}
          aspectRatio={aspectRatio}
          color={theme.palette.primary.main}
        />
      </DialogContent>
      <DialogActions>
        <Box mr={1}>
          <Button onClick={onClose}>Close</Button>
        </Box>
        <Button variant="contained" color="secondary" onClick={crop}>
          Crop
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ImageCropperDialog.propTypes = {
  ImageCropper: PropTypes.elementType,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onCrop: PropTypes.func.isRequired,
  src: PropTypes.string,
  aspectRatio: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(ImageCropperDialog);
