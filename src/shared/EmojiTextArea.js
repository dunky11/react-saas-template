import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import {
  TextField,
  IconButton,
  Collapse,
  FormHelperText,
  withStyles
} from "@material-ui/core";
import countWithEmojis from "./countWithEmojis";

const styles = theme => ({
  "@global": {
    ".emoji-mart-category-label": theme.typography.body1,
    ".emoji-mart-bar": { display: "none !important" },
    ".emoji-mart-search input": {
      ...theme.typography.body1,
      ...theme.border
    },

    ".emoji-mart-search-icon": {
      top: 8,
      right: 20,
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
    height: "1em",
    width: "1em",
    color: theme.palette.primary.light
  }
});

class EmojiTextarea extends PureComponent {
  state = {
    open: false
  };

  onSelectEmoji = emoji => {
    let { value } = this.props;
    const { maxCharacters, onChange } = this.props;
    let characters;
    value += emoji.native;
    if (maxCharacters) {
      characters = countWithEmojis(value);
    }
    onChange(value, characters);
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
    onChange(value, characters);
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
    const { open } = this.state;
    const {
      theme,
      classes,
      rightContent,
      value,
      placeholder,
      characters,
      maxCharacters,
      emojiSet,
      inputClassName
    } = this.props;
    return (
      <Fragment>
        <div className="d-flex">
          <div
            style={{
              position: "relative",
              flexGrow: 20
            }}
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
                ) : (
                  <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className={classes.floatButtonSVG}
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          {rightContent && (
            <div style={{ maxWidth: "25%" }}>{rightContent}</div>
          )}
        </div>
        {maxCharacters && (
          <FormHelperText error={characters >= maxCharacters}>
            {`${characters}/${maxCharacters} characters`}
          </FormHelperText>
        )}
        <Collapse in={open}>
          <div className="mt-1">
            <Picker
              set={emojiSet}
              color={theme.palette.primary.main}
              style={{ width: "100%" }}
              onSelect={this.onSelectEmoji}
              emojisToShowFilter={this.emojisToShowFilter}
            />
          </div>
        </Collapse>
      </Fragment>
    );
  }
}

EmojiTextarea.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  emojiSet: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rightContent: PropTypes.element,
  placeholder: PropTypes.string,
  characters: PropTypes.number,
  maxCharacters: PropTypes.number,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(EmojiTextarea);
