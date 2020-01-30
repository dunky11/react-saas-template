import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import ButtonCircularProgress from "../../../universalComponents/ButtonCircularProgress";
import HighlightedInformation from "../../../universalComponents/HighlightedInformation";
import FormDialog from "../../../universalComponents/FormDialog";

class ChangePasswordDialog extends PureComponent {
  state = { loading: false, status: null };

  setNewPassword = () => {
    const { onClose } = this.props;
    this.setState({
      loading: true,
      status: null
    });
    const password = this.newPasswordPassword.value;
    if (password !== this.newPasswordPasswordRepeat.value) {
      this.setState({
        status: "passwordsDontMatch",
        loading: false
      });
      return;
    }
    setTimeout(() => {
      this.setState({ loading: false });
      onClose();
    }, 1500);
  };

  printStatus = () => {
    const { openSendPasswordEmailDialog } = this.props;
    const { status } = this.state;
    switch (status) {
      case "linkError":
        return (
          <HighlightedInformation className="mt-2">
            There was an error with your link. Please click on the link in the
            email we have sent to you again, or{" "}
            <span
              onClick={openSendPasswordEmailDialog}
              className="link"
              onKeyUp={openSendPasswordEmailDialog}
              role="button"
              tabIndex={-1}
            >
              click here
            </span>{" "}
            to request a new email.
          </HighlightedInformation>
        );
      case "linkExpired":
        return (
          <HighlightedInformation className="mt-2">
            Your password reset link has expired. Please{" "}
            <span
              onClick={openSendPasswordEmailDialog}
              className="link"
              onKeyUp={openSendPasswordEmailDialog}
              role="button"
              tabIndex={-1}
            >
              click here
            </span>{" "}
            to request a new email.
          </HighlightedInformation>
        );
      case "unknownError":
        return (
          <HighlightedInformation className="mt-2">
            An unknown error occurred.
          </HighlightedInformation>
        );
      default:
    }
  };

  render() {
    const { onClose } = this.props;
    const { loading, status } = this.state;
    return (
      <FormDialog
        open
        hideBackdrop
        loading={loading}
        onClose={onClose}
        headline="Change Password"
        onFormSubmit={e => {
          e.preventDefault();
          this.setNewPassword();
        }}
        hasCloseIcon
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={
                status === "passwordTooShort" || status === "passwordsDontMatch"
              }
              label="Your new password"
              inputRef={node => {
                this.newPasswordPassword = node;
              }}
              autoFocus
              autoComplete="off"
              type="password"
              onChange={() => {
                if (
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                ) {
                  this.setState({ status: null });
                }
              }}
              helperText={(() => {
                if (status === "passwordTooShort") {
                  return "Create a password at least 6 characters long.";
                }
                if (status === "passwordsDontMatch") {
                  return "The passwords dont match.";
                }
                return null;
              })()}
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={
                status === "passwordTooShort" || status === "passwordsDontMatch"
              }
              label="Repeat new password"
              type="password"
              inputRef={node => {
                this.newPasswordPasswordRepeat = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                ) {
                  this.setState({ status: null });
                }
              }}
              FormHelperTextProps={{ error: true }}
              helperText={(() => {
                if (status === "passwordTooShort") {
                  return "Create a password at least 6 characters long.";
                }
                if (status === "passwordsDontMatch") {
                  return "The passwords dont match.";
                }
                return null;
              })()}
            />
            {this.printStatus()}
          </Fragment>
        }
        actions={
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            disabled={loading}
            size="large"
            className="mt-2"
          >
            Change Password
            {loading && <ButtonCircularProgress />}
          </Button>
        }
      />
    );
  }
}

ChangePasswordDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  openSendPasswordEmailDialog: PropTypes.func.isRequired
};

export default ChangePasswordDialog;
