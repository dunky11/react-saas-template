import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const styles = theme => ({
  label: {
    transform: "translate(0, 1.5px) scale(0.75)",
    transformOrigin: "top left",
    color: theme.typography.caption.color,
    padding: 0,
    fontSize: theme.typography.subtitle1.fontSize,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1
  },
  CardElementWrapper: {
    width: "100%",
    flexDirection: "row",
    display: "inline-flex",
    position: "relative"
  },
  beforeCardElementWrapper: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    transition: `border-bottom-color ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut} 0ms`,
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    pointerEvents: "none"
  },
  afterCardElementWrapper: {
    left: 0,
    right: 0,
    bottom: 0,
    content: "",
    position: "absolute",
    transform: "scaleX(0)",
    transition: `transform ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeOut} 0ms`,
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    pointerEvents: "none"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 6,
    paddingBottom: 7,
    paddingRight: 32
  },
  chip: {
    margin: theme.spacing(0.25)
  },
  selectIcon: {
    display: "none"
  },
  selectSelect: {
    cursor: "auto"
  }
});

class ElementHolder extends PureComponent {
  state = { hover: false, focus: false };

  handleOnMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hover: false });
  };

  handleFocus = () => {
    this.setState({ focus: true });
  };

  handleBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    const { hover, focus } = this.state;
    const { classes, chips } = this.props;
    return (
      <div
        className={classes.CardElementWrapper}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div
          className={classes.beforeCardElementWrapper}
          style={
            hover && !focus
              ? {
                  borderBottom: "2px solid rgba(0, 0, 0, 0.87)"
                }
              : { borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }
          }
        />
        <div className={classes.chips}>
          {chips.map((element, index) => (
            <Chip
              key={index}
              avatar={element.avatar}
              label={element.name}
              onClick={element.onClick}
              className={classes.chip}
              onMouseEnter={this.handleFocus}
              onMouseLeave={this.handleBlur}
              color={element.color}
              clickable
              onDelete={element.onDelete}
            />
          ))}
        </div>
        <div
          style={
            focus
              ? {
                  transform: "scaleX(1)"
                }
              : { transform: "scaleX(0)" }
          }
          className={classes.afterCardElementWrapper}
        />
      </div>
    );
  }
}

ElementHolder.propTypes = {
  classes: PropTypes.object,
  chips: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(ElementHolder);
