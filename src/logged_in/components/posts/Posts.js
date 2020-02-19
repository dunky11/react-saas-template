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
      ImageCropper,
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
            ImageCropper={ImageCropper}
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
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired
};

export default Posts;
