import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  withStyles
} from "@material-ui/core";
import Bordered from "../../../shared/Bordered";
import ImagecropperDialog from "../../../shared/ImagecropperDialog";

const styles = theme => ({
  floatButtonWrapper: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000
  },
  floatButtonSVG: {
    height: "1em",
    width: "1em",
    color: theme.palette.action.active
  },
  inputRoot: {
    width: 190,
    "@media (max-width:  400px)": {
      width: 160
    },
    "@media (max-width:  360px)": {
      width: 140
    },
    "@media (max-width:  340px)": {
      width: 120
    }
  },
  uploadIcon: {
    fontSize: 48,
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut
    })
  },
  tabsIndicator: {
    backgroundColor: theme.palette.secondary.main
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    borderStyle: "solid",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    fontWeight: theme.typography.fontWeightRegular,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white",
    "&:hover": {
      color: theme.palette.primary.main,
      opacity: 1
    },
    minHeight: 0
  },
  imgWrapper: { position: "relative" },
  img: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: theme.shape.borderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  tabSelected: {
    color: `${theme.palette.text.primary} !important`,
    fontWeight: theme.typography.fontWeightMedium,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.23)"
  },
  uploadText: {
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut
    })
  },
  numberInput: {
    width: 110
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px"
  },
  emojiTextArea: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -1
  }
});

const inputOptions = ["None", "Slow", "Normal", "Fast"];

class AddPostOptions extends PureComponent {
  state = {
    option1: "None",
    option2: "None",
    option3: "None",
    option4: "None"
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  passOnEmojiTextareaChange = (value, characters) => {
    const { onEmojiTextareaChange, tabIndex } = this.props;
    if (tabIndex === 0) {
      onEmojiTextareaChange(value, characters, "category1");
    } else {
      onEmojiTextareaChange(value, characters, "category2");
    }
  };

  printFile = () => {
    const { Dropzone, classes, files, deleteItem, onDrop } = this.props;
    if (files[0]) {
      return (
        <div className={classes.imgWrapper}>
          <img
            alt=""
            src={files[0].preview}
            className={classes.img}
            style={{ height: 151 }}
          />
          <div className={classes.floatButtonWrapper}>
            <IconButton onClick={deleteItem}>
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                className={classes.floatButtonSVG}
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      );
    }
    return (
      <Dropzone accept="image/png, image/jpeg" onDrop={onDrop} fullHeight>
        <span className={classes.uploadText}>
          Click / Drop file <br /> here
        </span>
      </Dropzone>
    );
  };

  render() {
    const {
      EmojiTextArea,
      Imagecropper,
      classes,
      DateTimePicker,
      tabIndex,
      cropperFile,
      onCrop,
      oncropperClose,
      handleTabChange,
      category1Value,
      category2Value,
      category1Characters,
      category2Characters,
      uploadAt,
      onChangeUploadAt
    } = this.props;
    const { option1, option2, option3, option4 } = this.state;
    const inputs = [
      {
        state: option1,
        label: "Option 1",
        stateName: "option1"
      },
      {
        state: option2,
        label: "Option 2",
        stateName: "option2"
      },
      {
        state: option3,
        label: "Option 3",
        stateName: "option3"
      },
      {
        state: option4,
        label: "Option 4",
        stateName: "option4"
      }
    ];
    return (
      <Fragment>
        {Imagecropper && (
          <ImagecropperDialog
            open={cropperFile ? true : false}
            Imagecropper={Imagecropper}
            src={cropperFile ? cropperFile.preview : ""}
            onCrop={onCrop}
            onClose={oncropperClose}
            aspectRatio={4 / 3}
          />
        )}
        <Typography paragraph variant="h6">
          Upload Image
        </Typography>
        <div className="mb-2">
          <Tabs
            value={tabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
            classes={{
              indicator: "d-none"
            }}
            style={{ minHeight: 0 }}
          >
            <Tab
              label="Category 1"
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected
              }}
            />
            <Tab
              label="Category 2"
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected
              }}
            />
          </Tabs>
          {EmojiTextArea && (
            <EmojiTextArea
              inputClassName={classes.emojiTextArea}
              onChange={this.passOnEmojiTextareaChange}
              value={tabIndex === 0 ? category1Value : category2Value}
              characters={
                tabIndex === 0 ? category1Characters : category2Characters
              }
              maxChars={2200}
              rightContent={this.printFile()}
              emojiSet="google"
            />
          )}
        </div>
        <Typography paragraph variant="h6" className="mt-3">
          Options
        </Typography>
        <List className="w-100">
          <Bordered disableVerticalPadding>
            <ListItem
              divider
              disableGutters
              className="listItemSecondaryPadding"
            >
              <ListItemText>
                <Typography variant="body2">Upload at</Typography>
              </ListItemText>
              <ListItemSecondaryAction className="pr-3">
                {DateTimePicker && (
                  <DateTimePicker
                    value={uploadAt}
                    onChange={onChangeUploadAt}
                    disablePast
                  />
                )}
              </ListItemSecondaryAction>
            </ListItem>
            {inputs.map((element, index) => (
              <ListItem
                className="listItemSecondaryPadding"
                disableGutters
                divider={index !== inputs.length - 1}
                key={index}
              >
                <ListItemText>
                  <Typography variant="body2">{element.label}</Typography>
                </ListItemText>
                <FormControl variant="outlined">
                  <ListItemSecondaryAction className="pr-3">
                    <Select
                      value={element.state}
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          name={element.stateName}
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                        />
                      }
                    >
                      {inputOptions.map(innerElement => (
                        <MenuItem value={innerElement} key={innerElement}>
                          {innerElement}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </FormControl>
              </ListItem>
            ))}
          </Bordered>
        </List>
      </Fragment>
    );
  }
}

AddPostOptions.propTypes = {
  onEmojiTextareaChange: PropTypes.func,
  DateTimePicker: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  Imagecropper: PropTypes.elementType,
  classes: PropTypes.object,
  tabIndex: PropTypes.number,
  cropperFile: PropTypes.object,
  onCrop: PropTypes.func,
  oncropperClose: PropTypes.func,
  files: PropTypes.array,
  deleteItem: PropTypes.func,
  onDrop: PropTypes.func,
  handleTabChange: PropTypes.func,
  category1Value: PropTypes.string,
  category2Value: PropTypes.string,
  category1Characters: PropTypes.number,
  category2Characters: PropTypes.number,
  uploadAt: PropTypes.instanceOf(Date),
  onChangeUploadAt: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(AddPostOptions);
