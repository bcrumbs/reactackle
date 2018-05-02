import React from 'react';
import { Preloader } from 'reactackle';

import {
  RouteDemo,
} from '../../../components/Route/RouteStructure';

import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../../components/DemoSnippet/DemoSnippet';

import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';

export const PreloaderDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Linear preloader">
      <DemoPreview>
        <Preloader
          kind="linear"
          labelAlign="center"
          subtitle="Loading..."
        />
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>

    <DemoSnippet title="Circle preloader">
      <DemoPreview>
        <Preloader kind="circle" />
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

PreloaderDemoRoute.displayName = 'PreloaderDemoRoute';
