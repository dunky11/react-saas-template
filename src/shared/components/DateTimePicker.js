import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  adaptV4Theme,
} from "@mui/material";
import withTheme from "@mui/styles/withTheme";
import AccessTime from "@mui/icons-material/AccessTime";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DateRange from "@mui/icons-material/DateRange";

const Theme2 = (theme) =>
  createTheme(
    adaptV4Theme({
      ...theme,
      overrides: {
        MuiOutlinedInput: {
          root: {
            width: 190,
            "@media (max-width:  400px)": {
              width: 160,
            },
            "@media (max-width:  360px)": {
              width: 140,
            },
            "@media (max-width:  340px)": {
              width: 120,
            },
          },
          input: {
            padding: "9px 14.5px",
          },
        },
      },
    })
  );

function DTPicker(props) {
  const { disabled, value, onChange } = props;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            inputVariant="outlined"
            leftArrowIcon={<KeyboardArrowLeft />}
            rightArrowIcon={<KeyboardArrowRight />}
            timeIcon={<AccessTime />}
            dateRangeIcon={<DateRange />}
            variant="outlined"
            disabled={disabled}
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
            {...props}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

DTPicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default withTheme(DTPicker);
