import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  IconButton,
  MenuList,
  ListItemText,
  ListItemIcon,
  MenuItem,
  withStyles
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = {
  listItemtext: {
    paddingLeft: "0 !important"
  }
};

class VertOptions extends PureComponent {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { open } = this.state;
    const { items, classes, color } = this.props;
    const id = open ? "scroll-playground" : null;
    return (
      <Fragment>
        <IconButton
          onClick={this.handleOpen}
          buttonRef={node => {
            this.anchorEl = node;
          }}
          style={{ color: color ? color : null }}
          aria-describedby={id}
          aria-label="More Options"
        >
          <MoreVertIcon style={{ color: color ? color : null }} />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          onClose={this.handleClose}
        >
          <MenuList dense>
            {items.map(item => (
              <MenuItem
                key={item.name}
                onClick={() => {
                  this.handleClose();
                  item.onClick();
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText className={classes.listItemtext}>
                  {item.name}
                </ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Popover>
      </Fragment>
    );
  }
}

VertOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default withStyles(styles)(VertOptions);
