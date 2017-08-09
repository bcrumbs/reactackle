import React from 'react';
import {
  LinearProgress,
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
import Snippet2 from './snippets/2.snippet';

export const LinearProgressDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Determination">
      <DemoPreview>
        <TestBox padding spread>
          <LinearProgress />
        </TestBox>
        <TestBox padding spread >
          <LinearProgress value={25} color="blue" />
        </TestBox>
        <TestBox padding spread >
          <LinearProgress value={25} secondaryProgress={63} />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
    <DemoSnippet title="Styling">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding>
            <LinearProgress
              value={25}
              progressLabel
              progressSupplementText="Not dynamic color"
            />
          </TestBox>

          <TestBox padding>
            <LinearProgress
              value={25}
              dynamicColor
              progressLabel
              progressSupplementText="With dynamic color"
            />
          </TestBox>
          <TestBox padding>
            <LinearProgress
              value={50}
              dynamicColor
              progressLabel
              progressSupplementText="With dynamic color"
              alignX="center"
            />
          </TestBox>
          <TestBox padding>
            <LinearProgress
              value={100}
              dynamicColor
              progressLabel
              progressSupplementText="With dynamic color"
              alignX="right"
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

LinearProgressDemoRoute.displayName = 'LinearProgressDemoRoute';
