import React from 'react';
import { RouteInfo } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'AlertArea',
  routeTitle: 'AlertArea',
  routeLead: '',
};
  
export const AlertAreaIndexRoute = props => (
  <RouteInfo {...props} />
);

AlertAreaIndexRoute.propTypes = propTypes;
AlertAreaIndexRoute.defaultProps = defaultProps;
AlertAreaIndexRoute.displayName = 'AlertAreaIndexRoute';
