import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function VisibilityPasswordTextField(props) {
  const { isVisible, onVisibilityChange, ...rest } = props;
  return (
    <TextField
      {...rest}
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={() => {
                onVisibilityChange(!isVisible);
              }}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
            >
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default VisibilityPasswordTextField;
