import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import {
  Snackbar,
  Button,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import fetchIpData from "./fetchIpData";

const styles = (theme) => ({
  snackbarContent: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
});

const europeanCountryCodes = [
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
  "SK",
];

function CookieConsent(props) {
  const { classes, handleCookieRulesDialogOpen } = props;
  const [isVisible, setIsVisible] = useState(false);

  const openOnEuCountry = useCallback(() => {
    fetchIpData
      .then((data) => {
        if (
          data &&
          data.country &&
          !europeanCountryCodes.includes(data.country)
        ) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      })
      .catch(() => {
        setIsVisible(true);
      });
  }, [setIsVisible]);

  /**
   * Set a persistent cookie
   */
  const onAccept = useCallback(() => {
    Cookies.set("remember-cookie-snackbar", "", {
      expires: 365,
    });
    setIsVisible(false);
  }, [setIsVisible]);

  useEffect(() => {
    if (Cookies.get("remember-cookie-snackbar") === undefined) {
      openOnEuCountry();
    }
  }, [openOnEuCountry]);

  return (
    <Snackbar
      className={classes.snackbarContent}
      open={isVisible}
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
          <Button color="primary" onClick={onAccept}>
            Got it!
          </Button>
        </Fragment>
      }
    />
  );
}

CookieConsent.propTypes = {
  handleCookieRulesDialogOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(CookieConsent);
