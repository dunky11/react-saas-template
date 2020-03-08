import React, { PureComponent, Fragment } from "react";
import { TextField, Grid, InputAdornment } from "@material-ui/core";
import StripeTextField from "./StripeTextField";
import { IbanElement } from "@stripe/react-stripe-js";

class StripeIBANForm extends PureComponent {
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
            <TextField
              required
              variant="outlined"
              fullWidth
              type="email"
              margin="none"
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <StripeTextField
              margin="none"
              variant="outlined"
              fullWidth
              label="IBAN"
              required
              StripeElement={IbanElement}
              stripeOptions={{ supportedCountries: ["SEPA"] }}
            ></StripeTextField>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default StripeIBANForm;
