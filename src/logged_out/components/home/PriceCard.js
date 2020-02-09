import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  monthStyling: {
    fontSize: theme.typography.body1.fontSize
  }
});

function PriceCard(props) {
  const { classes, theme, title, pricing, accountDescription } = props;
  return (
    <div className={classNames(classes.card, "px-4 mt-2")}>
      <Typography
        variant="h6"
        className="mb-2"
        style={{ color: theme.palette.primary.main }}
      >
        {title}
      </Typography>
      <Typography variant="h4" className="mb-2">
        {`$${pricing}`}
        <span className={classes.monthStyling}> / month</span>
      </Typography>
      <div className="d-flex align-items-center mb-1">
        <CheckIcon style={{ color: theme.palette.primary.dark }} />
        <Typography className="ml-1" variant="body1">
          {accountDescription}
        </Typography>
      </div>
      <div className="d-flex align-items-center mb-1">
        <CheckIcon style={{ color: theme.palette.primary.dark }} />
        <Typography className="ml-1" variant="body1">
          Access to all our features
        </Typography>
      </div>
      <div className="d-flex align-items-center mb-1">
        <CheckIcon style={{ color: theme.palette.primary.dark }} />
        <Typography className="ml-1" variant="body1">
          Always cancelable
        </Typography>
      </div>
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  title: PropTypes.string,
  pricing: PropTypes.string,
  accountDescription: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(PriceCard);
