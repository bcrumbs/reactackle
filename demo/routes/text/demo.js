import React from 'react';
import { Text } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import SnippetDefault from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';

export const TextDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Text display types">
      <DemoPreview>
        <TestBox maxWidth="550px">
          <TestBox padding flex flexDirection="column">
            <Text display="default">
              Default text (display: default) — lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </Text>
          </TestBox>

          <TestBox padding flex flexDirection="column" contentSpacing>
            <Text display="display4">
              Display 4
            </Text>
            <Text display="display3">
              Display 3
            </Text>
            <Text display="display2">
              Display 2
            </Text>
            <Text display="display1">
              Display 1
            </Text>
            <Text display="headline">
              Headline
            </Text>
            <Text display="title">
              Title
            </Text>
            <Text display="subheading">
              Subheading
            </Text>
            <Text display="bodyStrong">
              Strong body text (display: bodyStrong) — lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </Text>
            <Text display="body">
              Body text (display: body) — lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </Text>
            <Text display="caption">
              Caption text (display: caption) — lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </Text>
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>

    <DemoSnippet title="Text with tooltip">
      <DemoPreview>
        <Text tooltipText="Tootip">Hover me</Text>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

TextDemoRoute.displayName = 'TextDemoRoute';
