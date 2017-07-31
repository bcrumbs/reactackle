'use strict';

import React from 'react';

import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const TextFieldRoute = props => (
  <RouteStructure
    componentTitle="TextField"
    tabs={[
      {
        text: 'General Info',
        href: '/text-field',
      },
      {
        text: 'Use Cases',
        href: '/text-field/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

TextFieldRoute.displayName = 'TextFieldRoute';
