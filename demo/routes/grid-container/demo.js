'use strict';

import React from 'react';
import {
  Container,
} from 'reactackle';
import {
  DemoSnippet,
  DemoCode,
  TestBox,
} from '../../components/DemoSnippet/DemoSnippet';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import Snippet1 from './snippets/1.snippet';

export const GridContainerDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Container">
      <Container>
        <TestBox padding bordered bgColor="#f4f5fa" spread>
          Default container (expand your window to see differences)
        </TestBox>
      </Container>
      <Container boxed>
        <TestBox padding bordered bgColor="#f4f5fa" spread>
          Boxed container
        </TestBox>
      </Container>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
  </RouteDemo>
);

GridContainerDemoRoute.displayName = 'GridContainerDemoRoute';
