import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import SettingsArea from "./SettingsArea";
import TargetArea from "./TargetArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";
import smoothScrollTop from "../../../universalComponents/smoothScrollTop";

class Dashboard extends PureComponent {
  componentDidMount() {
    smoothScrollTop();
  }

  render() {
    const {
      CardChart,
      statistics,
      toggleAccountActivation,
      pushMessageToSnackbar,
      targets,
      isAccountActivated
    } = this.props;
    return (
      <Fragment>
        <StatisticsArea CardChart={CardChart} data={statistics} />
        <Typography className="mt-4" variant="subtitle1" gutterBottom>
          Your Account
        </Typography>
        <AccountInformationArea
          isAccountActivated={isAccountActivated}
          toggleAccountActivation={toggleAccountActivation}
        />
        <Typography variant="subtitle1" gutterBottom className="mt-4">
          Settings
        </Typography>
        <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
        <TargetArea
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
        />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  // TODO find correct proptype
  CardChart: PropTypes.any,
  statistics: PropTypes.array,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.array.isRequired,
  isAccountActivated: PropTypes.bool.isRequired
};

export default Dashboard;
