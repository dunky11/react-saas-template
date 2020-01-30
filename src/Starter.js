import React, { PureComponent } from "react";

class Main extends PureComponent {
  state = {
    loggedIn: null,
    LoggedInComponent: null,
    LoggedOutComponent: null,
    fetchedLoginStatus: true
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
        import("./loggedIn/components/Main").then(Component => {
          this.setState({ LoggedInComponent: Component.default });
        });
      }
    } else if (!this.didFetchLoggedOutComponent) {
      this.didFetchLoggedOutComponent = true;
      import("./notLoggedIn/components/Main").then(Component => {
        this.setState({ LoggedOutComponent: Component.default });
      });
    }
  };

  printMainComponent = () => {
    const {
      LoggedInComponent,
      LoggedOutComponent,
      fetchedLoginStatus,
      loggedIn
    } = this.state;
    if (fetchedLoginStatus) {
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
    }
    return null;
  };

  render() {
    return (
      <div>
        {this.fetchComponents()}
        {this.printMainComponent()}
      </div>
    );
  }
}

export default Main;
