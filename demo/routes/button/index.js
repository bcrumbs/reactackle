'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';

//eslint-disable-next-line
import ButtonCode from '!raw-loader!../../../packages/reactackle-button/src/Button';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Button',
  routeLead: 'Buttons communicate the action that will'
    + ' occur when the user touches them.',
};

export const ButtonIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={ButtonCode}
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

ButtonIndexRoute.propTypes = propTypes;
ButtonIndexRoute.defaultProps = defaultProps;
ButtonIndexRoute.displayName = 'ButtonIndexRoute';
