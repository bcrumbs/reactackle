'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import HeaderCode from '!raw-loader!../../../packages/reactackle-header/src/Header';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Header',
};

export const HeaderIndexRoute = props => {
  const itemProps = <RouteProps componentCode={HeaderCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

HeaderIndexRoute.propTypes = propTypes;
HeaderIndexRoute.defaultProps = defaultProps;
HeaderIndexRoute.displayName = 'HeaderIndexRoute';
