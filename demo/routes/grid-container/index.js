'use strict';

import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
// eslint-disable-next-line
import ContainerCode from '!raw-loader!../../../packages/reactackle-grid/src/Container/Container';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  routeTitle: 'Container',
};

export const GridContainerIndexRoute = props => {
  const itemProps = <RouteProps componentCode={ContainerCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

GridContainerIndexRoute.propTypes = propTypes;
GridContainerIndexRoute.defaultProps = defaultProps;
GridContainerIndexRoute.displayName = 'GridContainerIndexRoute';
