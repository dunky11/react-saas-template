import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  IconButton,
  AppBar,
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import MessageListItem from "./MessageListItem";

const styles = theme => ({
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350
  },
  popoverPaper: {
    width: "100%",
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 270
    }
  },
  divider: {
    marginTop: -2
  },
  noShadow: {
    boxShadow: "none !important"
  }
});

class MessagePopperButton extends PureComponent {
  anchorEl = null;

  state = {
    open: false
  };

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  printMessages = () => {
    const { messages } = this.props;
    if (messages.length === 0) {
      return (
        <ListItem>
          <ListItemText>
            You haven&apos;t received any messages yet.
          </ListItemText>
        </ListItem>
      );
    }
    return messages.map((element, index) => (
      <MessageListItem
        key={index}
        message={element}
        updateMessageSrc={this.updateMessageSrc}
        divider={index !== messages.length - 1}
      />
    ));
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    const id = open ? "scroll-playground" : null;
    return (
      <Fragment>
        <IconButton
          onClick={this.handleClick}
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Open Messages"
          aria-describedby={id}
          color="primary"
        >
          <MessageIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          classes={{ paper: classes.popoverPaper }}
          onClose={this.handleClickAway}
        >
          {<span className={classes.arrow} ref={this.handleArrowRef} />}
          <div>
            <AppBar
              position="static"
              color="inherit"
              className={classes.noShadow}
            >
              <Box pt={1} pl={2} pb={1} pr={1}>
                <Typography variant="subtitle1">Messages</Typography>
              </Box>
              <Divider className={classes.divider} />
            </AppBar>
            <List dense className={classes.tabContainer}>
              {this.printMessages()}
            </List>
          </div>
        </Popover>
      </Fragment>
    );
  }
}

MessagePopperButton.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(MessagePopperButton);
