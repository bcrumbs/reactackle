import React from 'react';
import { CircleProgress } from 'reactackle';

import { RouteDemo } from '../../../components/Route/RouteStructure';

import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../../components/DemoSnippet/DemoSnippet';

import Snippet1 from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';
import Snippet3 from './snippets/3.snippet';
import Snippet4 from './snippets/4.snippet';
import Snippet5 from './snippets/5.snippet';
import Snippet6 from './snippets/6.snippet';
import Snippet7 from './snippets/7.snippet';

export const CircleProgressDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Determination">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <CircleProgress indeterminate subtitle="Indeterminate Progress" />
          <CircleProgress value={25} subtitle="Determinate Progress" />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet1} />
    </DemoSnippet>

    <DemoSnippet title="Secondary Progress">
      <DemoPreview>
        <TestBox flex>
          <CircleProgress
            value={25}
            withSecondaryProgress
            secondaryProgressValue={63}
            subtitle="With secondary progress"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet2} />
    </DemoSnippet>

    <DemoSnippet title="Colors">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <CircleProgress
            value={25}
            progressLabel
            subtitle="Without dynamic color"
          />
          <CircleProgress
            value={25}
            dynamicColor
            progressLabel
            subtitle="With dynamic color"
          />
          <CircleProgress
            value={62}
            dynamicColor
            progressLabel
            subtitle="With dynamic color"
          />
          <CircleProgress
            value={100}
            dynamicColor
            progressLabel
            subtitle="With dynamic color"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet3} />
    </DemoSnippet>
  
    <DemoSnippet title="Label horizontal positions">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <CircleProgress
            value={25}
            progressLabel
            labelPositionX="left"
            subtitle="labelPositionX - left"
          />
          <CircleProgress
            value={62}
            progressLabel
            labelPositionX="right"
            subtitle="labelPositionX - right"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet4} />
    </DemoSnippet>
  
    <DemoSnippet title="Label vertical positions">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <CircleProgress
            value={62}
            dynamicColor
            progressLabel
            labelPositionY="center"
          />
          <CircleProgress
            value={50}
            dynamicColor
            progressLabel
            labelPositionY="bottom"
            subtitle="labelPositionY - bottom"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet5} />
    </DemoSnippet>

    <DemoSnippet title="Label postfix">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <CircleProgress
            value={62}
            subtitle="Exact value label"
            progressLabel
            exactProgressLabel
          />

          <CircleProgress
            value={62}
            subtitle="Exact value label with custom postfix"
            progressLabel
            exactProgressLabel
            labelPostfix=" ms"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet7} />
    </DemoSnippet>
  
    <DemoSnippet title="Complex label">
      <DemoPreview>
        <TestBox flex>
          <CircleProgress
            value={62}
            circleSize={300}
            color="#3c5da1"
            progressLabel
            labelPositionY="center"
          >
            <strong>Progress with custom label component</strong>
          </CircleProgress>
        </TestBox>
      </DemoPreview>
      <DemoCode code={Snippet6} />
    </DemoSnippet>
  </RouteDemo>
);

CircleProgressDemoRoute.displayName = 'CircleProgressDemoRoute';
