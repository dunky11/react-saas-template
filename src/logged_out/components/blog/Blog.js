import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import classNames from "classnames";
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
  }
});

class Blog extends PureComponent {
  componentDidMount() {
    const { selectBlog } = this.props;
    selectBlog();
  }

  getVerticalBlogposts = () => {
    const { width, blogPosts } = this.props;
    const gridRows = [[], [], []];
    let rows;
    let xs;
    if (isWidthUp("md", width)) {
      rows = 3;
      xs = 4;
    } else if (isWidthUp("sm", width)) {
      rows = 2;
      xs = 6;
    } else {
      rows = 1;
      xs = 12;
    }
    blogPosts.forEach((blogPost, index) => {
      gridRows[index % rows].push(
        <Grid key={blogPost.id} item xs={12} className="mb-3">
          <BlogCard
            src={blogPost.imageSrc}
            title={blogPost.title}
            content={blogPost.content}
            date={blogPost.date}
            url={blogPost.url}
          />
        </Grid>
      );
    });
    return gridRows.map((element, index) => (
      <Grid key={index} item xs={xs}>
        {element}
      </Grid>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classNames(
          "lg-p-top d-flex justify-content-center",
          classes.wrapper
        )}
      >
        <div className={classes.blogContentWrapper}>
          <Grid container spacing={3}>
            {this.getVerticalBlogposts()}
          </Grid>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  selectBlog: PropTypes.func,
  classes: PropTypes.object,
  width: PropTypes.string,
  blogPosts: PropTypes.array
};

export default withWidth()(withStyles(styles, { withTheme: true })(Blog));
