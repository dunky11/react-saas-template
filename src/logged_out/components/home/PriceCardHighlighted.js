import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import classNames from "classnames";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main
  },
  monthStyling: {
    fontSize: theme.typography.body1.fontSize
  }
});

function PriceCardHighlighted(props) {
  const { classes, theme, title, pricing, accountDescription } = props;
  return (
    <div className={classNames(classes.card, "px-4")}>
      <Typography
        variant="h5"
        className="mb-2 text-white"
        style={{ color: theme.palette.primary.main }}
      >
        {title}
      </Typography>
      <Typography variant="h3" className="mb-2 text-white">
        {`$${pricing}`}
        <span className={classes.monthStyling}> / month</span>
      </Typography>
      <div className="d-flex align-items-center mb-1">
        <CheckIcon className="text-white" />
        <Typography className="ml-1 text-white" variant="h6">
          {accountDescription}
        </Typography>
      </div>
      <div className="d-flex align-items-center mb-1 text-white">
        <CheckIcon className="text-white" />
        <Typography className="ml-1 text-white" variant="h6">
          Access to all our features
        </Typography>
      </div>
      <div className="d-flex align-items-center mb-1 text-white">
        <CheckIcon className="text-white" />
        <Typography className="ml-1 text-white" variant="h6">
          Always cancelable
        </Typography>
      </div>
    </div>
  );
}

PriceCardHighlighted.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  title: PropTypes.string,
  pricing: PropTypes.string,
  accountDescription: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(PriceCardHighlighted);
