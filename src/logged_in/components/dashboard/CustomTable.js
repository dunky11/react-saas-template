import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  IconButton,
  Avatar,
  withStyles
} from "@material-ui/core";
import PlayCirlceOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import classNames from "classnames";
import EnhancedTableHead from "../../../shared/EnhancedTableHead";
import stableSort from "../../../shared/stableSort";
import getSorting from "../../../shared/getSorting";
import HighlightedInformation from "../../../shared/HighlightedInformation";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";

const styles = theme => ({
  tableWrapper: {
    overflowX: "auto"
  },
  alignRight: {
    flexDirection: "row-reverse"
  },
  blackIcon: {
    color: theme.palette.common.black
  },
  avatar: {
    width: 28,
    height: 28
  }
});

const rows = [
  {
    id: "icon",
    numeric: true,
    label: ""
  },
  {
    id: "name",
    numeric: false,
    label: "Name"
  },
  { id: "number1", numeric: false, label: "Category 1" },
  { id: "number2", numeric: false, label: "Category 2" },
  { id: "number3", numeric: false, label: "Category 3" },
  {
    id: "number4",
    numeric: false,
    label: "Category 4"
  },
  {
    id: "actions",
    numeric: false,
    label: ""
  }
];

class CustomTable extends PureComponent {
  state = {
    order: "asc",
    orderBy: null,
    page: 0,
    deleteTargetDialogOpen: false,
    deleteTargetDialogName: null,
    deleteTargetLoading: false
  };

  rowsPerPage = 25;

  handleRequestSort = (__, property) => {
    const orderBy = property;
    let order = "desc";
    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }
    this.setState({ order, orderBy });
  };

  deleteTarget = () => {
    const { pushMessageToSnackbar } = this.props;
    this.setState({ deleteTargetLoading: true });
    setTimeout(() => {
      this.setState({
        deleteTargetLoading: false,
        deleteTargetDialogOpen: false
      });
      pushMessageToSnackbar({
        text: "Your friend has been removed"
      });
    }, 1500);
  };

  handleChangePage = (_, page) => {
    this.setState({ page });
  };

  handleDeleteTargetDialogClose = () => {
    this.setState({
      deleteTargetDialogOpen: false
    });
  };

  handleDeleteTargetDialogOpen = (_, name) => {
    this.setState({
      deleteTargetDialogOpen: true,
      deleteTargetDialogName: name
    });
  };

  /**
   * Sets the variable is_activated in the db of the target to the second parameter
   */
  toggleTarget = (_, activate) => {
    const { pushMessageToSnackbar } = this.props;
    if (activate) {
      pushMessageToSnackbar({
        text: "The row is now activated"
      });
    } else {
      pushMessageToSnackbar({
        text: "The row is now deactivated"
      });
    }
  };

  printTable = () => {
    const { order, orderBy, page } = this.state;
    const { targets, classes } = this.props;
    if (targets.length > 0) {
      return (
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
            rowCount={targets.length}
            rows={rows}
          />
          <TableBody>
            {stableSort(targets, getSorting(order, orderBy))
              .slice(
                page * this.rowsPerPage,
                page * this.rowsPerPage + this.rowsPerPage
              )
              .map((row, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell component="th" scope="row" className="pl-3">
                    <Avatar
                      className={classes.avatar}
                      src={row.profilePicUrl}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.number1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.number2}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.number3}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.number4}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="d-flex justify-content-end">
                      {row.isActivated ? (
                        <IconButton
                          className="p-1"
                          onClick={() => {
                            this.toggleTarget(row.id);
                          }}
                        >
                          <PauseCircleOutlineIcon
                            className={classes.blackIcon}
                          />
                        </IconButton>
                      ) : (
                        <IconButton
                          className="p-1"
                          color="primary"
                          onClick={() => {
                            this.toggleTarget(row.id);
                          }}
                        >
                          <PlayCirlceOutlineIcon />
                        </IconButton>
                      )}
                      <IconButton
                        className="p-1"
                        onClick={() => {
                          this.handleDeleteTargetDialogOpen(row.id, row.name);
                        }}
                      >
                        <DeleteIcon className={classes.blackIcon} />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      );
    }
    return (
      <HighlightedInformation className="m-2">
        No friends added yet.
      </HighlightedInformation>
    );
  };

  render() {
    const {
      page,
      deleteTargetDialogOpen,
      deleteTargetDialogName,
      deleteTargetLoading
    } = this.state;
    const { classes, targets } = this.props;
    return (
      <Fragment>
        <ConfirmationDialog
          open={deleteTargetDialogOpen}
          title="Confirmation"
          content={
            <span
              dangerouslySetInnerHTML={{
                __html: `Do you really want to remove the friend
            <b>${deleteTargetDialogName}</b> from your list?`
              }}
            />
          }
          onClose={this.handleDeleteTargetDialogClose}
          onConfirm={this.deleteTarget}
          loading={deleteTargetLoading}
        />
        <div className="w-100">
          <div className={classes.tableWrapper}>{this.printTable()}</div>
          <div
            className={classNames(
              "d-flex align-items-center pl-2",
              classes.alignRight
            )}
          >
            <TablePagination
              component="div"
              count={targets.length}
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
                actions: targets.length > 0 ? "d-block" : "d-none",
                caption: targets.length > 0 ? "d-block" : "d-none"
              }}
              labelRowsPerPage=""
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  targets: PropTypes.array,
  pushMessageToSnackbar: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(CustomTable);
