import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import HelpIcon from "./HelpIcon";

const styles = theme => ({
  listItemText: {
    paddingLeft: 8,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 16
    }
  }
});

function ListItemCheckbox(props) {
  const { classes, divider, checkbox, text, tooltip, secondaryAction } = props;
  return (
    <ListItem divider={divider} className="pl-1 listItemSecondaryPadding">
      {checkbox}
      <ListItemText className={classes.listItemText}>
        <Typography variant="body2">
          {text}
          {tooltip && <HelpIcon title={tooltip} />}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
    </ListItem>
  );
}

ListItemCheckbox.propTypes = {
  classes: PropTypes.object,
  divider: PropTypes.bool,
  tooltip: PropTypes.string,
  checkbox: PropTypes.object,
  text: PropTypes.string,
  secondaryAction: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(ListItemCheckbox);
