'use strict';

import React from 'react';
import {
  Icon,
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

import Snippet0 from './snippets/0.snippet';
import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';

export const IconDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Icon Source">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Font-awesome Icons">
            <Icon name="android" type="font-awesome" />
          </TestBox>
          <TestBox padding flex title="Custom Icons">
            <Icon
              type="library"
              src="http://files.gamebanana.com/img/ico/sprays/51cb98f9d3747.png"
            />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Bordered Icon">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Bordered Icons">
            <Icon name="android" border />
          </TestBox>
          <TestBox padding flex title="Rounded Icons">
            <Icon name="android" border rounded />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Different Sizes">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Default">
            <Icon name="android" border rounded />
          </TestBox>
          <TestBox padding flex title="Small">
            <Icon name="android" border rounded size="small" />
          </TestBox>
          <TestBox padding flex title="Normal">
            <Icon name="android" border rounded size="normal" />
          </TestBox>
          <TestBox padding flex title="Large">
            <Icon name="android" border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="Normal 2x">
            <Icon
              name="android"
              border
              rounded
              size="normal"
              sizeMultiplier={2}
            />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Coloring">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Light" bgColor="#999">
            <Icon name="android" border rounded colorScheme="light" />
          </TestBox>
          <TestBox padding flex title="dark">
            <Icon name="android" border rounded colorScheme="dark" />
          </TestBox>
          <TestBox padding flex title="custom color">
            <Icon name="android" border rounded color="palevioletred" />
          </TestBox>
          
          <TestBox padding flex title="with bg">
            <Icon
              name="android"
              rounded
              color="palevioletred"
              backgroundColor="#ddd"
            />
          </TestBox>
        
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet3}
      />
    </DemoSnippet>
    
    <DemoSnippet title="Transformations">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Normal">
            <Icon name="bomb" border rounded />
          </TestBox>
          <TestBox padding flex title="Flip X">
            <Icon name="bomb" border rounded flip="horizontal" />
          </TestBox>
          <TestBox padding flex title="Flip Y">
            <Icon name="bomb" border rounded flip="vertical" />
          </TestBox>
          <TestBox padding flex title="Rotate 45deg">
            <Icon name="bomb" border rounded rotate={45} />
          </TestBox>
          <TestBox padding flex title="Spin">
            <Icon name="bomb" border rounded spin />
          </TestBox>
          <TestBox padding flex title="Pulse">
            <Icon name="bomb" border rounded pulse />
          </TestBox>
        
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>
  
  </RouteDemo>
);

IconDemoRoute.displayName = 'IconDemoRoute';
