import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import RegisterDialog from "./RegisterDialog";
import TermsOfServiceDialog from "./TermsOfServiceDialog";
import LoginDialog from "./LoginDialog";
import ModalBackdrop from "../../../shared/ModalBackdrop";
import SendPasswordEmailDialog from "./SendPasswordEmailDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";
import SendNewVerificationEmailDialog from "./SendNewVerificationEmailDialog";

class DialogSelector extends PureComponent {
  state = {
    lastEmail: null,
    loginStatus: null,
    registerStatus: null,
    newPasswordEmail: null
  };

  componentDidMount() {
    const { openChangePasswordDialog } = this.props;
    const url = window.location.href;
    if (
      url.includes("resetpassword") &&
      url.includes("selector") &&
      url.includes("token")
    ) {
      openChangePasswordDialog();
    }
  }

  setNewPasswordEmail = newPasswordEmail => {
    this.setState({ newPasswordEmail });
  };

  setRegisterStatus = registerStatus => {
    this.setState({ registerStatus });
  };

  setLoginStatus = loginStatus => {
    this.setState({ loginStatus });
  };

  setLastEmail = lastEmail => {
    this.setState({ lastEmail });
  };

  onClose = () => {
    const { onClose } = this.props;
    this.setState({ loginStatus: null, registerStatus: null });
    onClose();
  };

  openSendPasswordEmailDialog = (mode = false) => {
    const { openSendPasswordEmailDialog } = this.props;
    const { lastEmail } = this.state;
    this.setState({
      registerStatus: null,
      loginStatus: null,
      // We have to define a specific mode here, because if we
      // check for true, an event is often passed by the onClick function
      // and the event is thruthy
      newPasswordEmail: mode === "useLastEmail" ? lastEmail : null
    });
    openSendPasswordEmailDialog();
  };

  printDialog = () => {
    const {
      dialogOpen,
      openTermsDialog,
      openRegisterDialog,
      openLoginDialog,
      setLoggedIn,
      openSendNewVerificationEmailDialog
    } = this.props;
    const {
      lastEmail,
      loginStatus,
      registerStatus,
      newPasswordEmail
    } = this.state;
    switch (dialogOpen) {
      case "register":
        return (
          <RegisterDialog
            onClose={this.onClose}
            openTermsDialog={openTermsDialog}
            setLastEmail={this.setLastEmail}
            status={registerStatus}
            setStatus={this.setRegisterStatus}
            openSendPasswordEmailDialog={this.openSendPasswordEmailDialog}
          />
        );
      case "termsOfService":
        return <TermsOfServiceDialog onClose={openRegisterDialog} />;
      case "login":
        return (
          <LoginDialog
            onClose={this.onClose}
            setLoggedIn={setLoggedIn}
            lastEmail={lastEmail}
            setLastEmail={this.setLastEmail}
            openSendPasswordEmailDialog={this.openSendPasswordEmailDialog}
            status={loginStatus}
            setStatus={this.setLoginStatus}
            openSendNewVerificationEmailDialog={
              openSendNewVerificationEmailDialog
            }
          />
        );
      case "sendPasswordEmail":
        return (
          <SendPasswordEmailDialog
            setLoginStatus={this.setLoginStatus}
            onClose={openLoginDialog}
            lastEmail={lastEmail}
            setLastEmail={this.setLastEmail}
            setNewPasswordEmail={this.setNewPasswordEmail}
            newPasswordEmail={newPasswordEmail}
          />
        );
      case "changePassword":
        return (
          <ChangePasswordDialog
            onClose={openLoginDialog}
            setLoginStatus={this.setLoginStatus}
            openSendPasswordEmailDialog={this.openSendPasswordEmailDialog}
          />
        );
      case "sendNewVerificationEmail":
        return (
          <SendNewVerificationEmailDialog
            onClose={openLoginDialog}
            setLoginStatus={this.setLoginStatus}
          />
        );
      default:
    }
  };

  render() {
    const { dialogOpen } = this.props;
    return (
      <Fragment>
        {dialogOpen && <ModalBackdrop open />}
        {this.printDialog()}
      </Fragment>
    );
  }
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  openLoginDialog: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openSendPasswordEmailDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  openSendNewVerificationEmailDialog: PropTypes.func.isRequired
};

export default DialogSelector;
