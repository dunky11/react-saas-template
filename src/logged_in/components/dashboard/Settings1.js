import React, { Component } from "react";
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
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import withWidth from "@material-ui/core/withWidth";
import Bordered from "../../../shared/components/Bordered";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = theme => ({
  numberInput: {
    width: 110
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px"
  },
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3)
  },
  expansionPanelDetails: {
    paddintTop: theme.spacing(0),
    justifyContent: "flex-end"
  }
});
const inputOptions = ["None", "Slow", "Normal", "Fast"];

class Settings1 extends Component {
  state = {
    option1: "None",
    option2: "None",
    option3: "None",
    option4: "None",
    option5: "2 Days",
    option6: 7500,
    loading: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    if (name === "option6") {
      if (value > 7500 || value < 1000) {
        return;
      }
    }
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ loading: true });
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved"
      });
      this.setState({ loading: false });
    }, 1500);
  };

  render() {
    const {
      loading,
      option1,
      option2,
      option3,
      option4,
      option5,
      option6
    } = this.state;
    const { classes } = this.props;
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
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          name="option5"
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                        />
                      }
                    >
                      {[
                        "Always",
                        "6 Hours",
                        "12 Hours",
                        "1 Day",
                        "2 Days",
                        "3 Days",
                        "1 Week"
                      ].map(element => (
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
                      onChange={this.handleChange}
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
          <Button
            variant="contained"
            color="secondary"
            disabled={loading}
            onClick={this.onSubmit}
          >
            Save {loading && <ButtonCircularProgress />}
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

Settings1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func
};

export default withWidth()(withStyles(styles, { withTheme: true })(Settings1));
