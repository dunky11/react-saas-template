import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Paper,
  Toolbar,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  Switch,
  Box,
  withStyles
} from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";

const styles = theme => ({
  paper: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  toolbar: { justifyContent: "space-between" },
  scaleMinus: {
    transform: "scaleX(-1)"
  },
  "@keyframes spin": {
    from: { transform: "rotate(359deg)" },
    to: { transform: "rotate(0deg)" }
  },
  spin: { animation: "$spin 2s infinite linear" },
  listItemSecondaryAction: { paddingRight: theme.spacing(1) }
});

function AccountInformationArea(props) {
  const { classes, toggleAccountActivation, isAccountActivated } = props;
  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <ListItemText
              primary="Status"
              secondary={isAccountActivated ? "Activated" : "Not activated"}
              className="mr-2"
            />
          </Box>
          <ListItemIcon>
            <LoopIcon
              className={classNames(
                isAccountActivated ? classes.spin : null,
                classes.scaleMinus
              )}
            />
          </ListItemIcon>
        </Box>
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <Switch
            color="secondary"
            checked={isAccountActivated}
            onClick={toggleAccountActivation}
            inputProps={{
              "aria-label": isAccountActivated
                ? "Deactivate Account"
                : "Activate Account"
            }}
          />
        </ListItemSecondaryAction>
      </Toolbar>
    </Paper>
  );
}

AccountInformationArea.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(AccountInformationArea);
