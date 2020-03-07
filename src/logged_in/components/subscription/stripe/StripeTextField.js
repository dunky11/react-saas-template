import React, { PureComponent, Fragment } from "react";
import { withStyles, InputLabel, FormControl } from "@material-ui/core";

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
      StripeElement
    } = this.props;
    return (
      <FormControl fullWidth={fullWidth} variant={variant} required={required}>
        {label && (
          <InputLabel focused shrink>
            {label}
          </InputLabel>
        )}
        <div className={classes.likeInputBase}>
          <div
            style={{
              padding: "18.5px 14px",
              animationName: "mui-auto-fill-cancel"
            }}
          >
            <StripeElement
              onReady={this.onReady}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
            ></StripeElement>
          </div>
          <fieldset
            aria-hidden="true"
            className={classes.likeInput}
            style={{
              borderColor: isFocused
                ? color === "primary"
                  ? theme.palette.color.primary.main
                  : primary.palette.palette.secondary.main
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

StripeTextField.propTypes = {
  children: PropTypes.node.isRequired
};

export default withStyles(styles, { withTheme: true })(StripeTextField);
