'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import CheckboxCode from '!raw-loader!../../../packages/reactackle-checkbox/src/Checkbox';


const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Checkbox',
};

export const CheckboxIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={CheckboxCode}
    />
  );
  
  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

CheckboxIndexRoute.propTypes = propTypes;
CheckboxIndexRoute.defaultProps = defaultProps;
CheckboxIndexRoute.displayName = 'CheckboxIndexRoute';
