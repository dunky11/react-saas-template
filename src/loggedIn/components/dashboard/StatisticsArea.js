import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";

function StatisticsArea(props) {
  const { theme, CardChart, data } = props;
  return (
    CardChart &&
    data.length >= 2 && (
      <Grid container spacing={3}>
        <Grid item md={6} className="w-100">
          <CardChart
            data={data}
            color={theme.palette.secondary.light}
            height="70px"
            yKey="profit"
            title="Profit"
          />
        </Grid>
        <Grid item md={6} className="w-100">
          <CardChart
            data={data}
            color={theme.palette.primary.light}
            height="70px"
            yKey="views"
            title="Views"
            subtitle="Last 7 days"
          />
        </Grid>
      </Grid>
    )
  );
}

StatisticsArea.propTypes = {
  theme: PropTypes.object,
  data: PropTypes.array,
  // TODO Find correct proptype, had to do any here
  CardChart: PropTypes.any
};

export default withTheme(StatisticsArea);
