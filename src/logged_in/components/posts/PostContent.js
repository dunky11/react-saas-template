import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between"
  }
};

class PostContent extends PureComponent {
  state = {
    page: 0,
    deletePostDialogOpen: false,
    deletePostLoading: false
  };

  rowsPerPage = 25;

  closeDeletePostDialog = () => {
    this.setState({
      deletePostDialogOpen: false,
      deletePostLoading: false
    });
  };

  deletePost = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ deletePostLoading: true });
    setTimeout(() => {
      this.setState({
        deletePostLoading: false,
        deletePostDialogOpen: false
      });
      pushMessageToSnackbar({
        text: "Your scheduled post has been deleted"
      });
    }, 1500);
  };

  onDelete = () => {
    this.setState({
      deletePostDialogOpen: true
    });
  };

  handleChangePage = (__, page) => {
    this.setState({ page });
  };

  printImageGrid = () => {
    const options = [];
    options.push({
      name: "Delete",
      onClick: this.onDelete,
      icon: <DeleteIcon />
    });
    const { posts } = this.props;
    const { page } = this.state;
    if (posts.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {posts
              .slice(
                page * this.rowsPerPage,
                page * this.rowsPerPage + this.rowsPerPage
              )
              .map(element => (
                <Grid item xs={6} sm={4} md={3} key={element.id}>
                  <SelfAligningImage
                    src={element.src}
                    title={element.name}
                    timeStamp={element.timestamp}
                    options={options}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box m={2}>
        <HighlightedInformation>
          No posts added yet. Click on &quot;NEW&quot; to create your first one.
        </HighlightedInformation>
      </Box>
    );
  };

  render() {
    const { page, deletePostDialogOpen, deletePostLoading } = this.state;
    const { openAddPostModal, posts, classes } = this.props;

    return (
      <Paper>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Your Posts</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={openAddPostModal}
            disableElevation
          >
            Add Post
          </Button>
        </Toolbar>
        <Divider />
        {this.printImageGrid()}
        <TablePagination
          component="div"
          count={posts.length}
          rowsPerPage={this.rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          classes={{
            select: classes.dNone,
            selectIcon: classes.dNone,
            actions: posts.length > 0 ? classes.dBlock : classes.dNone,
            caption: posts.length > 0 ? classes.dBlock : classes.dNone
          }}
          labelRowsPerPage=""
        />
        <ConfirmationDialog
          open={deletePostDialogOpen}
          title="Confirmation"
          content="Do you really want to delete the post?"
          onClose={this.closeDeletePostDialog}
          loading={deletePostLoading}
          onConfirm={this.deletePost}
        />
      </Paper>
    );
  }
}

PostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  pushMessageToSnackbar: PropTypes.func
};

export default withStyles(styles)(PostContent);
