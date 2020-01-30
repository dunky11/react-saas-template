import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FormDialog from "../../../universalComponents/FormDialog";
import HighlightedInformation from "../../../universalComponents/HighlightedInformation";
import ButtonCircularProgress from "../../../universalComponents/ButtonCircularProgress";

const styles = theme => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark,
    cursor: "pointer"
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled
  }
});

class LoginDialog extends PureComponent {
  state = { loading: false };

  login = () => {
    const { setLoggedIn, setLastEmail, setStatus } = this.props;
    const email = this.loginEmail.value;
    setLastEmail(email);
    this.setState({
      loading: true
    });
    setStatus(null);
    if (this.loginEmail.value !== "test@web.com") {
      setTimeout(() => {
        setStatus("invalidEmail");
        this.setState({
          loading: false
        });
      }, 1500);
    } else if (this.loginPassword.value !== "test") {
      setTimeout(() => {
        setStatus("invalidPassword");
        this.setState({
          loading: false
        });
      }, 1500);
    } else {
      setLoggedIn();
    }
  };

  printStatus = () => {
    const { status } = this.props;
    switch (status) {
      case null:
        return;
      case "invalidEmail":
        return;
      case "invalidPassword":
        return;
      case "passwordChanged":
        return (
          <HighlightedInformation>
            We have changed your password. You can now log in using your new
            password.
          </HighlightedInformation>
        );
      case "passwordEmailSend":
        return (
          <HighlightedInformation>
            We have send you an email containing instructions on how the reset
            your password.
          </HighlightedInformation>
        );
      case "emailNotVerified":
        return (
          <HighlightedInformation>
            Please verify your email address by clicking on the link in the
            email we send to you. If you haven&apos;t received one you can{" "}
            <span className="link" role="button" tabIndex={-1}>
              click here
            </span>{" "}
            to get another one.
          </HighlightedInformation>
        );
      case "tokenExpired":
        return (
          <HighlightedInformation>
            The link to activate your account has expired.{" "}
            <span className="link" role="button" tabIndex={-1}>
              Click here
            </span>{" "}
            and we will send you a new one.
          </HighlightedInformation>
        );
      case "newEmailVerificationEmailSend":
        return (
          <HighlightedInformation>
            We have sent you a new email to verify your account.
          </HighlightedInformation>
        );
      case "accountActivated":
        return (
          <HighlightedInformation>
            Your email-address has been verified, you can now log in.
          </HighlightedInformation>
        );
      case "invalidActivateAccountSelectorToken":
        return (
          <HighlightedInformation>
            There is something wrong with your link. Please try clicking on the
            button in the email we have sent to you again, or{" "}
            <span className="link" role="button" tabIndex={-1}>
              click here
            </span>{" "}
            to request a new one.
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
      classes,
      onClose,
      openSendPasswordEmailDialog,
      status,
      setStatus
    } = this.props;
    const { loading } = this.state;
    return (
      <FormDialog
        open
        onClose={onClose}
        loading={loading}
        onFormSubmit={e => {
          e.preventDefault();
          this.login();
        }}
        hideBackdrop
        headline="Login"
        hasCloseIcon
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidEmail"}
              required
              fullWidth
              label="Email Address"
              inputRef={node => {
                this.loginEmail = node;
              }}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidEmail" &&
                "This email address isn't associated with an account."
              }
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidPassword"}
              label="Password"
              type="password"
              inputRef={node => {
                this.loginPassword = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidPassword" ? (
                  <span>
                    Incorrect password. Try again, or click on{" "}
                    <b>&quot;Forgot Password?&quot;</b> to reset it.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
            />
            <FormControlLabel
              className="mr-0"
              control={
                <Checkbox
                  inputRef={node => {
                    this.loginRememberMe = node;
                  }}
                  color="primary"
                />
              }
              label={<Typography variant="body1">Remember me</Typography>}
            />
            <HighlightedInformation>
              Email is: <b>test@web.com</b>
              <br />
              Password is: <b>test</b>
            </HighlightedInformation>
            {this.printStatus()}
          </Fragment>
        }
        actions={
          <div className="d-flex flex-column">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={loading}
              size="large"
            >
              Login
              {loading && <ButtonCircularProgress />}
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                loading ? classes.disabledText : null
              )}
              color="primary"
              onClick={loading ? null : openSendPasswordEmailDialog}
            >
              Forgot Password?
            </Typography>
          </div>
        }
      />
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  setLastEmail: PropTypes.func.isRequired,
  openSendPasswordEmailDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginDialog);
