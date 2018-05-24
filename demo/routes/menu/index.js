import React from 'react';
// eslint-disable-next-line
import MenuCode from '!raw-loader!../../../packages/reactackle-menu/src/Menu';
// eslint-disable-next-line
import MenuGroupCode from '!raw-loader!../../../packages/reactackle-menu/src/MenuGroup/MenuGroup';
// eslint-disable-next-line
import MenuItemCode from '!raw-loader!../../../packages/reactackle-menu/src/MenuItem/MenuItem';

import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Menu',
  routeTitle: 'Menu',
};

const itemProps = (
  [
    <RouteProps
      title="Menu Props"
      key='menu'
      componentCode={MenuCode}
    />,
    <RouteProps
      title="Menu Group Props"
      key='menu-group'
      componentCode={MenuGroupCode}
    />,
    <RouteProps
      title="Menu Item Props"
      key='menu-item'
      componentCode={MenuItemCode}
    />,

  ]
);

export const MenuIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props}>
      { itemProps }
    </RouteInfo>
  </div>
);

MenuIndexRoute.propTypes = propTypes;
MenuIndexRoute.defaultProps = defaultProps;
MenuIndexRoute.displayName = 'MenuIndexRoute';
