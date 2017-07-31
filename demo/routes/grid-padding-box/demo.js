'use strict';

import React from 'react';
import {
  PaddingBox,
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

export const GridPaddingBoxDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Padding box">
      <DemoPreview>
        <TestBox bordered>
          <PaddingBox paddingSize="small">
            <TestBox bgColor="#f4f5fa" spread padding>
              padding size: small
            </TestBox>
          </PaddingBox>
        </TestBox>
        <TestBox bordered>
          <PaddingBox paddingSize="medium">
            <TestBox
              bgColor="#f4f5fa"
              spread padding
            >
              padding size: medium
            </TestBox>
          </PaddingBox>
        </TestBox>
        <TestBox bordered>
          <PaddingBox paddingSize="large">
            <TestBox bgColor="#f4f5fa" spread padding>
              padding size: large
            </TestBox>
          </PaddingBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
  
    <DemoSnippet title="Padding can be removed">
      <DemoPreview>
        <TestBox bordered>
          <PaddingBox paddingSize="large" removePadding="horizontal" >
            <TestBox bgColor="#f4f5fa" spread padding>
              padding size large, without x-spacing
            </TestBox>
          </PaddingBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

GridPaddingBoxDemoRoute.displayName = 'GridPaddingBoxDemoRoute';
