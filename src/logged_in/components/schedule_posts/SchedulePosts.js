import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import ScheduledPostContent from "./ScheduledPostContent";
import AddScheduledPost from "./AddScheduledPost";
import smoothScrollTop from "../../../shared/smoothScrollTop";

class SchedulePosts extends PureComponent {
  state = {
    addPostPaperOpen: false
  };

  componentDidMount() {
    const { selectSchedulePosts } = this.props;
    selectSchedulePosts();
  }

  openAddPostModal = () => {
    this.setState({ addPostPaperOpen: true });
  };

  closeAddPostModal = () => {
    this.setState({ addPostPaperOpen: false });
  };

  onEdit = element => {
    this.setState({ addPostPaperOpen: true }, () => {
      this.editFunc(element);
    });
  };

  receiveEditFunctionFromChild = func => {
    this.editFunc = func;
  };

  render() {
    const { addPostPaperOpen, addPostModalOpen } = this.state;
    const {
      EmojiTextArea,
      ImageCroppr,
      Dropzone,
      DateTimePicker,
      pushMessageToSnackbar,
      fetchScheduledPosts,
      scheduledPosts
    } = this.props;
    return (
      <Fragment>
        {addPostPaperOpen ? (
          <AddScheduledPost
            onClose={this.closeAddPostModal}
            open={addPostModalOpen}
            EmojiTextArea={EmojiTextArea}
            ImageCroppr={ImageCroppr}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            pushMessageToSnackbar={pushMessageToSnackbar}
            fetchScheduledPosts={fetchScheduledPosts}
            receiveEditFunctionFromChild={this.receiveEditFunctionFromChild}
          />
        ) : (
          <ScheduledPostContent
            openAddPostModal={this.openAddPostModal}
            scheduledPosts={scheduledPosts}
            fetchScheduledPosts={fetchScheduledPosts}
            pushMessageToSnackbar={pushMessageToSnackbar}
            onEdit={this.onEdit}
          />
        )}
      </Fragment>
    );
  }
}

SchedulePosts.propTypes = {
  // TODO find correct PropType
  EmojiTextArea: PropTypes.any,
  // TODO find correct PropType
  ImageCroppr: PropTypes.any,
  // TODO find correct PropType
  Dropzone: PropTypes.any,
  // TODO find correct PropType
  DateTimePicker: PropTypes.any,
  fetchScheduledPosts: PropTypes.func,
  scheduledPosts: PropTypes.array,
  pushMessageToSnackbar: PropTypes.func,
  selectSchedulePosts: PropTypes.func.isRequired
};

export default SchedulePosts;
