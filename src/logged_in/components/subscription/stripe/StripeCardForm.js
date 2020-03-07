import React, { PureComponent, Fragment } from "react";
import {
  withStyles,
  InputLabel,
  FormControl,
  TextField,
  Grid,
  InputAdornment
} from "@material-ui/core";
import { CardElement } from "@stripe/react-stripe-js";
import getStripeStylingOptions from "./getStripeStylingOptions";

const styles = theme => ({
  likeInputBase: {
    borderRadius: theme.shape.borderRadius,
    position: "relative"
  },
  likeInput: {
    top: -5,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    position: "absolute",
    borderStyle: "solid",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: "inherit",
    pointerEvents: "none"
  }
});

class StripeCardForm extends PureComponent {
  state = { value: 0, isReady: false, isFocused: false };

  onChange = event => {
    const { value } = event.target;
    if (value >= 0) {
      this.setState({ value: event.target.value });
    }
  };

  onFocus = () => {
    this.setState({ isFocused: true });
  };

  onBlur = () => {
    this.setState({ isFocused: false });
  };

  onReady = () => {
    this.setState({ isReady: true });
  };

  render() {
    const { classes, theme } = this.props;
    const { isFocused, value } = this.state;
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
              FormHelperTextProps={{ error: true }}
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
              label="amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel focused shrink>
                Credit Card
              </InputLabel>
              <div className={classes.likeInputBase}>
                <div
                  style={{
                    padding: "18.5px 14px",
                    animationName: "mui-auto-fill-cancel"
                  }}
                >
                  <CardElement
                    options={getStripeStylingOptions(theme, "outlined")}
                    onReady={this.onReady}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                  />
                </div>
                <fieldset
                  aria-hidden="true"
                  className={classes.likeInput}
                  style={{
                    borderColor: isFocused ? "#b3294e" : null,
                    borderWidth: isFocused ? 2 : null
                  }}
                >
                  <legend
                    style={{
                      width: "auto",
                      height: 11,
                      display: "block",
                      padding: 0,
                      fontSize: 8,
                      maxWidth: 1000,
                      textAlign: "left",
                      transition:
                        "max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
                      visibility: "hidden"
                    }}
                  >
                    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
                      {"Credit Card"}
                      {"&nbsp;*"}
                    </span>
                  </legend>
                </fieldset>
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(StripeCardForm);
