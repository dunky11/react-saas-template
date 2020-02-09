import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Dialog, DialogContent, withStyles } from "@material-ui/core";
import DialogTitleWithCloseIcon from "./DialogTitleWithCloseIcon";

const styles = theme => ({
  dialogPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(3),
    maxWidth: 420
  },
  actions: {
    marginTop: theme.spacing(2)
  },
  /**
   * This will eliminate the scroll on the paper
   */
  dialogPaperScrollPaper: {
    maxHeight: "none"
  }
});

/**
 * This is a Wrapper around the Dialog component to create centered
 * Login, Register or other dialogs.
 */

function FormDialog(props) {
  const {
    classes,
    open,
    onClose,
    loading,
    headline,
    onFormSubmit,
    content,
    actions,
    hideBackdrop
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{
        paper: classes.dialogPaper,
        paperScrollPaper: classes.dialogPaperScrollPaper
      }}
      hideBackdrop={hideBackdrop ? hideBackdrop : false}
    >
      <DialogTitleWithCloseIcon
        title={headline}
        onClose={onClose}
        disabled={loading}
      />
      <DialogContent className="py-0">
        <form onSubmit={onFormSubmit}>
          <div>{content}</div>
          <div className={classNames("w-100", classes.actions)}>{actions}</div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

FormDialog.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  headline: PropTypes.string,
  onFormSubmit: PropTypes.func,
  content: PropTypes.element,
  actions: PropTypes.element,
  hideBackdrop: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(FormDialog);
