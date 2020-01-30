import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

class RegExpTextfield extends PureComponent {
  state = { value: "" };

  onInput = event => {
    const { regExp } = this.props;
    const { target } = event;
    const { value } = target;
    if (regExp.test(value)) {
      this.setState({ value });
    }
  };

  render() {
    const { value } = this.state;
    /**
     * This way we wont pass the regExp prop to the Textfield, which would
     * log a warning.
     */
    const { regExp, ...others } = this.props;
    return <TextField onChange={this.onInput} value={value} {...others} />;
  }
}

RegExpTextfield.propTypes = {
  regExp: PropTypes.object
};

export default RegExpTextfield;
