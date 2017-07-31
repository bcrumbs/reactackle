'use strict';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Theme } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
  TestBox,
} from '../../components/DemoSnippet/DemoSnippet';

import Snippet1 from './snippets/1.snippet';

const mixin1 = {
  color: {
    main: 'palevioletred',
  },
};

const mixin2 = {
  color: {
    mainFgTextColor: 'gold',
  },
  components: {
    button: {
      colorScheme: {
        primary: {
          backgroundColor: 'black',
        },
      },
    },
  },
};

const userTheme1 = {
  myTheme: {
    customStyle: '10px',
  },
};

const userTheme2 = {
  myTheme: {
    customStyle: '20px',
  },
};

export const ThemeDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Default Theme">
      <DemoPreview>
        <TestBox contentSpaced>
          <Button colorScheme="primary" text="primary button" />
          <ThemeProvider theme={userTheme1}>
            <Theme mixin={mixin1}>
              <Button colorScheme="primary" text="primary button styled" />
            </Theme>
          </ThemeProvider>
          <Theme mixin={mixin2}>
            <ThemeProvider theme={userTheme2}>
              <Button colorScheme="primary" text="primary button styled" />
            </ThemeProvider>
          </Theme>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
  </RouteDemo>
);

ThemeDemoRoute.displayName = 'ThemeDemoRoute';
