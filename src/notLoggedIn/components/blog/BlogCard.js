import React from "react";
import PropTypes from "prop-types";
import { Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import smoothScrollTop from "../../../universalComponents/smoothScrollTop";

const styles = theme => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8,
    "&:hover": {
      boxShadow: "0 0 1.25rem rgba(108,118,134,.1)!important"
    }
  },
  title: {
    transition: `background-color ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.standard}ms`,
    "&:hover": {
      color: theme.palette.secondary.main
    },
    cursor: "pointer"
  },
  card: {
    boxShadow: theme.shadows[2]
  }
});

function BlogCard(props) {
  const { classes, url, src, date, title, content } = props;
  function previewify(htmlString) {
    /**
     * This will strip all html tags from the string
     */
    const strippedContent = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    let newText = "";
    let i;
    for (i = 0; i < strippedContent.length && i < 150; i += 1) {
      newText += strippedContent[i];
    }
    while (i < strippedContent.length) {
      if (strippedContent[i] === " ") {
        break;
      }
      newText += strippedContent[i];
      i += 1;
    }
    return newText;
  }
  return (
    <Card className={classes.card}>
      <Link
        to={url}
        onClick={() => {
          smoothScrollTop();
        }}
      >
        <img src={src} className={classes.img} alt="" />
      </Link>
      <div className="p-2">
        <Typography variant="body2" className="text-secondary-greyed">
          {format(new Date(date * 1000), "PPP", {
            awareOfUnicodeTokens: true
          })}
        </Typography>
        <Link
          to={url}
          className="no-decoration"
          onClick={() => {
            smoothScrollTop();
          }}
        >
          <Typography
            variant="h6" /* If we dont place the className into the child
        component the whole width will  clickable */
          >
            <span className={classes.title}>{title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" className="text-secondary-greyed">
          {previewify(content)}
          <Link
            to={url}
            className="no-decoration"
            onClick={() => {
              smoothScrollTop();
            }}
          >
            <span className="link"> read more...</span>
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object,
  url: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.number,
  content: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(BlogCard);
