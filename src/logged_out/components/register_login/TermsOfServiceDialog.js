import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/ColoredButton";

const styles = theme => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  dialogActions: {
    justifyContent: "flex-start"
  }
});

function TermsOfServiceDialog(props) {
  const { classes, onClose, theme } = props;
  return (
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Terms and Conditions</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Introduction
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Intellectual Property Rights
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Restrictions
        </Typography>
        <Typography paragraph>
          You are specifically restricted from all of the following:
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography className={classes.termsConditionsListitem} paragraph>
          - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren,
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Your Content
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          No warranties
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Limitation of liability
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Indemnification
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Severability
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Variation of Terms
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Assignment
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Entire Agreement
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Governing Law & Jurisdiction
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </Typography>
      </DialogContent>
      <DialogActions className={classNames("py-2 pr-2", classes.DialogActions)}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className="mr-1" />
          Back
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

TermsOfServiceDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TermsOfServiceDialog);
