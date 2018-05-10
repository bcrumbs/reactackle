'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const AccordionRoute = props => (
  <RouteStructure
    componentTitle="Accordion"
    tabs={[
      {
        text: 'General Info',
        href: '/accordion',
      },
      {
        text: 'Use Cases',
        href: '/accordion/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

AccordionRoute.displayName = 'AccordionRoute';
