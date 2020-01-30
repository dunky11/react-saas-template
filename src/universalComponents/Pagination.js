import React from "react";
import PropTypes from "prop-types";
import { Button, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ClickableComponent from "./ClickableComponent";

const styles = {
  button: {
    minWidth: 0
  },
  selectedButton: {
    minWidth: 0,
    cursor: "auto",
    pointerEvents: "none"
  }
};

function Pagination(props) {
  const { clickFunction, selectedIndex, total, classes } = props;
  function incrementFileIndex() {
    clickFunction(selectedIndex + 1);
  }
  function decrementFileIndex() {
    clickFunction(selectedIndex - 1);
  }
  const pagination = [];
  for (let i = 0; i < total; i += 1) {
    pagination[i] = (
      <ClickableComponent
        key={i}
        function={selectedIndex === i ? null : clickFunction}
        parameters={[i]}
        disabled={selectedIndex === i}
      >
        <Button
          className={classNames(
            classes.button,
            "flex-grow-4",
            selectedIndex === i ? classes.selectedButton : null
          )}
          color={selectedIndex === i ? "secondary" : "inherit"}
          disableRipple={selectedIndex === i}
          disableTouchRipple={selectedIndex === i}
          disableFocusRipple={selectedIndex === i}
        >
          {i + 1}
        </Button>
      </ClickableComponent>
    );
  }
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <IconButton disabled={selectedIndex === 0} onClick={decrementFileIndex}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        {pagination}
      </div>
      <IconButton
        disabled={selectedIndex === total - 1}
        onClick={incrementFileIndex}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
}

Pagination.propTypes = {
  clickFunction: PropTypes.func,
  selectedIndex: PropTypes.number,
  total: PropTypes.number,
  classes: PropTypes.object
};

export default withStyles(styles)(Pagination);
