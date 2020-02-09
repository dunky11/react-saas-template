import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import classNames from "classnames";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import HoverTypo from "../../../shared/HoverTypo";
import WaveBorder from "../../../shared/WaveBorder";

const styles = theme => ({
  footerWrapper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  bgPrimaryDark: {
    backgroundColor: theme.palette.common.darkBlack
  },
  footerBottom: {
    backgroundColor: "#171a1c",
    /**
     * This will fix a pixel bug at the border on mobile
     */
    marginTop: -2
  },
  socialIcon: {
    border: `1px solid ${theme.palette.common.white}`
  },
  socialSVG: {
    width: "1em",
    height: "1em",
    fill: theme.palette.common.white
  },
  footer: {
    backgroundColor: "#FFFFFF"
  }
});

function Footer(props) {
  const {
    classes,
    theme,
    width,
    openLoginDialog,
    openRegisterDialog,
    handleCookieRulesDialogOpen
  } = props;
  return (
    <footer className={classNames(classes.footer, "lg-p-top")}>
      <WaveBorder flipped color={theme.palette.common.darkBlack} />
      <div className={classes.bgPrimaryDark}>
        <div
          className={classNames(
            "container align-items-center d-flex flex-column",
            classes.footerWrapper
          )}
        >
          <div className="d-flex">
            <HoverTypo
              text="Login"
              className="mx-1"
              color="#FFFFFF"
              variant={isWidthDown("xs", width) ? "body1" : "h6"}
              onClick={openLoginDialog}
            />
            <HoverTypo
              text="Register"
              className="mx-1"
              color="#FFFFFF"
              variant={isWidthDown("xs", width) ? "body1" : "h6"}
              onClick={openRegisterDialog}
            />
            <HoverTypo
              text="Impressum"
              className="mx-1"
              color="#FFFFFF"
              variant={isWidthDown("xs", width) ? "body1" : "h6"}
            />
            <HoverTypo
              text="Cookies"
              className="mx-1"
              color="#FFFFFF"
              variant={isWidthDown("xs", width) ? "body1" : "h6"}
              onClick={handleCookieRulesDialogOpen}
            />
          </div>
          <div className="d-flex mt-2">
            <IconButton
              className={classNames(classes.socialIcon, "mx-2")}
              href="https://google.com"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.socialSVG}
              >
                <title>Google icon</title>
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
            </IconButton>
            <IconButton
              className={classNames(classes.socialIcon, "mx-2")}
              href="https://twitter.com"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.socialSVG}
              >
                <title>Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </IconButton>
            <IconButton
              className={classNames(classes.socialIcon, "mx-2")}
              href="https://youtube.com"
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={classes.socialSVG}
              >
                <title>YouTube icon</title>
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classNames(classes.footerBottom, "py-2")}>
        <Typography className="text-white" align="center" variant="body1">
          © 2020 <b>yourwebsite.com</b>. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  width: PropTypes.string,
  theme: PropTypes.object,
  classes: PropTypes.object,
  openLoginDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  handleCookieRulesDialogOpen: PropTypes.func.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
