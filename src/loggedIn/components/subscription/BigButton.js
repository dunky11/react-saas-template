import React, { Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  listItem: {
    border: `${theme.border.borderWidth}px solid ${theme.border.borderColor}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2.5)
  },
  noTopBorderRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  noBottomBorderRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  noTopBorder: {
    borderTopWidth: 0
  },
  noBottomBorder: {
    borderBottomWidth: 0
  }
});

function BigButton(props) {
  const {
    classes,
    primaryText,
    icon,
    onClick,
    noTopBorderRadius,
    noBottomBorderRadius,
    noTopBorder,
    noBottomBorder,
    disabled
  } = props;
  return (
    <Fragment>
      <ListItem
        button
        className={classNames(
          classes.listItem,
          noTopBorderRadius ? classes.noTopBorderRadius : null,
          noBottomBorderRadius ? classes.noBottomBorderRadius : null,
          noTopBorder ? classes.noTopBorder : null,
          noBottomBorder ? classes.noBottomBorder : null
        )}
        onClick={onClick}
        disabled={disabled ? disabled : false}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{primaryText}</ListItemText>
      </ListItem>
    </Fragment>
  );
}

BigButton.propTypes = {
  classes: PropTypes.object.isRequired,
  primaryText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  noTopBorderRadius: PropTypes.bool,
  noBottomBorderRadius: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  noTopBorder: PropTypes.bool,
  noBottomBorder: PropTypes.bool,
  disabled: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(BigButton);
