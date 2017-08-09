import React from 'react';
import {
  CircleProgress,
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

export const CircleProgressDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Determination">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding>
            <CircleProgress />
          </TestBox>
          <TestBox padding>
            <CircleProgress value={25} />
          </TestBox>
          <TestBox padding>
            <CircleProgress value={25} secondaryProgress={63} />
          </TestBox>
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
            <CircleProgress
              value={25}
              progressLabel
              color="blue"
              labelAlign="left"
              progressSupplementText="With custom color"
            />
          </TestBox>

          <TestBox padding>
            <CircleProgress
              value={25}
              progressLabel
              labelAlign="left"
              progressSupplementText="Without dynamic color"
            />
          </TestBox>

          <TestBox padding>
            <CircleProgress
              value={25}
              dynamicColor
              progressLabel
              labelAlign="right"
              progressSupplementText="With dynamic color"
            />
          </TestBox>
          <TestBox padding>
            <CircleProgress
              value={50}
              dynamicColor
              progressLabel
              labelPositionY="bottom"
              progressSupplementText="With dynamic color"
            />
          </TestBox>
          <TestBox padding>
            <CircleProgress
              value={100}
              dynamicColor
              progressLabel
              progressSupplementText="With dynamic color"
            />
          </TestBox>
          <TestBox padding>
            <CircleProgress
              value={100}
              circleSize={300}
              dynamicColor
              progressLabel
              labelPositionY="center"
              progressSupplementText="With dynamic color"
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

CircleProgressDemoRoute.displayName = 'CircleProgressDemoRoute';
