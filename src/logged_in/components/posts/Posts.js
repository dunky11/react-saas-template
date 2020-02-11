import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import AddPost from "./AddPost";

class Posts extends PureComponent {
  state = {
    addPostPaperOpen: false
  };

  componentDidMount() {
    const { selectPosts } = this.props;
    selectPosts();
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
      posts
    } = this.props;
    return (
      <Fragment>
        {addPostPaperOpen ? (
          <AddPost
            onClose={this.closeAddPostModal}
            open={addPostModalOpen}
            EmojiTextArea={EmojiTextArea}
            ImageCroppr={ImageCroppr}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            pushMessageToSnackbar={pushMessageToSnackbar}
          />
        ) : (
          <PostContent
            openAddPostModal={this.openAddPostModal}
            posts={posts}
            pushMessageToSnackbar={pushMessageToSnackbar}
          />
        )}
      </Fragment>
    );
  }
}

Posts.propTypes = {
  // TODO find correct PropType
  EmojiTextArea: PropTypes.any,
  // TODO find correct PropType
  ImageCroppr: PropTypes.any,
  // TODO find correct PropType
  Dropzone: PropTypes.any,
  // TODO find correct PropType
  DateTimePicker: PropTypes.any,
  posts: PropTypes.array.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired
};

export default Posts;
