import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Snackbar, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 0,
    paddingBottom: 0
  }
});

class ConsecutiveSnackbars extends PureComponent {
  queue = [];

  state = {
    open: false,
    messageInfo: {}
  };

  componentDidMount() {
    const { getPushMessageFromChild } = this.props;
    /**
     * Pass the function to parent, so it can use it.
     */
    getPushMessageFromChild(this.pushMessage);
  }

  pushMessage = message => {
    const { open } = this.state;
    this.queue.push({
      message,
      key: new Date().getTime()
    });
    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true
      });
    }
  };

  handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const { classes } = this.props;
    const { messageInfo, open } = this.state;
    return (
      <Snackbar
        disableWindowBlurListener
        key={messageInfo.key}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        onExited={this.handleExited}
        ContentProps={{
          classes: {
            root: classes.root
          }
        }}
        message={
          <span>{messageInfo.message ? messageInfo.message.text : null}</span>
        }
      />
    );
  }
}

ConsecutiveSnackbars.propTypes = {
  getPushMessageFromChild: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ConsecutiveSnackbars);
