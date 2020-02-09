import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
import classNames from "classnames";

const styles = theme => ({
  hover: {
    color: `${theme.palette.primary.light} !important`,
    cursor: "pointer"
  }
});

class HoverTypo extends PureComponent {
  state = {
    hover: false
  };

  handleHoverEnter = () => {
    this.setState({ hover: true });
  };

  handleHoverLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { hover } = this.state;
    const { classes, onClick, variant, className, color, text } = this.props;
    return (
      <Typography
        variant={variant}
        className={classNames(className, hover ? classes.hover : null)}
        style={{ color: color }}
        onMouseEnter={this.handleHoverEnter}
        onMouseLeave={this.handleHoverLeave}
        onClick={onClick}
        onKeyUp={onClick}
        role="button"
        tabIndex={-1}
      >
        {text}
      </Typography>
    );
  }
}

HoverTypo.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(HoverTypo);
