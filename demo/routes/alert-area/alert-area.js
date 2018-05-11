import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const AlertAreaRoute = props => (
  <RouteStructure
    componentTitle="AlertArea"
    tabs={[
      {
        text: 'General Info',
        href: '/alert-area',
      },
      {
        text: 'Use Cases',
        href: '/alert-area/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

AlertAreaRoute.displayName = 'AlertAreaRoute';
