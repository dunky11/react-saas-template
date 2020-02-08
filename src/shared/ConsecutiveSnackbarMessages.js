import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Snackbar, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 0,
    paddingBottom: 0
  }
});

class ConsecutiveSnackbars extends PureComponent {
  /**
   * Messages get pushed from node server,
   */
  queue = [];

  state = {
    open: false,
    messageInfo: {}
  };

  componentDidMount() {
    const { getPushMessageFunctionFromChildComponent } = this.props;
    /**
     * Pass the function to parent, so it can use it.
     */
    getPushMessageFunctionFromChildComponent(this.pushSnackbar);
  }

  pushSnackbar = message => {
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

  getSnackbarIcon = () => {
    const { messageInfo } = this.state;
    const { message } = messageInfo;
    if (!message) {
      return;
    }
    if (message.isErrorMessage) {
      return <ErrorIcon className="mr-2" style={{ width: 24, height: 24 }} />;
    }
    if (message.avatarUrl) {
      return (
        <Avatar
          src={message.avatarUrl}
          className="mr-2"
          style={{ width: 24, height: 24 }}
        />
      );
    }
    /**
     * saved message
     */
    return null;
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
          <div className="d-flex align-items-center">
            {this.getSnackbarIcon()}
            <span>{messageInfo.message ? messageInfo.message.text : null}</span>
          </div>
        }
      />
    );
  }
}

ConsecutiveSnackbars.propTypes = {
  getPushMessageFunctionFromChildComponent: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ConsecutiveSnackbars);
