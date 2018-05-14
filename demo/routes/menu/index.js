'use strict';

import React from 'react';
import { RouteInfo } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Menu',
  routeTitle: 'Menu',
};

export const MenuIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props} />
  </div>
);

MenuIndexRoute.propTypes = propTypes;
MenuIndexRoute.defaultProps = defaultProps;
MenuIndexRoute.displayName = 'MenuIndexRoute';
