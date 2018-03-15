import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const TextRoute = props => (
  <RouteStructure
    componentTitle="Text"
    tabs={[
      {
        text: 'General Info',
        href: '/text',
      },
      {
        text: 'Use Cases',
        href: '/text/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

TextRoute.displayName = 'TextRoute';
