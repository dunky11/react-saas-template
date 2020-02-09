import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { OutlinedInput } from "@material-ui/core";
import currencyPrettyPrint from "../../../../shared/currencyPrettyPrint";

const styles = theme => ({
  input: { padding: "0px 9px" },
  outlinedInput: {
    width: 90,
    height: 40,
    pointerEvents: "none !important"
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2)
    }
  }
});

function Balance(props) {
  const { balance, classes } = props;
  return (
    <div className={classes.wrapper}>
      <OutlinedInput
        // === null so 0 is a displayed value
        value={balance === null ? "" : currencyPrettyPrint(balance)}
        className={classes.outlinedInput}
        classes={{ input: classes.input }}
        readOnly
        labelWidth={0}
      />
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.number,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Balance);
