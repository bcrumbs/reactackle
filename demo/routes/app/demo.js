'use strict';

import React from 'react';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  DemoSnippet,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';
import SnippetDefault from './snippets/1.snippet';

export const AppDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Default app">
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

AppDemoRoute.displayName = 'AppDemoRoute';
