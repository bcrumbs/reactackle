'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import PaddingBoxCode from '!raw-loader!../../../packages/reactackle-grid/src/PaddingBox/PaddingBox';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'GridPaddingBox',
};

export const GridPaddingBoxIndexRoute = props => {
  const itemProps = <RouteProps componentCode={PaddingBoxCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

GridPaddingBoxIndexRoute.propTypes = propTypes;
GridPaddingBoxIndexRoute.defaultProps = defaultProps;
GridPaddingBoxIndexRoute.displayName = 'GridPaddingBoxIndexRoute';
