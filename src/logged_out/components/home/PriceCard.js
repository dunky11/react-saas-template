import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  }
});

function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Typography
        variant={highlighted ? "h5" : "h6"}
        className={highlighted ? "mb-2 text-white" : "mb-2"}
        style={{ color: theme.palette.primary.main }}
      >
        {title}
      </Typography>
      <Typography
        variant={highlighted ? "h3" : "h4"}
        className={highlighted ? "mb-2 text-white" : "mb-2"}
      >
        {pricing}
      </Typography>
      {features.map((feature, index) => (
        <div className="d-flex align-items-center mb-1" key={index}>
          <CheckIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark
            }}
          />
          <Typography
            className={highlighted ? "ml-1 text-white" : "ml-1"}
            variant={highlighted ? "h6" : "body1"}
          >
            {feature}
          </Typography>
        </div>
      ))}
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PriceCard);
