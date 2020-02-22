import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
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
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark
    }
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled
  },
  formControlLabel: {
    marginRight: 0
  }
});

class LoginDialog extends PureComponent {
  state = { loading: false };

  login = () => {
    const { setStatus, history } = this.props;
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
      setTimeout(() => {
        history.push("/c/dashboard");
      }, 150);
    }
  };

  render() {
    const {
      classes,
      onClose,
      openChangePasswordDialog,
      status,
      setStatus
    } = this.props;
    const { loading } = this.state;
    return (
      <Fragment>
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
                className={classes.formControlLabel}
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
              {status === "verificationEmailSend" ? (
                <HighlightedInformation>
                  We have send instructions on how to reset your password to
                  your email address
                </HighlightedInformation>
              ) : (
                <HighlightedInformation>
                  Email is: <b>test@web.com</b>
                  <br />
                  Password is: <b>test</b>
                </HighlightedInformation>
              )}
            </Fragment>
          }
          actions={
            <Fragment>
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
                onClick={loading ? null : openChangePasswordDialog}
                tabIndex={0}
                role="button"
                onKeyDown={event => {
                  // For screenreaders listen to space and enter events
                  if (
                    (!loading && event.keyCode === 13) ||
                    event.keyCode === 32
                  ) {
                    openChangePasswordDialog();
                  }
                }}
              >
                Forgot Password?
              </Typography>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string
};

export default withRouter(withStyles(styles)(LoginDialog));
