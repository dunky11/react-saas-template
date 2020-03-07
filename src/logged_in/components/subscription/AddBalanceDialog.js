import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Grid, Button, Box } from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import StripeCardForm from "./stripe/StripeCardForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const paymentOptions = ["Credit Card", "iDEAL", "IBAN", "FPX Bank"];

class AddBalanceDialog extends PureComponent {
  state = { value: 0, paymentOption: "Credit Card" };

  renderPaymentComponent = () => {
    const { paymentOption } = this.state;
    switch (paymentOption) {
      case "Credit Card":
        return <StripeCardForm />;
      case "iDEAL":
        return;
      case "IBAN":
        return;
      case "FPX Bank":
        return;
      default:
        throw new Error("No case selected in switch statement");
    }
  };

  render() {
    const { open } = this.props;
    const { paymentOption } = this.state;
    return (
      <FormDialog
        open={open}
        headline="Add Balance"
        content={
          <Box pb={2}>
            <Elements stripe={stripePromise}>
              <Box mb={2}>
                <Grid container spacing={1}>
                  {paymentOptions.map(option => (
                    <Grid item key={option}>
                      <Button
                        variant={
                          option === paymentOption ? "contained" : "outlined"
                        }
                        color="primary"
                        disableElevation
                        onClick={() => {
                          this.setState({ paymentOption: option });
                        }}
                      >
                        {option}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {this.renderPaymentComponent()}
            </Elements>
          </Box>
        }
        actions={
          <Button fullWidth variant="contained" color="secondary" size="large">
            Update
          </Button>
        }
      />
    );
  }
}

AddBalanceDialog.propTypes = {
  open: PropTypes.bool.isRequired
};

export default AddBalanceDialog;
