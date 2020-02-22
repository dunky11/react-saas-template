import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  dialog: {
    zIndex: 1400
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>Our Cookie Policy</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          What Are Cookies
        </Typography>
        <Typography paragraph>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or
          &apos;break&apos; certain elements of the sites functionality. For
          more general information on cookies see the Wikipedia article on HTTP
          Cookies.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          How We Use Cookies
        </Typography>
        <Typography paragraph>
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Disabling Cookies
        </Typography>
        <Typography paragraph>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          The Cookies We Set
        </Typography>
        <Typography paragraph>Account related cookies:</Typography>
        <Typography paragraph>
          If you create an account with us then we will use cookies for the
          management of the signup process and general administration. These
          cookies will usually be deleted when you log out however in some cases
          they may remain afterwards to remember your site preferences when
          logged out. We use cookies to remember that you accepted this message.
        </Typography>
        <Typography paragraph>Login related cookies:</Typography>
        <Typography paragraph>
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </Typography>
        <Typography paragraph>Site preferences cookies:</Typography>
        <Typography paragraph>
          In order to provide you with a great experience on this site we
          provide the functionality to set your preferences for how this site
          runs when you use it. In order to remember your preferences we need to
          set cookies so that this information can be called whenever you
          interact with a page is affected by your preferences.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Third Party Cookies:
        </Typography>
        <Typography paragraph>
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </Typography>
        <Typography paragraph>
          Third party analytics are used to track and measure usage of this site
          so that we can continue to produce engaging content. These cookies may
          track things such as how long you spend on the site or pages you visit
          which helps us to understand how we can improve the site for you.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          More Information
        </Typography>
        <Typography paragraph>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site. This
          Cookies Policy was created with the help of the Cookies Policy
          Template Generator and the Terms and Conditions Template.
        </Typography>
        <Typography paragraph>
          However if you are still looking for more information then you can
          contact us by sending an email to tim.v.kaenel@gmail.com.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Back
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
