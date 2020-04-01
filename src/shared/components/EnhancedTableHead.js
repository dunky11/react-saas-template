import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  tableSortLabel: {
    cursor: "text",
    userSelect: "auto",
    color: "inherit !important"
  },
  noIcon: {
    "& path": {
      display: "none !important"
    }
  },
  paddingFix: {
    paddingLeft: theme.spacing(3)
  }
});

function EnhancedTableHead(props) {
  const { order, orderBy, rows, onRequestSort, classes } = props;

  const createSortHandler = useCallback(
    property => event => {
      onRequestSort(event, property);
    },
    [onRequestSort]
  );

  return (
    <TableHead>
      <TableRow>
        {rows.map((row, index) => (
          <TableCell
            key={index}
            align={row.numeric ? "right" : "inherit"}
            padding="default"
            sortDirection={orderBy === row.name ? order : false}
            className={index === 0 ? classes.paddingFix : null}
          >
            {onRequestSort ? (
              <Tooltip
                title="Sort"
                placement={row.numeric ? "bottom-end" : "bottom-start"}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  <Typography variant="body2">{row.label}</Typography>
                </TableSortLabel>
              </Tooltip>
            ) : (
              <TableSortLabel
                className={classNames(classes.tableSortLabel, classes.noIcon)}
              >
                <Typography variant="body2" className={classes.label}>
                  {row.label}
                </Typography>
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(EnhancedTableHead);
