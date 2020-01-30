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

class SendNewVerificationEmailDialog extends PureComponent {
  state = { loading: false, status: null };

  sendNewVerificationEmail = () => {
    const { onClose } = this.props;
    this.setState({ loading: true, status: null });
    setTimeout(() => {
      this.setState({ loading: false });
      onClose();
    }, 1500);
  };

  resetInvalidEmailError = () => {
    const { status } = this.state;
    if (status === "invalidEmail") {
      this.setState({ status: null });
    }
  };

  render() {
    const { loading, status } = this.state;
    const { onClose } = this.props;
    return (
      <Dialog
        open
        hideBackdrop
        onClose={onClose}
        disableBackdropClick={loading}
        disableEscapeKeyDown={loading}
        maxWidth="xs"
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            this.sendNewVerificationEmail();
          }}
        >
          <DialogContent className="pt-2">
            <DialogContentText>
              Enter your email address below and we will send you a new
              verification email.
            </DialogContentText>
            <TextField
              variant="outlined"
              error={status === "invalidEmail"}
              margin="dense"
              required
              fullWidth
              label="Email Address"
              autoFocus
              type="email"
              autoComplete="off"
              onChange={this.resetInvalidEmailError}
              helperText={
                status === "invalidEmail"
                  ? "This email address isn't associated with an account or is already verified."
                  : null
              }
              inputRef={node => {
                this.emailInput = node;
              }}
              FormHelperTextProps={{ error: true }}
            />
            {status === "unknownError" && (
              <HighlightedInformation className="mt-2">
                An unknown error occurred, please try again.
              </HighlightedInformation>
            )}
          </DialogContent>
          <DialogActions className="py-2 pr-2">
            <Button onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={loading}
            >
              Send email
              {loading && <ButtonCircularProgress />}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

SendNewVerificationEmailDialog.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default SendNewVerificationEmailDialog;
