import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@material-ui/core";
import ActionPaper from "../../../shared/components/ActionPaper";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import AddPostOptions from "./AddPostOptions";

const now = new Date();

class AddPost extends PureComponent {
  state = {
    files: [],
    cropFunction: null,
    uploadAt: now,
    loading: false,
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

  onChangeUploadAt = uploadAt => {
    this.setState({
      uploadAt
    });
  };

  onCropperClose = () => {
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
        text: "Your post has been uploaded"
      });
      onClose();
    }, 1500);
  };

  render() {
    const { files, uploadAt, cropperFile, loading } = this.state;
    const {
      Dropzone,
      EmojiTextArea,
      DateTimePicker,
      ImageCropper,
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
              DateTimePicker={DateTimePicker}
              uploadAt={uploadAt}
              onChangeUploadAt={this.onChangeUploadAt}
              onCrop={this.onCrop}
              ImageCropper={ImageCropper}
              cropperFile={cropperFile}
              onCropperClose={this.onCropperClose}
            />
          }
          actions={
            <Fragment>
              <Box mr={1}>
                <Button onClick={onClose} disabled={loading}>
                  Back
                </Button>
              </Box>
              <Button
                onClick={this.handleUpload}
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
  ImageCropper: PropTypes.elementType
};

export default AddPost;
