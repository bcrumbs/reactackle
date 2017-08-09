import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const PreloaderRoute = props => (
  <RouteStructure
    componentTitle="Preloader"
    section="Progress"
    tabs={[
      {
        text: 'General Info',
        href: '/preloader',
      },
      {
        text: 'Use Cases',
        href: '/preloader/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

PreloaderRoute.displayName = 'PreloaderRoute';
