import React, { PureComponent, Fragment } from "react";
import { TextField } from "@material-ui/core";
import { CardElement, IdealBankElement } from "@stripe/react-stripe-js";

class TestStripe extends PureComponent {
  render() {
    return (
      <Fragment>
        <TextField
          fullWidth
          label="Credit Card Number"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputComponent: CardElement
          }}
          variant="outlined"
        />
        <TextField
          select
          fullWidth
          SelectProps={{
            inputComponent: IdealBankElement
          }}
          variant="outlined"
        ></TextField>
      </Fragment>
    );
  }
}

export default TestStripe;
