import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  helpPadding: {
    "@media (max-width:  400px)": {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  }
});

function ActionPaper(props) {
  const {
    theme,
    classes,
    title,
    content,
    maxWidth,
    actions,
    helpPadding,
    fullWidthActions
  } = props;
  return (
    <Paper
      className="pt-1"
      style={{ maxWidth: theme.breakpoints.values[maxWidth] }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && (
        <DialogContent
          classes={helpPadding ? { root: classes.helpPadding } : null}
        >
          {content}
        </DialogContent>
      )}
      {actions && (
        <DialogActions
          className="pb-2 pr-2"
          classes={{ action: fullWidthActions ? "w-100" : null }}
        >
          {actions}
        </DialogActions>
      )}
    </Paper>
  );
}

ActionPaper.propTypes = {
  theme: PropTypes.object,
  classes: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string
  ]),
  content: PropTypes.element,
  maxWidth: PropTypes.string,
  actions: PropTypes.element,
  helpPadding: PropTypes.bool,
  fullWidthActions: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(ActionPaper);
