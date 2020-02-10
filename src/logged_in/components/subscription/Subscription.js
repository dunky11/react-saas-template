import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper } from "@material-ui/core";
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";
import AddBalanceDialog from "./AddBalanceDialog";

class Subscription extends PureComponent {
  componentDidMount() {
    const { selectSubscription } = this.props;
    selectSubscription();
  }

  render() {
    const { transactions } = this.props;
    return (
      <Paper>
        <AddBalanceDialog open />
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
