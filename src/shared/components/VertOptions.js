import React, { Fragment, useState, useCallback, useRef } from "react";
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

function VertOptions(props) {
  const { items, classes, color } = props;
  const anchorEl = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const id = open ? "scroll-playground" : null;
  return (
    <Fragment>
      <IconButton
        onClick={handleOpen}
        buttonRef={anchorEl}
        style={{ color: color ? color : null }}
        aria-describedby={id}
        aria-label="More Options"
      >
        <MoreVertIcon style={{ color: color ? color : null }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        onClose={handleClose}
      >
        <MenuList dense>
          {items.map(item => (
            <MenuItem
              key={item.name}
              onClick={() => {
                handleClose();
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

VertOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default withStyles(styles)(VertOptions);
