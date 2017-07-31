'use strict';

import React from 'react';
import { Tabs } from 'reactackle';
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
    icon: {
      name: 'amazon',
    },
    text: 'Tab 1',
  },
  {
    isSelected: false,
    icon: {
      name: 'android',
    },
    text: 'Tab 2',
  },
  {
    isSelected: false,
    icon: {
      name: 'adn',
    },
    text: 'Tab 3',
  },
  {
    isSelected: false,
    text: 'Tab 4',
  },
  {
    linkhref: '',
    isSelected: false,
    icon: {
      name: 'chrome',
    },
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
