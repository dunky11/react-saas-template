import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import {
  TextField,
  IconButton,
  Collapse,
  FormHelperText,
  Box,
  Grid,
  withStyles
} from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CloseIcon from "@material-ui/icons/Close";
import countWithEmojis from "../functions/countWithEmojis";

const styles = theme => ({
  "@global": {
    ".emoji-mart-category-label": theme.typography.body1,
    ".emoji-mart-bar": { display: "none !important" },
    ".emoji-mart-search input": {
      ...theme.typography.body1,
      ...theme.border
    },
    ".emoji-mart-search": {
      marginTop: `${theme.spacing(1)}px !important`,
      paddingRight: `${theme.spacing(1)}px !important`,
      paddingLeft: `${theme.spacing(1)}px !important`,
      paddingBottom: `${theme.spacing(1)}px !important`
    },
    ".emoji-mart-search-icon": {
      top: "5px !important",
      right: "14px !important",
      fontSize: 20
    },
    ".emoji-mart-scroll": {
      height: 240
    },
    ".emoji-mart": {
      ...theme.border
    }
  },
  floatButtonWrapper: {
    position: "absolute",
    bottom: 12,
    right: 12
  },
  floatButtonSVG: {
    color: theme.palette.primary.light
  },
  relative: {
    position: "relative"
  }
});

class EmojiTextarea extends PureComponent {
  state = {
    open: false,
    value: "",
    characters: 0
  };

  onSelectEmoji = emoji => {
    let { value } = this.state;
    const { maxCharacters, onChange } = this.props;
    let characters;
    value += emoji.native;
    if (maxCharacters) {
      characters = countWithEmojis(value);
      if (characters > maxCharacters) {
        return;
      }
    }
    if (onChange) {
      onChange(value, characters);
    }
    this.setState({ value, characters });
  };

  handleTextFieldChange = event => {
    const { maxCharacters, onChange } = this.props;
    const { target } = event;
    const { value } = target;
    let characters;
    if (maxCharacters) {
      characters = countWithEmojis(value);
      if (characters > maxCharacters) {
        return;
      }
    }
    if (onChange) {
      onChange(value, characters);
    }
    this.setState({ value, characters });
  };

  /**
   * Emojis whose unified is greater than 5 sometimes
   * are not displayed correcty in the browser.
   * We won't display them.
   */
  emojisToShowFilter = emoji => {
    if (emoji.unified.length > 5) {
      return false;
    }
    return true;
  };

  toggleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open, value, characters } = this.state;
    const {
      theme,
      classes,
      rightContent,
      placeholder,
      maxCharacters,
      emojiSet,
      inputClassName
    } = this.props;
    return (
      <Fragment>
        <Grid spacing={0} container>
          <Grid
            item
            xs={rightContent ? 8 : 12}
            sm={rightContent ? 9 : 12}
            lg={rightContent ? 10 : 12}
            className={classes.relative}
          >
            <TextField
              fullWidth
              multiline
              variant="outlined"
              rows={6}
              onInput={this.handleTextFieldChange}
              value={value}
              placeholder={placeholder}
              InputProps={{
                classes: {
                  notchedOutline: inputClassName ? inputClassName : null
                }
              }}
            />
            <div className={classes.floatButtonWrapper}>
              <IconButton onClick={this.toggleOpen}>
                {open ? (
                  <CloseIcon color="primary" />
                ) : (
                  <EmojiEmotionsIcon color="primary" />
                )}
              </IconButton>
            </div>
          </Grid>
          {rightContent && (
            <Grid item xs={4} sm={3} lg={2}>
              {rightContent}
            </Grid>
          )}
        </Grid>
        {maxCharacters && (
          <FormHelperText error={characters >= maxCharacters}>
            {`${characters}/${maxCharacters} characters`}
          </FormHelperText>
        )}
        <Collapse in={open}>
          <Box mt={1}>
            <Picker
              set={emojiSet}
              color={theme.palette.primary.main}
              style={{ width: "100%" }}
              onSelect={this.onSelectEmoji}
              emojisToShowFilter={this.emojisToShowFilter}
            />
          </Box>
        </Collapse>
      </Fragment>
    );
  }
}

EmojiTextarea.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  emojiSet: PropTypes.string.isRequired,
  rightContent: PropTypes.element,
  placeholder: PropTypes.string,
  maxCharacters: PropTypes.number,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(EmojiTextarea);
