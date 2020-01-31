import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import ActionPaper from "../../../shared/ActionPaper";
import AddScheduledPostOptions from "./AddScheduledPostOptions";

const now = new Date();

const defaultState = {
  files: [],
  cropFunction: null,
  captionValue: "",
  firstCommentValue: "",
  captionCharacters: 0,
  firstCommentCharacters: 0,
  deleteLaterOpen: false,
  locationOpen: false,
  location: null,
  uploadAt: now,
  // 3 days
  deleteAt: new Date(now.getTime() + 259200000),
  loading: false,
  progress: 0,
  tabIndex: 0,
  cropprFile: null,
  editScheduledPostId: null
};

function dataURItoBlob(dataURI) {
  return new Promise(resolve => {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(",")[1]);
    // separate out the mime component
    const mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];
    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    const ia = new Uint8Array(ab);
    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    const blob = new Blob([ab], { type: mimeString });
    resolve(blob);
  });
}

/**
 * We cannot call JSON.stringify on an file object, thats why we have to
 * manually convert it to an object, which can be converted to json with
 * JSON.stringify.
 * Taken from : https://stackoverflow.com/questions/24139216/js-input-file-to-json-with-for-example-json-stringify
 */
function getBlob(blobUrl) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", blobUrl, true);
    ajax.responseType = "blob";
    ajax.onload = async () => {
      if (ajax.status === 200) {
        resolve(ajax.response);
      } else {
        reject();
      }
    };
    ajax.send();
  });
}

class AddScheduledPost extends PureComponent {
  state = defaultState;

  componentDidMount() {
    const { receiveEditFunctionFromChild } = this.props;
    receiveEditFunctionFromChild(this.onEdit);
  }

  acceptDrop = file => {
    this.setState({ files: [file] });
  };

  onDrop = (acceptedFiles, rejectedFiles, ___, skipCrop) => {
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
      if (skipCrop) {
        this.acceptDrop(file);
      } else {
        this.setState({ cropprFile: file });
      }
    }
  };

  onEmojiTextareaChange = (value, characters, type) => {
    if (type === "caption") {
      this.setState({
        captionValue: value,
        captionCharacters: characters
      });
    } else {
      this.setState({
        firstCommentValue: value,
        firstCommentCharacters: characters
      });
    }
  };

  onChangeUploadAt = uploadAt => {
    const { deleteAt } = this.state;
    const uploadAtUnix = uploadAt.getTime();
    if (uploadAtUnix > deleteAt.getTime() + 60000) {
      this.setState({
        deleteAt: new Date(uploadAt.getTime() + 60000),
        uploadAt
      });
    } else {
      this.setState({ uploadAt });
    }
  };

  onChangeDeleteAt = deleteAt => {
    this.setState({ deleteAt });
  };

  onCropprClose = () => {
    this.setState({ cropprFile: null });
  };

  onCrop = dataUrl => {
    const { cropprFile } = this.state;
    const file = cropprFile;
    file.preview = dataUrl;
    file.isBlob = true;
    this.acceptDrop(file);
    this.setState({ cropprFile: null });
  };

  getBlobs = async () => {
    const { files } = this.state;
    const promises = [];
    for (let i = 0; i < files.length; i += 1) {
      /**
       * When we used the croppr, it means that the preview is in dataUri format, we have to convert
       * it to an blob object.
       */
      if (files[i].isBlob) {
        promises.push(dataURItoBlob(files[i].preview));
      } else {
        promises.push(getBlob(files[i].preview));
      }
    }
    return Promise.all(promises).then(values => values);
  };

  disableUploadButton = () => {
    const { files } = this.state;
    if (files.length === 1) {
      return false;
    }
    return true;
  };

  handleUpload = () => {
    const { pushMessageToSnackbar, onClose } = this.props;
    pushMessageToSnackbar({
      text: "Your post has been scheduled"
    });
    onClose();
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  handleTabChange = (__, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const {
      files,
      captionValue,
      firstCommentValue,
      captionCharacters,
      firstCommentCharacters,
      deleteLaterOpen,
      locationOpen,
      location,
      uploadAt,
      deleteAt,
      tabIndex,
      cropprFile,
      editScheduledPostId
    } = this.state;
    const {
      Dropzone,
      EmojiTextArea,
      DateTimePicker,
      ImageCroppr,
      onClose
    } = this.props;
    return (
      <Fragment>
        <ActionPaper
          helpPadding
          maxWidth="md"
          content={
            <AddScheduledPostOptions
              EmojiTextArea={EmojiTextArea}
              Dropzone={Dropzone}
              files={files}
              onDrop={this.onDrop}
              deleteItem={this.deleteItem}
              captionValue={captionValue}
              firstCommentValue={firstCommentValue}
              captionCharacters={captionCharacters}
              firstCommentCharacters={firstCommentCharacters}
              onEmojiTextareaChange={this.onEmojiTextareaChange}
              DateTimePicker={DateTimePicker}
              deleteLaterOpen={deleteLaterOpen}
              locationOpen={locationOpen}
              location={location}
              addLocation={this.addLocation}
              uploadAt={uploadAt}
              deleteAt={deleteAt}
              onChangeUploadAt={this.onChangeUploadAt}
              onChangeDeleteAt={this.onChangeDeleteAt}
              handleTabChange={this.handleTabChange}
              tabIndex={tabIndex}
              onCrop={this.onCrop}
              ImageCroppr={ImageCroppr}
              cropprFile={cropprFile}
              onCropprClose={this.onCropprClose}
              editScheduledPostId={editScheduledPostId}
            />
          }
          actions={
            <Fragment>
              <Button onClick={onClose} className="mr-1">
                Back
              </Button>
              <Button
                onClick={this.handleUpload}
                className="mr-1"
                variant="contained"
                color="secondary"
                disabled={files.length === 1}
              >
                Upload
              </Button>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

AddScheduledPost.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  onClose: PropTypes.func,
  // TODO find correct PropType
  Dropzone: PropTypes.any,
  // TODO find correct PropType
  EmojiTextArea: PropTypes.any,
  // TODO find correct PropType
  DateTimePicker: PropTypes.any,
  // TODO find correct PropType
  ImageCroppr: PropTypes.any,
  receiveEditFunctionFromChild: PropTypes.func
};

export default AddScheduledPost;
