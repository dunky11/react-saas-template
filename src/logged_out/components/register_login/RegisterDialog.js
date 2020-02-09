import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles
} from "@material-ui/core";
import FormDialog from "../../../shared/FormDialog";
import HighlightedInformation from "../../../shared/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/ButtonCircularProgress";

const styles = theme => ({
  link: {
    transition: `background-color ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.complex}ms`,
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
});

class RegisterDialog extends PureComponent {
  state = { loading: false, termsOfServiceError: false };

  register = () => {
    const { setStatus } = this.props;
    if (!this.registerTermsCheckbox.checked) {
      this.setState({ termsOfServiceError: true });
      return;
    }
    if (this.registerPassword.value !== this.registerPasswordRepeat.value) {
      setStatus("passwordsDontMatch");
      return;
    }
    setStatus(null);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  };

  printStatus = () => {
    const { status } = this.props;
    switch (status) {
      case null:
        return;
      case "acceptTerms":
        return;
      case "passwordsDontMatch":
        return;
      case "passwordTooShort":
        return;
      case "invalidEmail":
        return;
      case "accountCreated":
        return (
          <HighlightedInformation>
            We have created your account. Please click on the link in the email
            we have sent to you before logging in.
          </HighlightedInformation>
        );
      case "invalidPassword":
        return (
          <HighlightedInformation>
            Please choose another password.
          </HighlightedInformation>
        );
      case "unknownError":
        return (
          <HighlightedInformation>
            An unknown error occurred.
          </HighlightedInformation>
        );
      default:
        throw new Error("No branch selected in switch statement");
    }
  };

  render() {
    const {
      theme,
      onClose,
      openTermsDialog,
      setStatus,
      status,
      classes
    } = this.props;
    const { loading, termsOfServiceError } = this.state;
    return (
      <FormDialog
        loading={loading}
        onClose={onClose}
        open
        headline="Register"
        onFormSubmit={e => {
          e.preventDefault();
          this.register();
        }}
        hideBackdrop
        hasCloseIcon
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidEmail"}
              label="Email Address"
              inputRef={node => {
                this.registerEmail = node;
              }}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
              }}
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
              label="Password"
              type="password"
              inputRef={node => {
                this.registerPassword = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                ) {
                  setStatus(null);
                }
              }}
              helperText={(() => {
                if (status === "passwordTooShort") {
                  return "Create a password at least 6 characters long.";
                }
                if (status === "passwordsDontMatch") {
                  return "Your passwords dont match.";
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
              label="Repeat Password"
              type="password"
              inputRef={node => {
                this.registerPasswordRepeat = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                ) {
                  setStatus(null);
                }
              }}
              helperText={(() => {
                if (status === "passwordTooShort") {
                  return "Create a password at least 6 characters long.";
                }
                if (status === "passwordsDontMatch") {
                  return "Your passwords dont match.";
                }
              })()}
              FormHelperTextProps={{ error: true }}
            />
            <FormControlLabel
              style={{ marginRight: 0 }}
              control={
                <Checkbox
                  color="primary"
                  inputRef={node => {
                    this.registerTermsCheckbox = node;
                  }}
                  onChange={() => {
                    this.setState({ termsOfServiceError: false });
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  I agree to the
                  <span
                    className={classes.link}
                    onClick={openTermsDialog}
                    onKeyUp={openTermsDialog}
                    role="button"
                    tabIndex={-1}
                  >
                    {" "}
                    terms of service
                  </span>
                </Typography>
              }
            />
            {termsOfServiceError && (
              <FormHelperText
                error
                style={{
                  display: "block",
                  marginTop: theme.spacing(-1)
                }}
              >
                In order to create an account, you have to accept our terms of
                service.
              </FormHelperText>
            )}

            <HighlightedInformation>
              Registration is disabled until we go live.
            </HighlightedInformation>
            {this.printStatus()}
          </Fragment>
        }
        actions={
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            disabled={loading}
          >
            Register
            {loading && <ButtonCircularProgress />}
          </Button>
        }
      />
    );
  }
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);
