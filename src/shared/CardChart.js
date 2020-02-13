import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis
} from "recharts";
import format from "date-fns/format";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  withStyles,
  Box
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  cardContentInner: {
    marginTop: theme.spacing(-4)
  }
});

function labelFormatter(label) {
  return format(new Date(label * 1000), "MMMM d, p yyyy");
}

function calculateMin(data, yKey, factor) {
  let max = Number.POSITIVE_INFINITY;
  data.forEach(element => {
    if (max > element[yKey]) {
      max = element[yKey];
    }
  });
  return Math.round(max - max * factor);
}

const itemHeight = 216;
const options = ["1 Week", "1 Month", "6 Months"];

class CardChart extends PureComponent {
  state = { anchorEl: null, selectedOption: "1 Month" };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  formatter = value => {
    return [value, this.props.title];
  };

  getSeconds = () => {
    const { selectedOption } = this.state;
    switch (selectedOption) {
      case "1 Week":
        return 60 * 60 * 24 * 7;
      case "1 Month":
        return 60 * 60 * 24 * 7 * 31;
      case "6 Months":
        return 60 * 60 * 24 * 7 * 31 * 6;
      default:
        throw new Error("No branch selected in switch-statement");
    }
  };

  getSubtitle = () => {
    const { selectedOption } = this.state;
    switch (selectedOption) {
      case "1 Week":
        return "Last week";
      case "1 Month":
        return "Last month";
      case "6 Months":
        return "Last 6 months";
      default:
        throw new Error("No branch selected in switch-statement");
    }
  };

  processData = () => {
    const { data } = this.props;
    const seconds = this.getSeconds();
    const minSeconds = new Date() / 1000 - seconds;
    const arr = [];
    for (let i = 0; i < data.length; i += 1) {
      if (minSeconds < data[i].timestamp) {
        arr.unshift(data[i]);
      }
    }
    return arr;
  };

  selectOption = selectedOption => {
    this.setState({ selectedOption, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { color, data, title, classes, theme, height } = this.props;
    const { anchorEl, selectedOption } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Card>
        <Box pt={2} px={2} pb={4}>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {this.getSubtitle()}
              </Typography>
            </div>
            <div>
              <IconButton
                aria-label="More"
                aria-owns={open ? "long-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: itemHeight,
                    width: 200
                  }
                }}
              >
                {options.map(option => (
                  <MenuItem
                    key={option}
                    selected={option === selectedOption}
                    onClick={() => {
                      this.selectOption(option);
                    }}
                    name={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Box>
        </Box>
        <CardContent>
          <Box className={classes.cardContentInner} height={height}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={this.processData()} type="number">
                <XAxis
                  dataKey="timestamp"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  hide
                />
                <YAxis
                  domain={[calculateMin(data, "value", 0.05), "dataMax"]}
                  hide
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  fill={color}
                />
                <Tooltip
                  labelFormatter={labelFormatter}
                  formatter={this.formatter}
                  cursor={false}
                  contentStyle={{
                    border: "none",
                    padding: theme.spacing(1),
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[1]
                  }}
                  labelStyle={theme.typography.body1}
                  itemStyle={{
                    fontSize: theme.typography.body1.fontSize,
                    letterSpacing: theme.typography.body1.letterSpacing,
                    fontFamily: theme.typography.body1.fontFamily,
                    lineHeight: theme.typography.body1.lineHeight,
                    fontWeight: theme.typography.body1.fontWeight
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

CardChart.propTypes = {
  color: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(CardChart);
