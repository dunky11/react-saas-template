import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Grid, Button, Box, withTheme } from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import ColoredButton from "../../../shared/components/ColoredButton";
import StripeCardForm from "./stripe/StripeCardForm";
import StripeIDEALForm from "./stripe/StripeIDEALForm";
import StripeIBANForm from "./stripe/StripeIBANForm";
import StripeFPXBankForm from "./stripe/StripeFPXBankForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const paymentOptions = [
  "Credit Card",
  "iDEAL",
  "FPX Bank",
  "SEPA Direct Debit"
];

class AddBalanceDialog extends PureComponent {
  state = { value: 0, paymentOption: "Credit Card" };

  renderPaymentComponent = () => {
    const { paymentOption } = this.state;
    switch (paymentOption) {
      case "Credit Card":
        return <StripeCardForm />;
      case "iDEAL":
        return <StripeIDEALForm />;
      case "SEPA Direct Debit":
        return <StripeIBANForm />;
      case "FPX Bank":
        return <StripeFPXBankForm />;
      default:
        throw new Error("No case selected in switch statement");
    }
  };

  render() {
    const { open, theme, onClose } = this.props;
    const { paymentOption } = this.state;
    return (
      <FormDialog
        open={open}
        onClose={onClose}
        headline="Add Balance"
        content={
          <Box pb={2}>
            <Elements stripe={stripePromise}>
              <Box mb={2}>
                <Grid container spacing={1}>
                  {paymentOptions.map(option => (
                    <Grid item key={option}>
                      <ColoredButton
                        variant={
                          option === paymentOption ? "contained" : "outlined"
                        }
                        disableElevation
                        onClick={() => {
                          this.setState({ paymentOption: option });
                        }}
                        color={theme.palette.common.black}
                      >
                        {option}
                      </ColoredButton>
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
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withTheme(AddBalanceDialog);
