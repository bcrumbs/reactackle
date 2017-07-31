'use strict';

import React from 'react';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import Snippet0 from './snippets/0.snippet';
import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import HeaderDemoSnippet from './HeaderDemoSnippet';

export const HeaderDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Static header">
      <DemoPreview>
        <HeaderDemoSnippet snippetNum={2} />
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>

    <DemoSnippet title="Fixed header">
      <DemoPreview>
        <HeaderDemoSnippet snippetNum={1} />
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>

    <DemoSnippet title="Auto-hide header with visible condensed part">
      <DemoPreview>
        <HeaderDemoSnippet snippetNum={0} />
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>
  </RouteDemo>
);

HeaderDemoRoute.displayName = 'HeaderDemoRoute';
