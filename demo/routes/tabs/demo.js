import React from 'react';
import { Tabs, IconDefault } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';
import Snippet2 from './snippets/2.snippet';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
  TestBox,
} from '../../components/DemoSnippet/DemoSnippet';

const tabs = [
  {
    isSelected: true,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20,5.6C20,4.7,19.3,4,18.4,4H5.6C4.7,4,4,4.7,4,5.6v9.6c0,0.9,0.7,1.6,1.6,1.6h11.2L20,20L20,5.6z" />
      </svg>
    ),
    text: 'Tab 1',
  },
  {
    isSelected: false,
    icon: <IconDefault />,
    text: 'Tab 2',
  },
  {
    isSelected: false,
    icon: <IconDefault />,
    text: 'Tab 3',
  },
  {
    isSelected: false,
    text: 'Tab 4',
  },
  {
    linkhref: '',
    isSelected: false,
    icon: <IconDefault />,
  },
];

export const TabsDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Color Schemes">
      <DemoPreview>
        <TestBox bgColor="#D5DAE3" padding>
          <TestBox title="dark colorScheme">
            <Tabs
              tabs={tabs}
              colorScheme="dark"
            />
          </TestBox>
          <TestBox title="light colorScheme">
            <Tabs
              tabs={tabs}
              colorScheme="light"
            />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

TabsDemoRoute.displayName = 'TabsDemoRoute';
