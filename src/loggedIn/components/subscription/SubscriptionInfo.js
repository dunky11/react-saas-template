import React, { Fragment } from "react";
import { ListItemText, Button, Toolbar } from "@material-ui/core";

function SubscriptionInfo() {
  return (
    <Fragment>
      <Toolbar className="justify-content-between">
        <ListItemText primary="Status" secondary="Premium Account" />
        <Button variant="contained" color="secondary" disabled>
          Update
        </Button>
      </Toolbar>
    </Fragment>
  );
}

export default SubscriptionInfo;
