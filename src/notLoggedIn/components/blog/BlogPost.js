import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import format from "date-fns/format";
import BlogCard from "./BlogCard";

const styles = theme => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    maxWidth: 1280,
    width: "100%"
  },
  wrapper: {
    minHeight: "60vh"
  },
  img: {
    width: "100%",
    height: "auto"
  },
  card: {
    boxShadow: theme.shadows[4]
  }
});

class BlogPost extends PureComponent {
  componentDidMount() {
    const { title } = this.props;
    document.title = `WaVer - ${title}`;
  }

  render() {
    const { classes, date, title, src, content, otherArticles } = this.props;
    return (
      <div
        className={classNames(
          "lg-p-top d-flex justify-content-center",
          classes.wrapper
        )}
      >
        <div className={classes.blogContentWrapper}>
          <Grid container spacing={5}>
            <Grid item md={9}>
              <Card className={classes.card}>
                <div className="p-3">
                  <Typography
                    align="center"
                    variant="body1"
                    className="text-secondary-greyed"
                  >
                    {format(new Date(date * 1000), "PPP", {
                      awareOfUnicodeTokens: true
                    })}
                  </Typography>
                  <Typography align="center" variant="h4">
                    <b>{title}</b>
                  </Typography>
                </div>
                <img className={classes.img} src={src} alt="" />
                <div className="p-3">
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" paragraph>
                Other arcticles
              </Typography>
              {otherArticles.map(blogPost => (
                <div key={blogPost.id} className="mb-3">
                  <BlogCard
                    src={blogPost.image_src}
                    title={blogPost.title}
                    content={blogPost.content}
                    date={blogPost.date}
                    url={blogPost.url}
                  />
                </div>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

BlogPost.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.number,
  src: PropTypes.string,
  content: PropTypes.string,
  otherArticles: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(BlogPost);
