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
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = theme => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark
    },
    "&:enabled:focus": {
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
                    onClick={loading ? null : openTermsDialog}
                    tabIndex={0}
                    role="button"
                    onKeyDown={event => {
                      // For screenreaders listen to space and enter events
                      if (
                        (!loading && event.keyCode === 13) ||
                        event.keyCode === 32
                      ) {
                        openTermsDialog();
                      }
                    }}
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
            {status === "accountCreated" ? (
              <HighlightedInformation>
                We have created your account. Please click on the link in the
                email we have sent to you before logging in.
              </HighlightedInformation>
            ) : (
              <HighlightedInformation>
                Registration is disabled until we go live.
              </HighlightedInformation>
            )}
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
