import React, { PureComponent, Fragment } from "react";

class Main extends PureComponent {
  state = {
    loggedIn: null,
    LoggedInComponent: null,
    LoggedOutComponent: null
  };

  setLoggedIn = () => {
    this.setState({ loggedIn: true });
  };

  setLoggedOut = () => {
    this.setState({ loggedIn: false });
  };

  fetchComponents = () => {
    const { loggedIn } = this.state;
    if (loggedIn) {
      if (!this.didFetchLoggedInComponent) {
        this.didFetchLoggedInComponent = true;
        import("./logged_in/components/Main").then(Component => {
          this.setState({ LoggedInComponent: Component.default });
        });
      }
    } else if (!this.didFetchLoggedOutComponent) {
      this.didFetchLoggedOutComponent = true;
      import("./logged_out/components/Main").then(Component => {
        this.setState({ LoggedOutComponent: Component.default });
      });
    }
  };

  printMainComponent = () => {
    const { LoggedInComponent, LoggedOutComponent, loggedIn } = this.state;
    if (loggedIn) {
      return (
        LoggedInComponent && (
          <LoggedInComponent setLoggedOut={this.setLoggedOut} />
        )
      );
    }
    return (
      LoggedOutComponent && (
        <LoggedOutComponent setLoggedIn={this.setLoggedIn} />
      )
    );
  };

  render() {
    return (
      <Fragment>
        {this.fetchComponents()}
        {this.printMainComponent()}
      </Fragment>
    );
  }
}

export default Main;
