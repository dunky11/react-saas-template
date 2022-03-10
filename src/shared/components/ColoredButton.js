import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button, createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from "@mui/material";

function ColoredButton(props) {
  const { color, children, theme } = props;
  const buttonTheme = createTheme(adaptV4Theme({
    ...theme,
    palette: {
      primary: {
        main: color
      }
    }
  }));
  const buttonProps = (({ color, theme, children, ...o }) => o)(props);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={buttonTheme}>
        <Button {...buttonProps} color="primary">
          {children}
        </Button>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ColoredButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default memo(ColoredButton);
