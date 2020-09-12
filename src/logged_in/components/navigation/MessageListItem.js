import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import formatDistance from "date-fns/formatDistance";

function MessageListItem(props) {
  const { message, divider } = props;
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  const handleError = useCallback(() => {
    setHasErrorOccurred(true);
  }, [setHasErrorOccurred]);

  return (
    <ListItem divider={divider}>
      <ListItemAvatar>
        {hasErrorOccurred ? (
          <ErrorIcon color="secondary" />
        ) : (
          <Avatar
            src={hasErrorOccurred ? null : message.src}
            onError={handleError}
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

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired,
  divider: PropTypes.bool,
};

export default MessageListItem;
