'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import RowCode from '!raw-loader!../../../packages/reactackle-grid/src/Row/Row';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Row',
};

export const GridRowIndexRoute = props => {
  const itemProps = <RouteProps componentCode={RowCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

GridRowIndexRoute.propTypes = propTypes;
GridRowIndexRoute.defaultProps = defaultProps;
GridRowIndexRoute.displayName = 'GridRowIndexRoute';
