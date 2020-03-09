import React from "react";
import PropTypes from "prop-types";
import { OutlinedInput, withStyles } from "@material-ui/core";
import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";

const styles = {
  input: { padding: "0px 9px", cursor: "pointer" },
  outlinedInput: {
    width: 90,
    height: 40,
    cursor: "pointer"
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  }
};

function Balance(props) {
  const { balance, classes, openAddBalanceDialog } = props;
  return (
    <div className={classes.wrapper}>
      <OutlinedInput
        value={balance === null ? "" : currencyPrettyPrint(balance)}
        className={classes.outlinedInput}
        classes={{ input: classes.input }}
        readOnly
        labelWidth={0}
        onClick={openAddBalanceDialog}
      />
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(Balance);
