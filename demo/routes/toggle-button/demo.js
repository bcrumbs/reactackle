'use strict';

import React from 'react';
import {
  ToggleButton,
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

export const ToggleButtonDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Some demo">
      <DemoPreview>
        <TestBox padding maxWidth="200px">
          <ToggleButton label="Sample ToggleButton" />
        </TestBox>
        <TestBox padding maxWidth="200px">
          <ToggleButton
            label="Sample ToggleButton with right label"
            labelPosition="right"
          />
        </TestBox>
        <TestBox padding maxWidth="200px">
          <ToggleButton label="ToggleButton with Tooltip" tooltip="yo-ho-ho!" />
        </TestBox>
        <TestBox padding maxWidth="200px">
          <ToggleButton
            defaultChecked
            label="ToggleButton with Tooltip"
            tooltip="yo-ho-ho!"
          />
        </TestBox>
        <TestBox padding maxWidth="200px">
          <ToggleButton label="Disabled ToggleButton" disabled />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

ToggleButtonDemoRoute.displayName = 'ToggleButtonDemoRoute';
