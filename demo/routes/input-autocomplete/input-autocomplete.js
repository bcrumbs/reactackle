'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const InputAutocompleteRoute = props => (
  <RouteStructure
    componentTitle="InputAutocomplete"
    tabs={[
      {
        text: 'General Info',
        href: '/input-autocomplete',
      },
      {
        text: 'Use Cases',
        href: '/input-autocomplete/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

InputAutocompleteRoute.displayName = 'InputAutocompleteRoute';
