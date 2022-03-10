import React from "react";
import { TextField } from "@mui/material";
import withTheme from "@mui/styles/withTheme";

function StripeTextField(props) {
  const { stripeOptions, StripeElement, select, theme, ...rest } = props;
  const options = {
    style: {
      base: {
        ...theme.typography.body1,
        color: theme.palette.text.primary,
        fontSize: "16px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: theme.palette.text.secondary,
        },
      },
      invalid: {
        iconColor: theme.palette.error.main,
        color: theme.palette.error.main,
      },
    },
    ...stripeOptions,
  };
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{ component: StripeElement, options: options }}
      {...rest}
    />
  );
}

export default withTheme(StripeTextField);
