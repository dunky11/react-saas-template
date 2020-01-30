import React from "react";
import PropTypes from "prop-types";
import { Button} from "@material-ui/core";
import BlackButton from "./BlackButton";

function ButtonClickable(props) {
  const {
    paramOne,
    paramTwo,
    paramThree,
    onClick,
    variant,
    size,
    className,
    disabled,
    children,
    color
  } = props;
  function passOnClick() {
    if (paramThree) {
      onClick(paramOne, paramTwo, paramThree);
    } else if (paramTwo) {
      onClick(paramOne, paramTwo);
    } else {
      onClick(paramOne);
    }
  }
  if (color !== "black") {
    return (
      <Button
        onClick={passOnClick}
        variant={variant}
        size={size}
        color={color}
        className={className}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  }
  return (
    <BlackButton
      onClick={passOnClick}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
    >
      {children}
    </BlackButton>
  );
}

ButtonClickable.propTypes = {
  paramOne: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.number
  ]),
  paramTwo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.number
  ]),
  paramThree: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func
  ]),
  color: PropTypes.string
};

export default ButtonClickable;
