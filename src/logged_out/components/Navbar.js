import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import DialogSelector from "./register_login/DialogSelector";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing * 0.5
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brand: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  menuIconMobile: {
    marginRight: theme.spacing * 0.5
  },
  mobileDrawerHeadSection: {
    width: 200,
    height: 72,
    [theme.breakpoints.down("xs")]: {
      height: 67
    }
  }
});

function Navbar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    closeDialog,
    setLoggedIn,
    mobileDrawerOpen,
    selectedTab,
    dialogOpen,
    openTermsDialog,
    openChangePasswordDialog
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />
    },
    {
      name: "Register",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />
    }
  ];
  return (
    <div className={classes.root}>
      <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        setLoggedIn={setLoggedIn}
        openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        openChangePasswordDialog={openChangePasswordDialog}
      />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.brand}>
            <span className="text-primary">Wa</span>
            <span className="text-secondary">Ver</span>
          </Typography>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
              >
                <MenuIcon fontSize="large" color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className="no-decoration"
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          onClose={handleMobileDrawerClose}
          anchor="right"
        >
          <List disablePadding className={classes.mobileDrawerHeadSection}>
            <ListItem
              divider
              className={classNames(
                "justify-content-end py-0 h-100",
                classes.mobileDrawerBrandingListitem
              )}
            >
              <ListItemIcon className={classes.menuIconMobile}>
                <IconButton onClick={handleMobileDrawerClose}>
                  <CloseIcon fontSize="large" color="primary" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
          <List className="bg-black h-100">
            {menuItems.map(element => {
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className="no-decoration"
                    onClick={handleMobileDrawerClose}
                  >
                    <ListItem
                      button
                      selected={selectedTab === element.name}
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
                          <Typography
                            variant="subtitle1"
                            className="text-white"
                          >
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
      </Hidden>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  closeDialog: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  dialogOpen: PropTypes.string,
  openTermsDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Navbar);
