
import React from 'react';

import {
  TooltipIcon,
} from 'reactackle';

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

export const TooltipIconDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Some demo">
      <DemoPreview>
        <TestBox padding>
          <TooltipIcon text="Hooray! I'm tooltip." />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

TooltipIconDemoRoute.displayName = 'TooltipIconDemoRoute';
