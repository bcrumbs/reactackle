'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import AutopositionCode from '!raw-loader!../../../packages/reactackle-autoposition/src/AutoPosition';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'AutoPosition',
  routeTitle: 'AutoPosition',
};
export const AutoPositionIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props}>
      <RouteProps
        componentCode={AutopositionCode}
      />
    </RouteInfo>
  </div>
  );

AutoPositionIndexRoute.propTypes = propTypes;
AutoPositionIndexRoute.defaultProps = defaultProps;
AutoPositionIndexRoute.displayName = 'AutoPositionIndexRoute';
