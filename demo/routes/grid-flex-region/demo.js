'use strict';

import React from 'react';
import {
  FlexRegion,
} from 'reactackle';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
  TestBox,
} from '../../components/DemoSnippet/DemoSnippet';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';

export const GridFlexRegionDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Flex Region: spread">
      <DemoPreview>
        <TestBox flex padding>
          <FlexRegion spread>
            <TestBox spread bgColor="#f4f5fa" padding bordered>1</TestBox>
          </FlexRegion>
          <FlexRegion>
            <TestBox spread bgColor="#E1E4ED" padding bordered>2</TestBox>
          </FlexRegion>
        </TestBox>
        
        <TestBox flex flexDirection="column" minHeight="200px" padding>
          <FlexRegion spread>
            <TestBox spread bgColor="#f4f5fa" padding bordered>1</TestBox>
          </FlexRegion>
          <FlexRegion>
            <TestBox spread bgColor="#E1E4ED" padding bordered>2</TestBox>
          </FlexRegion>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>

    <DemoSnippet title="FlexRegion layout directions">
      <DemoPreview>
        <TestBox flex padding>
          <FlexRegion spread layoutDirection="horizontal">
            <TestBox spread bgColor="#f4f5fa" padding bordered>1</TestBox>
            <TestBox spread bgColor="#E1E4ED" padding bordered>2</TestBox>
          </FlexRegion>
        </TestBox>
        <TestBox flex padding>
          <FlexRegion spread layoutDirection="vertical">
            <TestBox spread bgColor="#f4f5fa" padding bordered>1</TestBox>
            <TestBox spread bgColor="#E1E4ED" padding bordered>2</TestBox>
          </FlexRegion>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

GridFlexRegionDemoRoute.displayName = 'GridFlexRegionDemoRoute';
