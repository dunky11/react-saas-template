import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Toolbar,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  Switch
} from "@material-ui/core";
import "../../../css/spin.css";
import LoopIcon from "@material-ui/icons/Loop";
import classNames from "classnames";

const styles = {
  paper: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  scaleMinus: {
    transform: "scaleX(-1)"
  }
};

function AccountInformationArea(props) {
  const { classes, toggleAccountActivation, isAccountActivated } = props;
  return (
    <Paper className={classes.paper}>
      <Toolbar className="justify-content-between">
        <div className="d-flex align-items-center">
          <ListItemText
            primary="Status"
            secondary={isAccountActivated ? "Activated" : "Not activated"}
            className="mr-2"
          />
          <ListItemIcon>
            <LoopIcon
              className={classNames(
                isAccountActivated ? "spin" : null,
                classes.scaleMinus
              )}
            />
          </ListItemIcon>
        </div>
        <ListItemSecondaryAction className="pr-1">
          <Switch
            color="secondary"
            checked={isAccountActivated}
            onClick={toggleAccountActivation}
          />
        </ListItemSecondaryAction>
      </Toolbar>
    </Paper>
  );
}

AccountInformationArea.propTypes = {
  classes: PropTypes.object,
  toggleAccountActivation: PropTypes.func,
  isAccountActivated: PropTypes.bool.isRequired
};

export default withStyles(styles)(AccountInformationArea);
