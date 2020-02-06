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
import { withRouter } from "react-router-dom";
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
  state = { loading: false };

  login = () => {
    const { setLoggedIn, setLastEmail, setStatus, history } = this.props;
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
      history.push("/dashboard");
      setLoggedIn();
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
  setStatus: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(LoginDialog));
