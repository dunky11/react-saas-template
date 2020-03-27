import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function PasswordTextField(props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <TextField
      {...props}
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              onMouseDown={event => {
                event.preventDefault();
              }}
            >
              {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
    ></TextField>
  );
}

export default PasswordTextField;
