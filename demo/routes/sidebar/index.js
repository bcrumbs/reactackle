'use strict';

import React from 'react';
import {
  RouteInfo,
  RouteProps,
} from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import SidebarCode from '!raw-loader!../../../packages/reactackle-sidebar/src/Sidebar';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Sidebar',
  routeTitle: 'Sidebar',
};

export const SidebarIndexRoute = props => {
  const itemProps = (
    <RouteProps
      componentCode={SidebarCode}
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

SidebarIndexRoute.propTypes = propTypes;
SidebarIndexRoute.defaultProps = defaultProps;
SidebarIndexRoute.displayName = 'SidebarIndexRoute';
