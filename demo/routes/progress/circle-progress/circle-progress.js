import React from 'react';
import { RouteStructure } from '../../../components/Route/RouteStructure';

export const CircleProgressRoute = props => (
  <RouteStructure
    componentTitle="CircleProgress"
    section="Progress"
    tabs={[
      {
        text: 'General Info',
        href: '/circle-progress',
      },
      {
        text: 'Use Cases',
        href: '/circle-progress/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

CircleProgressRoute.displayName = 'CircleProgressRoute';
