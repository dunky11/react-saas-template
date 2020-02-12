import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  closeIcon: {
    marginRight: theme.spacing(0.5)
  },
  headSection: {
    width: 200,
    height: 72,
    [theme.breakpoints.down("xs")]: {
      height: 67
    }
  },
  blackList: {
    backgroundColor: theme.palette.common.black,
    height: "100%"
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

class NavigationDrawer extends PureComponent {
  componentDidMount() {
    window.onresize = () => {
      const { width, open, onClose } = this.props;
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }

  render() {
    const {
      anchor,
      classes,
      open,
      onClose,
      menuItems,
      selectedItem
    } = this.props;
    return (
      <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
        <List disablePadding className={classes.headSection}>
          <ListItem
            divider
            className={classNames(
              "py-0 h-100",
              classes.mobileDrawerBrandingListitem,
              anchor === "left"
                ? "justify-content-start"
                : "justify-content-end"
            )}
          >
            <ListItemIcon className={classes.closeIcon}>
              <IconButton onClick={onClose}>
                <CloseIcon fontSize="large" color="primary" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
        <List className={classes.blackList}>
          {menuItems.map(element => {
            if (element.link) {
              return (
                <Link
                  key={element.name}
                  to={element.link}
                  className={classes.noDecoration}
                  onClick={onClose}
                >
                  <ListItem
                    button
                    selected={selectedItem === element.name}
                    /**
                     * We disable ripple as it will make a weird animation
                     * with primary and secondary color
                     */
                    disableRipple
                    disableTouchRipple
                  >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" className="text-white">
                          {element.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
              );
            }
            return (
              <ListItem button key={element.name} onClick={element.onClick}>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" className="text-white">
                      {element.name}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectedItem: PropTypes.string
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(NavigationDrawer)
);
