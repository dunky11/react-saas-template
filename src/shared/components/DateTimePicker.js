import React from "react";
import PropTypes from "prop-types";
import {
  MuiPickersUtilsProvider,
  DateTimePicker as DTPicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { withTheme, MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import DateRange from "@material-ui/icons/DateRange";

const Theme2 = theme =>
  createMuiTheme({
    ...theme,
    overrides: {
      MuiOutlinedInput: {
        root: {
          width: 190,
          "@media (max-width:  400px)": {
            width: 160
          },
          "@media (max-width:  360px)": {
            width: 140
          },
          "@media (max-width:  340px)": {
            width: 120
          }
        },
        input: {
          padding: "9px 14.5px"
        }
      }
    }
  });

function DateTimePicker(props) {
  const { disabled, value, onChange } = props;
  return (
    <MuiThemeProvider theme={Theme2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DTPicker
          inputVariant="outlined"
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          timeIcon={<AccessTime />}
          dateRangeIcon={<DateRange />}
          variant="outlined"
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
          inputProps={{ style: { width: "100%", cursor: "pointer" } }}
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

DateTimePicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

export default withTheme(DateTimePicker);
