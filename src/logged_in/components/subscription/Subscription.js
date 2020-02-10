import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper } from "@material-ui/core";
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";

class Subscription extends PureComponent {
  componentDidMount() {
    const { selectSubscription } = this.props;
    selectSubscription();
  }

  render() {
    const { transactions } = this.props;
    return (
      <Paper>
        <List disablePadding>
          <SubscriptionInfo />
          <Divider />
          <SubscriptionTable transactions={transactions} />
        </List>
      </Paper>
    );
  }
}

Subscription.propTypes = {
  transactions: PropTypes.array.isRequired,
  selectSubscription: PropTypes.func.isRequired
};

export default Subscription;
