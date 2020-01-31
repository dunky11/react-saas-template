import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { List, Divider, Paper } from "@material-ui/core";
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";
import smoothScrollTop from "../../../shared/smoothScrollTop";

const styles = theme => ({
  contentAreaInnerArea: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class Subscription extends PureComponent {
  componentDidMount() {
    smoothScrollTop();
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
  transactions: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(Subscription);
