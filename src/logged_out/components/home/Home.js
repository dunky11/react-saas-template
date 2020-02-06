import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";

class Home extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    return (
      <Fragment>
        <HeadSection />
        <FeatureSection />
        <PricingSection />
      </Fragment>
    );
  }
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
