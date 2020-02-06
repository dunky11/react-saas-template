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
import { Redirect } from "react-router-dom";
import FormDialog from "../../../shared/FormDialog";
import HighlightedInformation from "../../../shared/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/ButtonCircularProgress";

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
  state = { loading: false, redirect: false };

  login = () => {
    const { setStatus } = this.props;
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
      this.setState({ redirect: true });
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
    const { loading, redirect } = this.state;
    return (
      <Fragment>
        {redirect && <Redirect to="/c/dashboard" />}
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
                onClick={loading ? null : openChangePasswordDialog}
              >
                Forgot Password?
              </Typography>
            </div>
          }
        />
      </Fragment>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginDialog);
