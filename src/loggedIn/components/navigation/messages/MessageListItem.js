import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import formatDistance from "date-fns/formatDistance";

class MessageListItem extends PureComponent {
  state = {
    errorOccured: false
  };

  handleError = () => {
    this.setState({
      errorOccured: true
    });
  };

  render() {
    const { message, divider } = this.props;
    const { errorOccured } = this.state;
    return (
      <ListItem divider={divider}>
        <ListItemAvatar>
          {errorOccured ? (
            <ErrorIcon color="secondary" />
          ) : (
            <Avatar
              src={errorOccured ? null : message.profilePicUrl}
              onError={this.handleError}
            />
          )}
        </ListItemAvatar>
        <ListItemText
          primary={message.text}
          secondary={`${formatDistance(message.date * 1000, new Date())} ago`}
        />
      </ListItem>
    );
  }
}

MessageListItem.propTypes = {
  message: PropTypes.object,
  divider: PropTypes.bool
};

export default MessageListItem;
