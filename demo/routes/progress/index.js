'use strict';

import React from 'react';
import { RouteInfo } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Progress',
  routeTitle: 'Progress',
};

export const ProgressIndexRoute = props => {
  const itemProps = null;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

ProgressIndexRoute.propTypes = propTypes;
ProgressIndexRoute.defaultProps = defaultProps;
ProgressIndexRoute.displayName = 'ProgressIndexRoute';
