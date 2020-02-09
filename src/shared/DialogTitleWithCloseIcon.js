import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  IconButton,
  DialogTitle,
  Typography,
  Avatar,
  withTheme
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function DialogTitleWithCloseIcon(props) {
  const {
    theme,
    paddingBottom,
    avatarSrc,
    onClose,
    disabled,
    title,
    disablePadding
  } = props;
  return (
    <DialogTitle
      style={{
        paddingBottom: paddingBottom ? paddingBottom : theme.spacing(3)
      }}
      className={classNames(
        "d-flex justify-content-between w-100",
        avatarSrc && !disablePadding && "pt-2",
        disablePadding ? "p-0" : null
      )}
      disableTypography
    >
      {avatarSrc ? (
        <div className="d-flex align-items-center">
          <Avatar
            src={avatarSrc}
            style={{
              width: 32,
              height: 32
            }}
            className="mr-2"
          />
          <b>
            <Typography variant="h5">{title}</Typography>
          </b>
        </div>
      ) : (
        <b>
          <Typography variant="h5">{title}</Typography>
        </b>
      )}
      <IconButton
        onClick={onClose}
        style={
          avatarSrc
            ? { marginRight: -12 }
            : { marginRight: -12, marginTop: -10 }
        }
        disabled={disabled}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
}

DialogTitleWithCloseIcon.propTypes = {
  theme: PropTypes.object,
  paddingBottom: PropTypes.number,
  avatarSrc: PropTypes.string,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  disablePadding: PropTypes.bool
};

export default withTheme(DialogTitleWithCloseIcon);
