import React from "react";
import PropTypes from "prop-types";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const buttonTheme = theme =>
  createMuiTheme({
    palette: {
      primary: { main: theme.palette.common.black }
    },
    typography: {
      useNextVariants: true
    }
  });

function BlackButton(props) {
  const { variant, size, disabled, onClick, className, children } = props;
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

BlackButton.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.func,
    PropTypes.string
  ]),
  variant: PropTypes.string
};

export default BlackButton;
