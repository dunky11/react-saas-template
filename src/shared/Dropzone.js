import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Button } from "@material-ui/core";

const styles = theme => ({
  dropzoneAccept: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main
  },
  dropzoneReject: {
    color: theme.palette.error.dark,
    borderColor: theme.palette.error.dark
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});

function Dropzone(props) {
  const { onDrop, accept, fullHeight, children, classes, style } = props;
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: accept,
    onDrop: onDrop
  });
  return (
    <div {...getRootProps()} style={{ height: "100%" }}>
      <input {...getInputProps()} />
      <Button
        fullWidth
        className={classNames(
          fullHeight ? "h-100" : null,
          isDragAccept ? classes.dropzoneAccept : null,
          isDragReject ? classes.dropzoneReject : null,
          classes.button
        )}
        variant="outlined"
        color="primary"
        style={style}
      >
        {children}
      </Button>
    </div>
  );
}

Dropzone.propTypes = {
  classes: PropTypes.object,
  onDrop: PropTypes.func,
  accept: PropTypes.string,
  fullHeight: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export default withStyles(styles, { withTheme: true })(Dropzone);
