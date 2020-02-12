import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import ActionPaper from "../../../shared/ActionPaper";
import ButtonCircularProgress from "../../../shared/ButtonCircularProgress";
import AddPostOptions from "./AddPostOptions";

const now = new Date();

class AddPost extends PureComponent {
  state = {
    files: [],
    cropFunction: null,
    category1Value: "",
    category2Value: "",
    category1Characters: 0,
    category2Characters: 0,
    uploadAt: now,
    loading: false,
    tabIndex: 0,
    cropperFile: null
  };

  acceptDrop = file => {
    this.setState({ files: [file] });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const { pushMessageToSnackbar } = this.props;
    if (acceptedFiles.length + rejectedFiles.length > 1) {
      pushMessageToSnackbar({
        isErrorMessage: true,
        text: "You cannot upload more than one file at once"
      });
    } else if (acceptedFiles.length === 0) {
      pushMessageToSnackbar({
        isErrorMessage: true,
        text: "The file you wanted to upload isn't an image"
      });
    } else if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0];
      file.preview = URL.createObjectURL(file);
      file.key = new Date().getTime();
      this.setState({ cropperFile: file });
    }
  };

  onEmojiTextareaChange = (value, characters, type) => {
    if (type === "category1") {
      this.setState({
        category1Value: value,
        category1Characters: characters
      });
    } else {
      this.setState({
        category2Value: value,
        category2Characters: characters
      });
    }
  };

  onChangeUploadAt = uploadAt => {
    this.setState({
      uploadAt
    });
  };

  oncropperClose = () => {
    this.setState({ cropperFile: null });
  };

  deleteItem = () => {
    this.setState({ files: [] });
  };

  onCrop = dataUrl => {
    const { cropperFile } = this.state;
    const file = cropperFile;
    file.preview = dataUrl;
    this.acceptDrop(file);
    this.setState({ cropperFile: null });
  };

  handleUpload = () => {
    const { pushMessageToSnackbar, onClose } = this.props;
    this.setState({ loading: true });
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your post has been scheduled"
      });
      onClose();
    }, 1500);
  };

  handleTabChange = (__, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const {
      files,
      category1Value,
      category2Value,
      category1Characters,
      category2Characters,
      uploadAt,
      tabIndex,
      cropperFile,
      loading
    } = this.state;
    const {
      Dropzone,
      EmojiTextArea,
      DateTimePicker,
      Imagecropper,
      onClose
    } = this.props;
    return (
      <Fragment>
        <ActionPaper
          helpPadding
          maxWidth="md"
          content={
            <AddPostOptions
              EmojiTextArea={EmojiTextArea}
              Dropzone={Dropzone}
              files={files}
              onDrop={this.onDrop}
              deleteItem={this.deleteItem}
              category1Value={category1Value}
              category2Value={category2Value}
              category1Characters={category1Characters}
              category2Characters={category2Characters}
              onEmojiTextareaChange={this.onEmojiTextareaChange}
              DateTimePicker={DateTimePicker}
              uploadAt={uploadAt}
              onChangeUploadAt={this.onChangeUploadAt}
              handleTabChange={this.handleTabChange}
              tabIndex={tabIndex}
              onCrop={this.onCrop}
              Imagecropper={Imagecropper}
              cropperFile={cropperFile}
              oncropperClose={this.oncropperClose}
            />
          }
          actions={
            <Fragment>
              <Button onClick={onClose} className="mr-1" disabled={loading}>
                Back
              </Button>
              <Button
                onClick={this.handleUpload}
                className="mr-1"
                variant="contained"
                color="secondary"
                disabled={files.length === 0 || loading}
              >
                Upload {loading && <ButtonCircularProgress />}
              </Button>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

AddPost.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  onClose: PropTypes.func,
  Dropzone: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  Imagecropper: PropTypes.elementType
};

export default AddPost;
