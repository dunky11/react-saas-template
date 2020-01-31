import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Button,
  Paper
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SelfAligningImage from "../../../shared/SelfAligningImage";
import HighlightedInformation from "../../../shared/HighlightedInformation";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";

class ScheduledPostContent extends PureComponent {
  state = {
    page: 0,
    deleteScheduledPostDialogOpen: false,
    deleteScheduledPostLoading: false
  };

  rowsPerPage = 25;

  closeDeleteScheduledPostDialog = () => {
    this.setState({
      deleteScheduledPostDialogOpen: false,
      deleteScheduledPostLoading: false
    });
  };

  deleteScheduledPost = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ deleteScheduledPostLoading: true });
    setTimeout(() => {
      this.setState({
        deleteScheduledPostLoading: false,
        deleteScheduledPostDialogOpen: false
      });
      pushMessageToSnackbar({
        text: "Your scheduled post has been deleted"
      });
    }, 1500);
  };

  onDelete = () => {
    this.setState({
      deleteScheduledPostDialogOpen: true
    });
  };

  handleChangePage = (__, page) => {
    this.setState({ page });
  };

  printImageGrid = () => {
    const { scheduledPosts } = this.props;
    const { page } = this.state;
    if (scheduledPosts.length > 0) {
      return (
        <Grid container spacing={1} className="p-1">
          {scheduledPosts
            .slice(
              page * this.rowsPerPage,
              page * this.rowsPerPage + this.rowsPerPage
            )
            .map(element => (
              <Grid item xs={4} md={3} key={element.id}>
                <SelfAligningImage
                  src={element.src}
                  title="Picture"
                  timeStamp={element.timestamp}
                  id={element.id}
                  onDelete={this.onDelete}
                />
              </Grid>
            ))}
        </Grid>
      );
    }
    return (
      <HighlightedInformation className="m-2">
        No scheduled posts added yet. Click on &quot;NEW&quot; to create your
        first one.
      </HighlightedInformation>
    );
  };

  render() {
    const {
      page,
      deleteScheduledPostDialogOpen,
      deleteScheduledPostLoading
    } = this.state;
    const { openAddPostModal, scheduledPosts } = this.props;

    return (
      <Paper>
        <Toolbar className="justify-content-between">
          <Typography variant="h6">Your scheduled posts</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={openAddPostModal}
          >
            <AddCircleOutlineIcon className="mr-1" fontSize="small" />
            New
          </Button>
        </Toolbar>
        <Divider />
        {this.printImageGrid()}
        <TablePagination
          component="div"
          count={scheduledPosts.length}
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
            select: "d-none",
            selectIcon: "d-none",
            actions: scheduledPosts.length > 0 ? "d-block" : "d-none",
            caption: scheduledPosts.length > 0 ? "d-block" : "d-none"
          }}
          labelRowsPerPage=""
        />
        <ConfirmationDialog
          open={deleteScheduledPostDialogOpen}
          title="Confirmation"
          content="Do you really want to delete the post?"
          onClose={this.closeDeleteScheduledPostDialog}
          loading={deleteScheduledPostLoading}
          onConfirm={this.deleteScheduledPost}
        />
      </Paper>
    );
  }
}

ScheduledPostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  scheduledPosts: PropTypes.array,
  pushMessageToSnackbar: PropTypes.func
};

export default ScheduledPostContent;
