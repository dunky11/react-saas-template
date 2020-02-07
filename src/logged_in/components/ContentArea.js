import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./dashboard/Dashboard";
import SchedulePosts from "./schedule_posts/SchedulePosts";
import Subscription from "./subscription/Subscription";
import PropsRoute from "../../shared/PropsRoute";

const styles = theme => ({
  contentAreaInnerArea: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function ContentArea(props) {
  const {
    classes,
    location,
    EmojiTextArea,
    ImageCroppr,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    scheduledPosts,
    transactions,
    handleNumberChange,
    handleSwitchToggle,
    handleSelectChange,
    toggleAccountActivation,
    CardChart,
    statistics,
    targets,
    isAccountActivated,
    selectDashboard,
    selectSchedulePosts,
    selectSubscription
  } = props;
  return (
    <div className={classes.contentAreaInnerArea}>
      <Switch>
        <PropsRoute
          location={location}
          path="/c/schedule-posts"
          component={SchedulePosts}
          EmojiTextArea={EmojiTextArea}
          ImageCroppr={ImageCroppr}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          pushMessageToSnackbar={pushMessageToSnackbar}
          scheduledPosts={scheduledPosts}
          selectSchedulePosts={selectSchedulePosts}
        />
        <PropsRoute
          location={location}
          path="/c/subscription"
          component={Subscription}
          transactions={transactions}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectSubscription={selectSubscription}
        />
        <PropsRoute
          location={location}
          path=""
          component={Dashboard}
          handleNumberChange={handleNumberChange}
          handleSwitchToggle={handleSwitchToggle}
          handleSelectChange={handleSelectChange}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          isAccountActivated={isAccountActivated}
          selectDashboard={selectDashboard}
        />
      </Switch>
    </div>
  );
}

ContentArea.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
  // TODO find correct proptype
  EmojiTextArea: PropTypes.any,
  // TODO find correct proptype
  ImageCroppr: PropTypes.any,
  // TODO find correct proptype
  Dropzone: PropTypes.any,
  // TODO find correct proptype
  DateTimePicker: PropTypes.any,
  pushMessageToSnackbar: PropTypes.func,
  scheduledPosts: PropTypes.array,
  transactions: PropTypes.array,
  handleNumberChange: PropTypes.func,
  handleSwitchToggle: PropTypes.func,
  handleSelectChange: PropTypes.func,
  toggleAccountActivation: PropTypes.func,
  // TODO find correct proptype
  CardChart: PropTypes.any,
  statistics: PropTypes.array,
  targets: PropTypes.array.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectSchedulePosts: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(ContentArea));
