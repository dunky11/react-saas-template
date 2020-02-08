import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import ScheduledPostContent from "./ScheduledPostContent";
import AddScheduledPost from "./AddScheduledPost";

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

  render() {
    const { addPostPaperOpen, addPostModalOpen } = this.state;
    const {
      EmojiTextArea,
      ImageCroppr,
      Dropzone,
      DateTimePicker,
      pushMessageToSnackbar,
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
          />
        ) : (
          <ScheduledPostContent
            openAddPostModal={this.openAddPostModal}
            scheduledPosts={scheduledPosts}
            pushMessageToSnackbar={pushMessageToSnackbar}
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
  scheduledPosts: PropTypes.array,
  pushMessageToSnackbar: PropTypes.func,
  selectSchedulePosts: PropTypes.func.isRequired
};

export default SchedulePosts;
