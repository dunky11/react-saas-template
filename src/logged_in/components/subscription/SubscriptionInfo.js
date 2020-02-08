import React from "react";
import { ListItemText, Button, Toolbar } from "@material-ui/core";

function SubscriptionInfo() {
  return (
    <Toolbar className="justify-content-between">
      <ListItemText primary="Status" secondary="Premium Account" />
      <Button variant="contained" color="secondary" disabled>
        Update
      </Button>
    </Toolbar>
  );
}

export default SubscriptionInfo;
