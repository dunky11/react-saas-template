import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
              size="large">
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default VisibilityPasswordTextField;
