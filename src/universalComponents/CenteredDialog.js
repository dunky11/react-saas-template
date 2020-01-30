import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, Typography } from "@material-ui/core";
import classNames from "classnames";

const styles = theme => ({
  dialogPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    maxWidth: 420,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },
  content: {
    marginTop: theme.spacing(2)
  },
  actions: {
    marginTop: theme.spacing(2)
  }
});

/**
 * This is a Wrapper around the Dialog component to create centered
 * Login, Register or other dialogs.
 */

function CenteredDialog(props) {
  const {
    classes,
    open,
    onClose,
    loading,
    headline,
    onFormSubmit,
    content,
    actions
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{ paper: classes.dialogPaper }}
    >
      <Typography variant="h4">{headline}</Typography>
      <form onSubmit={onFormSubmit}>
        <div className={classes.content}>{content}</div>
        <div className={classNames("w-100", classes.actions)}>{actions}</div>
      </form>
    </Dialog>
  );
}

CenteredDialog.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  headline: PropTypes.string,
  onFormSubmit: PropTypes.func,
  content: PropTypes.element,
  actions: PropTypes.element
};

export default withStyles(styles, { withTheme: true })(CenteredDialog);
