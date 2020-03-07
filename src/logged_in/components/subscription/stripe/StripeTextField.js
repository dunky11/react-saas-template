import React, { PureComponent, cloneElement } from "react";
import PropTypes from "prop-types";
import { withStyles, InputLabel, FormControl } from "@material-ui/core";
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
  },
  legend: {
    width: "auto",
    height: 11,
    display: "block",
    padding: 0,
    fontSize: 8,
    maxWidth: 1000,
    textAlign: "left",
    transition: "max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    visibility: "hidden",
    "& span": {
      paddingLeft: 5,
      paddingRight: 5
    }
  },
  stripeElementWrapper: {
    padding: "18.5px 14px",
    animationName: "mui-auto-fill-cancel"
  },
  label: {
    transform: "translate(14px, -6px) scale(0.75)"
  }
});

class StripeTextField extends PureComponent {
  state = { isReady: false, isFocused: false };

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
    const {
      classes,
      theme,
      label,
      fullWidth,
      variant,
      required,
      color,
      StripeElement,
      margin
    } = this.props;
    const { isFocused } = this.state;
    return (
      <FormControl
        fullWidth={fullWidth}
        variant={variant}
        required={required}
        margin={margin}
      >
        {label && (
          <InputLabel focused shrink className={classes.label}>
            {label}
          </InputLabel>
        )}
        <div className={classes.likeInputBase}>
          <div className={classes.stripeElementWrapper}>
            {cloneElement(StripeElement, {
              options: getStripeStylingOptions(theme, variant),
              onReady: this.onReady,
              onFocus: this.onFocus,
              onBlur: this.onBlur
            })}
          </div>
          <fieldset
            aria-hidden="true"
            className={classes.likeInput}
            style={{
              borderColor: isFocused
                ? color === "secondary"
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main
                : null,
              borderWidth: isFocused ? 2 : null
            }}
          >
            {label && (
              <legend className={classes.legend}>
                <span>
                  {label}
                  {required ? "&nbsp;*" : ""}
                </span>
              </legend>
            )}
          </fieldset>
        </div>
      </FormControl>
    );
  }
}

StripeTextField.propTypes = {};

export default withStyles(styles, { withTheme: true })(StripeTextField);
