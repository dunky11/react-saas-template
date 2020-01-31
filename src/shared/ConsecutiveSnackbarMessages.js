import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Snackbar, Avatar } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

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

  handleClose = (event, reason) => {
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
            root: "bg-primary-main pt-0 pb-0"
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
  getPushMessageFunctionFromChildComponent: PropTypes.func
};

export default ConsecutiveSnackbars;
