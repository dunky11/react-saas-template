import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.information.background,
    border: `${theme.border.borderWidth}px solid ${theme.palette.information.border}`,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius
  }
});

function HighlighedInformation(props) {
  const { className, children, classes } = props;
  return (
    <div className={classNames(classes.main, className ? className : null)}>
      <Typography variant="body2">{children}</Typography>
    </div>
  );
}

HighlighedInformation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(HighlighedInformation);
