import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';

//eslint-disable-next-line
import BreadcrumbsCode from '!raw-loader!../../../packages/reactackle-breadcrumbs/src/Breadcrumbs';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Breadcrumbs',
  routeTitle: 'Breadcrumbs',
};

const itemProps = (
  <RouteProps
    componentCode={BreadcrumbsCode}
  />
);

export const BreadcrumbsIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props}>
      {itemProps}
    </RouteInfo>
  </div>
);

BreadcrumbsIndexRoute.propTypes = propTypes;
BreadcrumbsIndexRoute.defaultProps = defaultProps;
BreadcrumbsIndexRoute.displayName = 'BreadcrumbsIndexRoute';
