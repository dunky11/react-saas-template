import React, { useState, useCallback } from "react";
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

function HelpIcon(props) {
  const { classes, title } = props;
  const [isHovered, setIsHovered] = useState(false);

  const onMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

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
        onMouseOver={onMouseOver}
        onFocus={onMouseOver}
        onBlur={onMouseLeave}
        onMouseLeave={onMouseLeave}
        color={isHovered ? "primary" : "inherit"}
        className={classes.helpIcon}
        style={{ cursor: isHovered ? "pointer" : "auto" }}
      />
    </Tooltip>
  );
}

HelpIcon.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default withStyles(styles, { withTheme: true })(HelpIcon);
