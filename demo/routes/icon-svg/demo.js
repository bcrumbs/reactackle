import React from 'react';
import {
  ArrowDropDownIcon,
} from '../../../packages/reactackle-icons';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import Snippet0 from './snippets/0.snippet';

export const IconSvgDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Icon Source">
      <DemoPreview>
        <TestBox flex>
          <ArrowDropDownIcon />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>
  </RouteDemo>
);

IconSvgDemoRoute.displayName = 'IconSvgDemoRoute';
