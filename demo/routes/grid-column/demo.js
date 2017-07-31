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

import Snippet2 from './snippets/2.snippet';
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';
import Snippet5 from './snippets/5.snippet';
import Snippet6 from './snippets/6.snippet';
import Snippet7 from './snippets/7.snippet';

export const GridColumnDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Column may have various width">
      <DemoPreview>
        <Row>
          <Column size={{ small: 6, medium: 3 }}>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              column 1
            </TestBox>
          </Column>
          <Column size={{ small: 6, medium: 3 }}>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              column 2
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Column collapsed">
      <DemoPreview>
        <Row>
          <Column size={{ xsmall: 6 }} collapsed>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              column 1
            </TestBox>
          </Column>
          <Column size={{ xsmall: 6 }} collapsed>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              column 2
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet3}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Column centering">
      <DemoPreview>
        <Row>
          <Column
            size={{ xsmall: 4 }}
            centered={{ xsmall: false, medium: true, large: false }}
          >
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              column centered from medium to large screens
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Column: layoutDirection">
      <DemoPreview>
        <Row>
          <Column size={{ xsmall: 6 }} layoutDirection="horizontal">
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              horizontal
            </TestBox>
          </Column>
          <Column size={{ xsmall: 6 }} layoutDirection="vertical">
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered width="100%">
              vertical
            </TestBox>
          </Column>
        </Row>
      </DemoPreview>
      <DemoCode
        code={Snippet5}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Column: crossAxisAlign">
      <DemoPreview>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="crossAxisAlign: stretch"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            crossAxisAlign="stretch"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            crossAxisAlign="stretch"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="crossAxisAlign: center"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            crossAxisAlign="center"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            crossAxisAlign="center"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="crossAxisAlign: start"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            crossAxisAlign="start"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            crossAxisAlign="start"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="crossAxisAlign: end"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            crossAxisAlign="end"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            crossAxisAlign="end"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet6}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Column: mainAxisAlign">
      <DemoPreview>
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="mainAxisAlign: start"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            mainAxisAlign="start"
            spread
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            mainAxisAlign="start"
            spread
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="mainAxisAlign: end"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            mainAxisAlign="end"
            spread
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            mainAxisAlign="end"
            spread
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="mainAxisAlign: center"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            mainAxisAlign="center"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            mainAxisAlign="center"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="mainAxisAlign: evenSpaceBetween"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            mainAxisAlign="evenSpaceBetween"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            mainAxisAlign="evenSpaceBetween"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        
        </TestBox>
        
        <TestBox
          bgColor="#f4f5fa"
          flex
          spaced
          minHeight="200px"
          title="mainAxisAlign: evenSpaceAround"
          alignItems="stretch"
        >
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="horizontal"
            mainAxisAlign="evenSpaceAround"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              horizontal
            </TestBox>
          </Column>
          <Column
            size={{ xsmall: 6 }}
            layoutDirection="vertical"
            mainAxisAlign="evenSpaceAround"
          >
            <TestBox padding bgColor="#f4f5fa" bordered>
              layoutDirection
            </TestBox>
            <TestBox padding bgColor="#f4f5fa" bordered>
              vertical
            </TestBox>
          </Column>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet7}
      />
    </DemoSnippet>
  </RouteDemo>
);

GridColumnDemoRoute.displayName = 'GridColumnDemoRoute';
