'use strict';

import React from 'react';
import {
  RadioGroup,
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

const options = [
  { text: 'Option 1', value: 'v1' },
  { text: 'Option 2', value: 'v2' },
  { text: 'Option 3 - disabled', value: 'v3', disabled: true },
];

export const RadioDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Radio">
      <DemoPreview>
        <TestBox>
          <RadioGroup
            options={options}
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

RadioDemoRoute.displayName = 'RadioDemoRoute';
