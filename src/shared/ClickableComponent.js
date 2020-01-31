import React from "react";
import PropTypes from "prop-types";

function ClickableComponent(props) {
  const { parameters, disabled, children } = props;

  function handleClick() {
    const func = props.function;
    func(...parameters);
  }
  return (
    <div
      role="button"
      tabIndex={-1}
      onKeyDown={disabled ? null : handleClick}
      onClick={disabled ? null : handleClick}
    >
      {children}
    </div>
  );
}

ClickableComponent.propTypes = {
  function: PropTypes.func.isRequired,
  parameters: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ClickableComponent;
