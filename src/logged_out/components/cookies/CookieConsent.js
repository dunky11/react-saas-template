import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import {
  Snackbar,
  Button,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import fetchIpData from "./fetchIpData";

const styles = theme => ({
  snackbarContent: {
    borderBotttomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
});

/**
 * This component is the MUICookieConsent it pops a Snackbar or
 * a Dialog informing the user about cookie consent.
 */
class CookieConsent extends PureComponent {
  state = {
    visible: false
  };

  europeanCountryCodes = [
    "AT",
    "BE",
    "BG",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "HR",
    "HU",
    "IE",
    "IT",
    "LT",
    "LU",
    "LV",
    "MT",
    "NL",
    "PO",
    "PT",
    "RO",
    "SE",
    "SI",
    "SK"
  ];

  componentDidMount() {
    if (Cookies.get("remember-cookie-snackbar") === undefined) {
      this.openOnEuCountry();
    }
  }

  openOnEuCountry = () => {
    fetchIpData
      .then(data => {
        if (
          data &&
          data.country &&
          !this.europeanCountryCodes.includes(data.country)
        ) {
          this.setState({ visible: false });
        } else {
          this.setState({ visible: true });
        }
      })
      .catch(() => {
        this.setState({ visible: true });
      });
  };

  /**
   * Set a persistent cookie
   */
  onAccept = () => {
    Cookies.set("remember-cookie-snackbar", "", {
      expires: 365
    });
    this.setState({ visible: false });
  };

  render() {
    const { classes, handleCookieRulesDialogOpen } = this.props;
    return (
      <Snackbar
        className={classes.snackbarContent}
        open={this.state.visible}
        message={
          <Typography className="text-white">
            We use cookies to ensure you get the best experience on our website.{" "}
          </Typography>
        }
        action={
          <Fragment>
            <Box mr={1}>
              <Button color="primary" onClick={handleCookieRulesDialogOpen}>
                More details
              </Button>
            </Box>
            <Button color="primary" onClick={this.onAccept}>
              Got it!
            </Button>
          </Fragment>
        }
      />
    );
  }
}

CookieConsent.propTypes = {
  handleCookieRulesDialogOpen: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(CookieConsent);
