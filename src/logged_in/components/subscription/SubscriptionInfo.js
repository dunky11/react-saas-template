import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function SubscriptionInfo(props) {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Status" secondary="Premium Account" />
      <Button variant="contained" color="secondary" disabled>
        Update
      </Button>
    </Toolbar>
  );
}

SubscriptionInfo.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SubscriptionInfo);
