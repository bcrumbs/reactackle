'use strict';

import React from 'react';
import {
  Column,
  Row,
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
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';

export const GridRowDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Row default: layoutDirection='horizontal'">
      <DemoPreview>
        <Row>
          <Column size={{ xsmall: 6 }}>
            <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
              1
            </TestBox>
          </Column>
          <Column size={{ xsmall: 6 }}>
            <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
              2
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Row: layoutDirection='vertical'">
      <DemoPreview>
        <Row layoutDirection="vertical">
          <Column size={{ xsmall: 12 }}>
            <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
              1
            </TestBox>
          </Column>
          <Column size={{ xsmall: 12 }}>
            <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
              2
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  
    <DemoSnippet title="Row may compensate Column gutter">
      <DemoPreview>
        <TestBox title="compensateGutter: true">
          <Row layoutDirection="horizontal" compensateGutter>
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                1
              </TestBox>
            </Column>
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                2
              </TestBox>
            </Column>
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                3
              </TestBox>
            </Column>
          </Row>
        </TestBox>
  
        <TestBox title="compensateGutter: false">
          <Row layoutDirection="horizontal">
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                1
              </TestBox>
            </Column>
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                2
              </TestBox>
            </Column>
            <Column size={{ xsmall: 4 }}>
              <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
                3
              </TestBox>
            </Column>
          </Row>
        </TestBox>
        
      </DemoPreview>
      <DemoCode
        code={Snippet3}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Row expanding">
      <DemoPreview>
        <TestBox padding minHeight="400px" flex flexDirection="column">
          <Row layoutDirection="horizontal" expandRatio={2}>
            <TestBox padding spread bgColor="#f4f5fa" bordered width="100%">
              {'expandRatio="2"'}
            </TestBox>
          </Row>
          <Row layoutDirection="horizontal" expandRatio={1}>
            <TestBox padding spread bgColor="#ccc" bordered width="100%">
              {'expandRatio="1'}
            </TestBox>
          </Row>
          <Row layoutDirection="horizontal">
            <TestBox padding spread bgColor="#999" bordered width="100%">
              expandRatio not set
            </TestBox>
          </Row>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>
  
  </RouteDemo>
);

GridRowDemoRoute.displayName = 'GridRowDemoRoute';
