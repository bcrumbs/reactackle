'use strict';

import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const ProgressRoute = props => (
  <RouteStructure componentTitle="Progress">
    {props.children}
  </RouteStructure>
);

ProgressRoute.displayName = 'ProgressRoute';
