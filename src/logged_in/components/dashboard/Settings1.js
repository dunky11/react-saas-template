import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ListItemText,
  OutlinedInput,
  ExpansionPanelDetails,
  MenuItem,
  FormControl,
  Select,
  Box,
  withStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import withWidth from "@material-ui/core/withWidth";
import Bordered from "../../../shared/components/Bordered";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = (theme) => ({
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  expansionPanelDetails: {
    paddintTop: theme.spacing(0),
    justifyContent: "flex-end",
  },
});
const inputOptions = ["None", "Slow", "Normal", "Fast"];

function Settings1(props) {
  const { classes, pushMessageToSnackbar } = props;
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDefaultLoading, setIsDefaultLoading] = useState(false);
  const [option1, setOption1] = useState("None");
  const [option2, setOption2] = useState("None");
  const [option3, setOption3] = useState("None");
  const [option4, setOption4] = useState("None");
  const [option5, setOption5] = useState("2 Days");
  const [option6, setOption6] = useState(7500);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name === "option6") {
        if (value > 7500 || value < 1000) {
          return;
        }
      }
      switch (name) {
        case "option1": {
          setOption1(value);
          break;
        }
        case "option2": {
          setOption2(value);
          break;
        }
        case "option3": {
          setOption3(value);
          break;
        }
        case "option4": {
          setOption4(value);
          break;
        }
        case "option5": {
          setOption5(value);
          break;
        }
        case "option6": {
          setOption6(value);
          break;
        }
        default:
          throw new Error("No branch selected in switch statement.");
      }
    },
    [setOption1, setOption2, setOption3, setOption4, setOption5, setOption6]
  );

  const resetState = useCallback(() => {
    setIsSaveLoading(false);
    setIsDefaultLoading(false);
    setOption1("None");
    setOption2("None");
    setOption3("None");
    setOption4("None");
    setOption5("2 Days");
    setOption6(7500);
  }, [
    setIsSaveLoading,
    setIsDefaultLoading,
    setOption1,
    setOption2,
    setOption3,
    setOption4,
    setOption5,
    setOption6,
  ]);

  const onSetDefault = useCallback(() => {
    setIsDefaultLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been reset to default",
      });
      resetState();
    }, 1500);
  }, [pushMessageToSnackbar, resetState]);

  const onSubmit = useCallback(() => {
    setIsSaveLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved",
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [setIsSaveLoading, pushMessageToSnackbar]);

  const inputs = [
    {
      state: option1,
      label: "Option 1",
      stateName: "option1",
    },
    {
      state: option2,
      label: "Option 2",
      stateName: "option2",
    },
    {
      state: option3,
      label: "Option 3",
      stateName: "option3",
    },
    {
      state: option4,
      label: "Option 4",
      stateName: "option4",
    },
  ];

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Settings 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.dBlock}>
        <List disablePadding>
          <Bordered disableVerticalPadding disableBorderRadius>
            {inputs.map((element, index) => (
              <ListItem
                className="listItemLeftPadding"
                disableGutters
                divider
                key={index}
              >
                <ListItemText>
                  <Typography variant="body2">{element.label}</Typography>
                </ListItemText>
                <FormControl variant="outlined">
                  <ListItemSecondaryAction
                    className={classes.ListItemSecondaryAction}
                  >
                    <Select
                      value={element.state}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          name={element.stateName}
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                        />
                      }
                      MenuProps={{ disableScrollLock: true }}
                    >
                      {inputOptions.map((innerElement) => (
                        <MenuItem value={innerElement} key={innerElement}>
                          {innerElement}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </FormControl>
              </ListItem>
            ))}
            <ListItem className="listItemLeftPadding" disableGutters divider>
              <ListItemText>
                <Typography variant="body2">Option 5</Typography>
              </ListItemText>
              <FormControl variant="outlined">
                <ListItemSecondaryAction
                  className={classes.ListItemSecondaryAction}
                >
                  <Select
                    value={option5}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        name="option5"
                        labelWidth={0}
                        className={classes.numberInput}
                        classes={{ input: classes.numberInputInput }}
                      />
                    }
                    MenuProps={{ disableScrollLock: true }}
                  >
                    {[
                      "Always",
                      "6 Hours",
                      "12 Hours",
                      "1 Day",
                      "2 Days",
                      "3 Days",
                      "1 Week",
                    ].map((element) => (
                      <MenuItem value={element} key={element}>
                        {element}
                      </MenuItem>
                    ))}
                  </Select>
                </ListItemSecondaryAction>
              </FormControl>
            </ListItem>
            <ListItem className="listItemLeftPadding" disableGutters>
              <ListItemText>
                <Typography variant="body2">Option 6</Typography>
              </ListItemText>
              <FormControl variant="outlined">
                <ListItemSecondaryAction
                  className={classes.ListItemSecondaryAction}
                >
                  <OutlinedInput
                    labelWidth={0}
                    name="option6"
                    value={option6}
                    type="number"
                    onChange={handleChange}
                    className={classes.numberInput}
                    classes={{ input: classes.numberInputInput }}
                    inputProps={{ step: 20 }}
                  />
                </ListItemSecondaryAction>
              </FormControl>
            </ListItem>
          </Bordered>
        </List>
      </ExpansionPanelDetails>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <Box mr={1}>
          <Button
            onClick={onSetDefault}
            disabled={isSaveLoading || isDefaultLoading}
          >
            Default {isDefaultLoading && <ButtonCircularProgress />}
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          disabled={isSaveLoading || isDefaultLoading}
          onClick={onSubmit}
        >
          Save {isSaveLoading && <ButtonCircularProgress />}
        </Button>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Settings1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings1));
