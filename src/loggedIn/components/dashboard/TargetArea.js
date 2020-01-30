import React from "react";
import PropTypes from "prop-types";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomTable from "./CustomTable";

function TargetArea(props) {
  const { pushMessageToSnackbar, targets } = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Some user data</Typography>
      </ExpansionPanelSummary>
      <CustomTable
        targets={targets}
        pushMessageToSnackbar={pushMessageToSnackbar}
      />
    </ExpansionPanel>
  );
}

TargetArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.array.isRequired
};

export default TargetArea;
