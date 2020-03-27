import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

/**
 * Wrapper around the Router component, which makes it pass the properties
 * to it's child.
 * Taken from https://github.com/ReactTraining/react-router/issues/4105
 */
const PropsRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />
);

PropsRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node])
};

export default PropsRoute;
