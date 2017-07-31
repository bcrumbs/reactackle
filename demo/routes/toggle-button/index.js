'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import ToggleButtonCode from '!raw-loader!../../../packages/reactackle-toggle-button/src/ToggleButton';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'ToggleButton',
  routeTitle: 'ToggleButton',
};

export const ToggleButtonIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={ToggleButtonCode}
    />
  );

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        { itemProps }
      </RouteInfo>
    </div>
  );
};

ToggleButtonIndexRoute.propTypes = propTypes;
ToggleButtonIndexRoute.defaultProps = defaultProps;
ToggleButtonIndexRoute.displayName = 'ToggleButtonIndexRoute';
