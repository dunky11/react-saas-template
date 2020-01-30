import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, Collapse } from "@material-ui/core";

class CheckboxCollapse extends PureComponent {
  state = { open: false };

  handleChange = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    const { label, children } = this.props;
    return (
      <div
        style={{
          borderColor: "rgba(0, 0, 0, 0.23)",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 4,
          padding: "14px"
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={open}
              onChange={this.handleChange}
              color="primary"
            />
          }
          label={label}
        />
        <Collapse in={open}>{children}</Collapse>
      </div>
    );
  }
}

CheckboxCollapse.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element
};

export default CheckboxCollapse;
