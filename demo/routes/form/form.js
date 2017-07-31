'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const FormRoute = props => (
  <RouteStructure
    componentTitle="Form"
    tabs={[
      {
        text: 'General Info',
        href: '/form',
      },
      {
        text: 'Use Cases',
        href: '/form/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

FormRoute.displayName = 'FormRoute';
