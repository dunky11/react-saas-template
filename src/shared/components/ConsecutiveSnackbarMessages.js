import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Snackbar, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

function ConsecutiveSnackbars(props) {
  const { classes, getPushMessageFromChild } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState({});
  const queue = useRef([]);

  const processQueue = useCallback(() => {
    if (queue.current.length > 0) {
      setMessageInfo(queue.current.shift());
      setIsOpen(true);
    }
  }, [setMessageInfo, setIsOpen, queue]);

  const handleClose = useCallback((_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  }, [setIsOpen]);

  const pushMessage = useCallback(message => {
    queue.current.push({
      message,
      key: new Date().getTime(),
    });
    if (isOpen) {
      // immediately begin dismissing current message
      // to start showing new one
      setIsOpen(false);
    } else {
      processQueue();
    }
  }, [queue, isOpen, setIsOpen, processQueue]);

  useEffect(() => {
    getPushMessageFromChild(pushMessage);
  }, [getPushMessageFromChild, pushMessage]);

  return (
    <Snackbar
      disableWindowBlurListener
      key={messageInfo.key}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      onExited={processQueue}
      ContentProps={{
        classes: {
          root: classes.root,
        },
      }}
      message={
        <span>{messageInfo.message ? messageInfo.message.text : null}</span>
      }
    />
  );

}

ConsecutiveSnackbars.propTypes = {
  getPushMessageFromChild: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ConsecutiveSnackbars);
