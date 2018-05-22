import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const BreadcrumbsRoute = props => (
  <RouteStructure
    componentTitle="Breadcrumbs"
    tabs={[
      {
        text: 'General Info',
        href: '/breadcrumbs',
      },
      {
        text: 'Use Cases',
        href: '/breadcrumbs/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

BreadcrumbsRoute.displayName = 'BreadcrumbsRoute';
