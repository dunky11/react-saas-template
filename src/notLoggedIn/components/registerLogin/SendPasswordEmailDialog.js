import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import ButtonCircularProgress from "../../../universalComponents/ButtonCircularProgress";
import HighlightedInformation from "../../../universalComponents/HighlightedInformation";

class SendPasswordEmailDialog extends PureComponent {
  state = { loading: false, status: null };

  onEmailChange = event => {
    const { status, setNewPasswordEmail } = this.state;
    if (status === "invalidEmail") {
      this.setState({ status: null });
    }
    setNewPasswordEmail(event.target.value);
  };

  sendPasswordEmail = () => {
    const { setLastEmail, newPasswordEmail } = this.props;
    this.setState({
      loading: true
    });
    setLastEmail(newPasswordEmail);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  };

  sendNewVerificationEmail = () => {
    const { setLoginStatus } = this.props;
    this.setState({ loading: true });
    setTimeout(() => {
      setLoginStatus("newEmailVerificationEmailSend");
      this.setState({ loading: false });
      this.onClose();
    }, 1500);
  };

  printStatus = () => {
    const { status } = this.state;
    switch (status) {
      case "emailNotVerified":
        return (
          <HighlightedInformation className="mt-2">
            We cannot change your password because your email address is not
            verified. Please verify your email address by clicking on the link
            in the email we send to you. If you haven&apos;t received one you
            can{" "}
            <span
              onClick={this.sendNewVerificationEmail}
              className="link"
              onKeyUp={this.sendNewVerificationEmail}
              role="button"
              tabIndex={-1}
            >
              click here
            </span>{" "}
            to get another one.
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

  onClose = () => {
    const { setNewPasswordEmail, onClose } = this.props;
    setNewPasswordEmail(null);
    onClose();
  };

  render() {
    const { newPasswordEmail, setNewPasswordEmail } = this.props;
    const { loading, status } = this.state;
    return (
      <Dialog
        open
        hideBackdrop
        onClose={this.onClose}
        disableBackdropClick={loading}
        disableEscapeKeyDown={loading}
        maxWidth="xs"
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            this.sendPasswordEmail();
          }}
        >
          <DialogContent className="pt-2">
            <DialogContentText>
              Enter your email address below and we will send you instructions
              on how to reset your password.
            </DialogContentText>
            <TextField
              variant="outlined"
              error={status === "invalidEmail"}
              margin="dense"
              required
              // Value on input should not be null
              value={newPasswordEmail ? newPasswordEmail : ""}
              fullWidth
              label="Email Address"
              autoFocus
              type="email"
              autoComplete="off"
              onChange={event => {
                if (status === "invalidEmail") {
                  this.setState({ status: null });
                }
                setNewPasswordEmail(event.target.value);
              }}
              helperText={
                status === "invalidEmail"
                  ? "This email address isn't associated with an account."
                  : null
              }
              FormHelperTextProps={{ error: true }}
            />
            {this.printStatus()}
          </DialogContent>
          <DialogActions className="py-2 pr-2">
            <Button onClick={this.onClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={loading}
            >
              Reset password
              {loading && <ButtonCircularProgress />}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

SendPasswordEmailDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  setLoginStatus: PropTypes.func.isRequired,
  setLastEmail: PropTypes.func.isRequired,
  newPasswordEmail: PropTypes.string,
  setNewPasswordEmail: PropTypes.func.isRequired
};

export default SendPasswordEmailDialog;
