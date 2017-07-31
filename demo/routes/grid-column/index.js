'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ColumnCode from '!raw-loader!../../../packages/reactackle-grid/src/Column/Column';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Column',
};

export const GridColumnIndexRoute = props => {
  const itemProps = <RouteProps componentCode={ColumnCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

GridColumnIndexRoute.propTypes = propTypes;
GridColumnIndexRoute.defaultProps = defaultProps;
GridColumnIndexRoute.displayName = 'GridColumnIndexRoute';
