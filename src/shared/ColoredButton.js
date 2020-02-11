import React from "react";
import PropTypes from "prop-types";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

function ColoredButton(props) {
  const {
    variant,
    size,
    disabled,
    onClick,
    className,
    children,
    theme,
    color
  } = props;
  const buttonTheme = createMuiTheme({
    ...theme,
    palette: {
      primary: {
        main: color
      }
    }
  });
  return (
    <MuiThemeProvider theme={buttonTheme}>
      <Button
        variant={variant}
        color="primary"
        size={size ? size : "medium"}
        disabled={disabled ? disabled : false}
        onClick={onClick}
        className={className}
      >
        {children}
      </Button>
    </MuiThemeProvider>
  );
}

ColoredButton.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string
};

export default ColoredButton;
