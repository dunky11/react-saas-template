import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow
} from "@material-ui/core";
import classNames from "classnames";
import EnhancedTableHead from "../../../universalComponents/EnhancedTableHead";
import ColorfulChip from "../../../universalComponents/ColorfulChip";
import unixToDateString from "../../../universalComponents/unixToDateString";
import HighlightedInformation from "../../../universalComponents/HighlightedInformation";
import currencyPrettyPrint from "../../../universalComponents/currencyPrettyPrint";

const styles = theme => ({
  tableWrapper: {
    overflowX: "auto"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    }
  }
});

const rows = [
  {
    id: "description",
    numeric: false,
    label: "Action"
  },
  {
    id: "balanceChange",
    numeric: false,
    label: "Balance change"
  },
  {
    id: "date",
    numeric: false,
    label: "Date"
  },
  {
    id: "paidUntil",
    numeric: false,
    label: "Paid until"
  }
];

class SubscriptionTable extends PureComponent {
  state = {
    page: 0
  };

  rowsPerPage = 25;

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const { transactions, theme, classes } = this.props;
    if (transactions.length > 0) {
      return (
        <div className={classNames("w-100", classes.tableWrapper)}>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead rowCount={transactions.length} rows={rows} />
            <TableBody>
              {transactions
                .slice(
                  page * this.rowsPerPage,
                  page * this.rowsPerPage + this.rowsPerPage
                )
                .map((transaction, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell component="th" scope="row" className="pl-3">
                      {transaction.description}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {transaction.balanceChange > 0 ? (
                        <ColorfulChip
                          label={`+${currencyPrettyPrint(
                            transaction.balanceChange
                          )}`}
                          color={theme.palette.secondary.main}
                        />
                      ) : (
                        <ColorfulChip
                          label={currencyPrettyPrint(transaction.balanceChange)}
                          color={theme.palette.error.dark}
                        />
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {unixToDateString(transaction.timestamp)}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {transaction.paidUntil
                        ? unixToDateString(transaction.paidUntil)
                        : ""}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={transactions.length}
            rowsPerPage={this.rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            classes={{
              select: "d-none",
              selectIcon: "d-none",
              actions: transactions.length > 0 ? "d-block" : "d-none",
              caption: transactions.length > 0 ? "d-block" : "d-none"
            }}
            labelRowsPerPage=""
          />
        </div>
      );
    }
    return (
      <div className={classNames("w-100", classes.contentWrapper)}>
        <HighlightedInformation>
          No transactions received yet.
        </HighlightedInformation>
      </div>
    );
  }
}

SubscriptionTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(SubscriptionTable);
