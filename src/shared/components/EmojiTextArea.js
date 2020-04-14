import React, { Fragment, useState, useCallback } from "react";
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

/**
 * Emojis whose unified is greater than 5 sometimes
 * are not displayed correcty in the browser.
 * We won't display them.
 */
const emojisToShowFilter = emoji => {
  if (emoji.unified.length > 5) {
    return false;
  }
  return true;
};

function EmojiTextarea(props) {
  const {
    theme,
    classes,
    rightContent,
    placeholder,
    maxCharacters,
    emojiSet,
    inputClassName,
    onChange
  } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [characters, setCharacters] = useState(0);

  const onSelectEmoji = useCallback(
    emoji => {
      let _characters;
      let _value = value + emoji.native;
      if (maxCharacters) {
        _characters = countWithEmojis(_value);
        if (_characters > maxCharacters) {
          return;
        }
      }
      if (onChange) {
        onChange(_value, _characters);
      }
      setValue(_value);
      setCharacters(_characters);
    },
    [value, setValue, setCharacters, maxCharacters, onChange]
  );

  const handleTextFieldChange = useCallback(
    event => {
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
      setValue(value);
      setCharacters(characters);
    },
    [maxCharacters, onChange, setValue, setCharacters]
  );

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

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
            onInput={handleTextFieldChange}
            value={value}
            placeholder={placeholder}
            InputProps={{
              classes: {
                notchedOutline: inputClassName ? inputClassName : null
              }
            }}
          />
          <div className={classes.floatButtonWrapper}>
            <IconButton onClick={toggleOpen}>
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
            onSelect={onSelectEmoji}
            emojisToShowFilter={emojisToShowFilter}
          />
        </Box>
      </Collapse>
    </Fragment>
  );
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
