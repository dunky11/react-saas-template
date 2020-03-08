import React, { PureComponent, Fragment } from "react";
import { TextField, Grid, InputAdornment } from "@material-ui/core";
import StripeTextField from "./StripeTextField";
import { FpxBankElement } from "@stripe/react-stripe-js";

class StripeFBXBankForm extends PureComponent {
  state = { value: 0 };

  onChange = event => {
    const { value } = event.target;
    if (value >= 0) {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              margin="none"
              required
              label="Your Name"
              fullWidth
              autoFocus
              autoComplete="off"
              type="text"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              value={value}
              onChange={this.onChange}
              variant="outlined"
              fullWidth
              type="number"
              margin="none"
              label="Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StripeTextField
              margin="none"
              fullWidth
              label="iDEAL"
              required
              StripeElement={<FpxBankElement />}
              extraOptions={{ accountHolderType: "individual" }}
            ></StripeTextField>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default StripeFBXBankForm;
