import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Tooltip, Typography, withStyles } from "@material-ui/core";
import HelpIconOutline from "@material-ui/icons/HelpOutline";

const styles = theme => ({
  tooltipTypo: {
    whiteSpace: "pre-line !important",
    ...theme.typography.caption,
    color: theme.palette.common.white
  },
  tooltip: {
    verticalAlign: "middle",
    fontSize: "1.25rem"
  },
  helpIcon: {
    marginLeft: theme.spacing(1),
    "@media (max-width: 350px)": {
      marginLeft: theme.spacing(0.5)
    },
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut
    })
  }
});

class HelpIcon extends PureComponent {
  state = {
    hover: false
  };

  onMouseOver = () => {
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { hover } = this.state;
    const { classes, title } = this.props;
    return (
      <Tooltip
        title={
          <Typography variant="body2" className={classes.tooltipTypo}>
            {title}
          </Typography>
        }
        className={classes.tooltip}
        enterTouchDelay={300}
      >
        <HelpIconOutline
          /**
           * We have to use onMouseOver and not onMouseEnter, because if we have overlapping
           * tooltips, the onMouseEnter wont fire when the old tooltip is fading
           * */
          onMouseOver={this.onMouseOver}
          onFocus={this.onMouseOver}
          onBlur={this.onMouseLeave}
          onMouseLeave={this.onMouseLeave}
          color={hover ? "primary" : "inherit"}
          className={classes.helpIcon}
          style={{ cursor: hover ? "pointer" : "auto" }}
        />
      </Tooltip>
    );
  }
}

HelpIcon.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default withStyles(styles, { withTheme: true })(HelpIcon);
