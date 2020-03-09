import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

class LazyLoadAddBalanceDialog extends PureComponent {
  state = { AddBalanceDialog: null };

  componentDidUpdate() {
    const { open } = this.props;
    if (open && !this.hasFetchedAddBalanceDialog) {
      this.hasFetchedAddBalanceDialog = true;
      import("./AddBalanceDialog").then(Component => {
        this.setState({ AddBalanceDialog: Component.default });
      });
    }
  }

  render() {
    const { open, onClose, onSuccess } = this.props;
    const { AddBalanceDialog } = this.state;
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
}

LazyLoadAddBalanceDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default LazyLoadAddBalanceDialog;
