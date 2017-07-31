'use strict';

import React from 'react';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';
import SnippetDefault from './snippets/1.snippet';

export const SidebarDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Sidebar">
      <DemoPreview>
        <TestBox>
          Code for left route sidebar
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

SidebarDemoRoute.displayName = 'SidebarDemoRoute';
