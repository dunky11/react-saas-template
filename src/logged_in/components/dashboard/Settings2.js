import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  Box,
  withStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "../../../shared/components/HelpIcon";
import Bordered from "../../../shared/components/Bordered";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = theme => ({
  numberInput: {
    width: 120,
    [theme.breakpoints.down("sm")]: {
      width: 80
    },
    "@media (max-width: 350px)": {
      width: 65
    }
  },
  numberInputInput: {
    padding: "9px 14.5px",
    "@media (max-width: 380px)": {
      padding: "9px 8.5px"
    },
    "@media (max-width: 350px)": {
      padding: "9px 6.5px"
    }
  },
  listItem: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4)
    },
    paddingLeft: 100
  },
  expansionPanelDetails: {
    paddingTop: theme.spacing(0),
    justifyContent: "flex-end"
  },
  dBlock: {
    display: "block"
  }
});

class Settings2 extends PureComponent {
  defaultState = {
    defaultLoading: false,
    saveLoading: false,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: "Both",
    option7: "2 weeks"
  };

  state = this.defaultState;

  onSubmit = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ saveLoading: true });
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved"
      });
      this.setState(this.defaultState);
    }, 1500);
  };

  onSetDefault = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ defaultLoading: true });
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been reset to default"
      });
      this.setState(this.defaultState);
    }, 1500);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const {
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      saveLoading,
      defaultLoading
    } = this.state;
    const { classes } = this.props;
    const inputs = [
      {
        title: "Option 1",
        secondaryAction: (
          <Checkbox
            value="option1"
            color="primary"
            checked={option1}
            onChange={this.handleCheckboxChange("option1")}
          />
        )
      },
      {
        title: "Option 2",
        secondaryAction: (
          <Checkbox
            value="option2"
            color="primary"
            checked={option2}
            onChange={this.handleCheckboxChange("option2")}
          />
        )
      },
      {
        title: "Option 3",
        secondaryAction: (
          <Checkbox
            value="option3"
            color="primary"
            checked={option3}
            onChange={this.handleCheckboxChange("option3")}
          />
        ),
        helpText: "You can add some further explanation here."
      },
      {
        title: "Option 4",
        secondaryAction: (
          <Checkbox
            value="option4"
            color="primary"
            checked={option4}
            onChange={this.handleCheckboxChange("option4")}
          />
        )
      },
      {
        title: "Option 5",
        secondaryAction: (
          <Checkbox
            value="option5"
            color="primary"
            checked={option5}
            onChange={this.handleCheckboxChange("option5")}
          />
        )
      },
      {
        title: "Option 6",
        secondaryAction: (
          <Select
            value={option6}
            input={
              <OutlinedInput
                onChange={this.handleInputChange}
                labelWidth={0}
                className={classes.numberInput}
                classes={{ input: classes.numberInputInput }}
                name="option6"
              />
            }
          >
            <MenuItem value="Both">Both</MenuItem>
            <MenuItem value="Male+">Male+</MenuItem>
            <MenuItem value="Female+">Female+</MenuItem>
            <MenuItem value="Only male">Only male</MenuItem>
            <MenuItem value="Only female">Only female</MenuItem>
          </Select>
        ),
        helpText: "You can add some further explanation here."
      },
      {
        title: "Option 7",
        secondaryAction: (
          <Select
            value={option7}
            input={
              <OutlinedInput
                onChange={this.handleInputChange}
                labelWidth={0}
                className={classes.numberInput}
                classes={{ input: classes.numberInputInput }}
                name="option7"
              />
            }
          >
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="6 hours">6 hours</MenuItem>
            <MenuItem value="12 hours">12 hours</MenuItem>
            <MenuItem value="1 day">1 day</MenuItem>
            <MenuItem value="3 days">3 days</MenuItem>
            <MenuItem value="1 week">1 week</MenuItem>
            <MenuItem value="2 weeks">2 weeks</MenuItem>
            <MenuItem value="1 month">1 month</MenuItem>
            <MenuItem value="3 months">3 months</MenuItem>
            <MenuItem value="6 months">6 months</MenuItem>
          </Select>
        ),
        helpText: "If you want you can add some further explanation here."
      }
    ];

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Settings 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.dBlock}>
          <List disablePadding>
            <Bordered disableVerticalPadding disableBorderRadius>
              {inputs.map((element, index) => (
                <ListItem
                  key={index}
                  divider={index !== inputs.length - 1}
                  className="listItemLeftPadding"
                >
                  <ListItemText>
                    <Typography variant="body2">
                      {element.title}
                      {element.helpText && (
                        <HelpIcon title={element.helpText} />
                      )}
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <FormControl variant="outlined">
                      {element.secondaryAction}
                    </FormControl>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </Bordered>
          </List>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <Box mr={1}>
            <Button
              onClick={this.onSetDefault}
              disabled={saveLoading || defaultLoading}
            >
              Default {defaultLoading && <ButtonCircularProgress />}
            </Button>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onSubmit}
            disabled={saveLoading || defaultLoading}
          >
            Save {saveLoading && <ButtonCircularProgress />}
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

Settings2.propTypes = {
  classes: PropTypes.object,
  pushMessageToSnackbar: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(Settings2);
