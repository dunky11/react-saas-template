import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { Box, withStyles } from "@material-ui/core";
import ColoredButton from "./ColoredButton";

const styles = {
  button: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullHeight: {
    height: "100%"
  }
};

function getColor(isDragAccept, isDragReject, theme) {
  if (isDragAccept) {
    return theme.palette.success.main;
  }
  if (isDragReject) {
    return theme.palette.error.dark;
  }
  return theme.palette.common.black;
}

function Dropzone(props) {
  const { onDrop, accept, fullHeight, children, classes, style, theme } = props;
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
    <Box {...getRootProps()} height="100%">
      <input {...getInputProps()} />
      <ColoredButton
        fullWidth
        className={classNames(
          fullHeight ? classes.fullHeight : null,
          classes.button
        )}
        variant="outlined"
        color={getColor(isDragAccept, isDragReject, theme)}
        style={style}
      >
        {children}
      </ColoredButton>
    </Box>
  );
}

Dropzone.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onDrop: PropTypes.func,
  accept: PropTypes.string,
  fullHeight: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export default withStyles(styles, { withTheme: true })(Dropzone);
