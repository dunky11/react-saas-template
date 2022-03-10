import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import BlogCard from "./BlogCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function getVerticalBlogPosts(isWidthUpSm, isWidthUpMd, blogPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUpMd) {
    rows = 3;
    xs = 4;
  } else if (isWidthUpSm) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  blogPosts.forEach((blogPost, index) => {
    gridRows[index % rows].push(
      <Grid key={blogPost.id} item xs={12}>
        <Box mb={3}>
          <BlogCard
            src={blogPost.src}
            title={blogPost.title}
            snippet={blogPost.snippet}
            date={blogPost.date}
            url={blogPost.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Blog(props) {
  const { classes, blogPosts, selectBlog, theme } = props;

  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    selectBlog();
  }, [selectBlog]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.blogContentWrapper}>
        <Grid container spacing={3}>
          {getVerticalBlogPosts(isWidthUpSm, isWidthUpMd, blogPosts)}
        </Grid>
      </div>
    </Box>
  );
}

Blog.propTypes = {
  selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles, { withTheme: true })(Blog);
