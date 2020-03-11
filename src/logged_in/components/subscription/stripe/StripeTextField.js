import React from "react";
import { TextField, withTheme } from "@material-ui/core";

function MyInputComponent(props) {
  const { component: Component, inputRef, ...other } = props;

  // implement `InputElement` interface
  React.useImperativeHandle(inputRef, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    }
    // hiding the value e.g. react-stripe-elements
  }));

  // `Component` will be your `SomeThirdPartyComponent` from below
  return <Component {...other} />;
}

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
          color: theme.palette.text.secondary
        }
      },
      invalid: {
        iconColor: theme.palette.error.main,
        color: theme.palette.error.main
      }
    },
    ...stripeOptions
  };
  return (
    <TextField
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{ component: StripeElement, options: options }}
      InputProps={{
        inputComponent: MyInputComponent
      }}
      {...rest}
    />
  );
}

export default withTheme(StripeTextField);
