import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const IconSvgRoute = props => (
  <RouteStructure
    componentTitle="Icon SVG"
    tabs={[
      {
        text: 'General Info',
        href: '/icon-svg',
      },
      {
        text: 'Use Cases',
        href: '/icon-svg/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

IconSvgRoute.displayName = 'IconSvgRoute';
