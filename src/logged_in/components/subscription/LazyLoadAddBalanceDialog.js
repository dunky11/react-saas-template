import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

function LazyLoadAddBalanceDialog(props) {
  const { open, onClose, onSuccess } = props;
  const [AddBalanceDialog, setAddBalanceDialog] = useState(null);
  const [hasFetchedAddBalanceDialog, setHasFetchedAddBlanceDialog] = useState(false);

  useEffect(() => {
    if (open && !hasFetchedAddBalanceDialog) {
      setHasFetchedAddBlanceDialog(true);
      import("./AddBalanceDialog").then(Component => {
        setAddBalanceDialog(() => Component.default);
      });
    }
  }, [open, hasFetchedAddBalanceDialog, setHasFetchedAddBlanceDialog, setAddBalanceDialog]);

  return (
    <Fragment>
      {AddBalanceDialog && (
        <AddBalanceDialog
          open={open}
          onClose={onClose}
          onSuccess={onSuccess}
        ></AddBalanceDialog>
      )}
    </Fragment>
  );

}

LazyLoadAddBalanceDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default LazyLoadAddBalanceDialog;
