'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import FlexRegionCode from '!raw-loader!../../../packages/reactackle-grid/src/FlexRegion/FlexRegion';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'FlexRegion',
};

export const GridFlexRegionIndexRoute = props => {
  const itemProps = <RouteProps componentCode={FlexRegionCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

GridFlexRegionIndexRoute.propTypes = propTypes;
GridFlexRegionIndexRoute.defaultProps = defaultProps;
GridFlexRegionIndexRoute.displayName = 'GridFlexRegionIndexRoute';
