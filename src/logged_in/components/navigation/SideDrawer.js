import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 240;

const styles = {
  toolbar: {
    minWidth: drawerWidth
  }
};

class SideDrawer extends PureComponent {
  state = {
    open: false
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };

  openDrawer = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <IconButton onClick={this.openDrawer} color="primary">
          <SupervisorAccountIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          variant="temporary"
          onClose={this.closeDrawer}
        >
          <Toolbar disableGutters className={classes.toolbar}>
            <Box
              pl={3}
              pr={3}
              display="flex"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Typography variant="h6">A Sidedrawer</Typography>
              <IconButton onClick={this.closeDrawer} color="primary">
                <CloseIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Divider />
        </Drawer>
      </Fragment>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SideDrawer);
