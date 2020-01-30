import React, { PureComponent, Fragment } from "react";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CloseIcon from "@material-ui/icons/Close";
import classNames from "classnames";
import PropTypes from "prop-types";

const drawerWidth = 240;

const styles = {
  headTooblar: {
    minWidth: drawerWidth
  }
};

class SideDrawer extends PureComponent {
  state = {
    open: false,
    loading: false
  };

  closeAccountDrawer = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { loading, open } = this.state;
    return (
      <Fragment>
        <IconButton
          onClick={() => {
            this.setState({ open: !open });
          }}
          color="primary"
        >
          <SupervisorAccountIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          variant="temporary"
          onClose={!loading ? this.closeAccountDrawer : null}
        >
          <Toolbar
            disableGutters
            className={classNames(
              classes.headTooblar,
              "pl-3 pr-1 justify-content-between"
            )}
          >
            <Typography variant="h6">A Sidedrawer</Typography>
            <IconButton
              onClick={() => {
                this.setState({ open: !open });
              }}
              color="primary"
            >
              <CloseIcon />
            </IconButton>
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
