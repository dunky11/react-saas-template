import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  IconButton,
  DialogTitle,
  Typography,
  withTheme
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function DialogTitleWithCloseIcon(props) {
  const {
    theme,
    paddingBottom,
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
        disablePadding ? "p-0" : "pt-2"
      )}
      disableTypography
    >
      <Typography variant="h5">{title}</Typography>
      <IconButton
        onClick={onClose}
        style={{ marginRight: -12, marginTop: -10 }}
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
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  disablePadding: PropTypes.bool
};

export default withTheme(DialogTitleWithCloseIcon);
