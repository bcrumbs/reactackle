'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import CardCode from '!raw-loader!../../../packages/reactackle-card/src/Card';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Card',
  routeLead: 'A card is a sheet of material that serves as an'
    + ' entry point to more detailed information.',
};

export const CardIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={CardCode}
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

CardIndexRoute.propTypes = propTypes;
CardIndexRoute.defaultProps = defaultProps;
CardIndexRoute.displayName = 'CardIndexRoute';
