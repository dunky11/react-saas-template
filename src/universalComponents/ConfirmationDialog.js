import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import ButtonCircularProgress from "./ButtonCircularProgress";

function ConfirmationDialog(props) {
  const { open, onClose, loading, title, content, onConfirm } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Close
        </Button>
        <Button
          color="secondary"
          onClick={onConfirm}
          variant="contained"
          disabled={loading}
        >
          {loading && <ButtonCircularProgress className="mr-1" />} Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  onConfirm: PropTypes.func
};

export default ConfirmationDialog;
