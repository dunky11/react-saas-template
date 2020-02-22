import React from "react";
import PropTypes from "prop-types";
import { Grid, withTheme } from "@material-ui/core";

function StatisticsArea(props) {
  const { theme, CardChart, data } = props;
  return (
    CardChart &&
    data.profit.length >= 2 &&
    data.views.length >= 2 && (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardChart
            data={data.profit}
            color={theme.palette.secondary.light}
            height="70px"
            title="Profit"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardChart
            data={data.views}
            color={theme.palette.primary.light}
            height="70px"
            title="Views"
          />
        </Grid>
      </Grid>
    )
  );
}

StatisticsArea.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  CardChart: PropTypes.elementType
};

export default withTheme(StatisticsArea);
