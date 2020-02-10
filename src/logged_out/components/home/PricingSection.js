import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

function PricingSection(props) {
  const { width } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Pricing
      </Typography>
      <div className="container-fluid">
        <Grid container spacing={calculateSpacing(width)}>
          <Grid item xs={12} sm={6} lg={3} data-aos="zoom-in-up">
            <PriceCard
              title="Starter"
              pricing="14.99"
              features={[
                "10.000 requests per month",
                "Access to all our features",
                "Always cancelable"
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Premium"
              pricing="29.99"
              features={[
                "50.000 requests per month",
                "Access to all our features",
                "Always cancelable"
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Business"
              pricing="49.99"
              features={[
                "250.000 requests per month",
                "Access to all our features",
                "Always cancelable"
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Tycoon"
              pricing="99.99"
              features={[
                "1.000.000 requests per month",
                "Access to all our features",
                "Always cancelable"
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(PricingSection);
