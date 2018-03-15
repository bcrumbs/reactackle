import React from 'react';
import styled from 'styled-components';

import {
  IconSvg,
  iconSizeMixin,
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
import Snippet5 from './snippets/5.snippet';


const TestWrapper = styled.div`
  ${iconSizeMixin('70px', '50px', '50px')}
`;

export const IconSvgDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="IconSvg Use">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <IconSvg />
          <IconSvg>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
              <path d="M7,10l5,5l5-5H7z" />
            </svg>
          </IconSvg>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>

    <DemoSnippet title="Bordered Icon">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <TestBox flex title="Bordered">
            <IconSvg border />
          </TestBox>
          <TestBox flex title="Rounded">
            <IconSvg border rounded />
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
            <IconSvg border rounded />
          </TestBox>
          <TestBox padding flex title="Small">
            <IconSvg border rounded size="small" />
          </TestBox>
          <TestBox padding flex title="Normal">
            <IconSvg border rounded size="normal" />
          </TestBox>
          <TestBox padding flex title="Large">
            <IconSvg border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="X-Large">
            <IconSvg border rounded size="xlarge" />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>

    <DemoSnippet title="Custom Size">
      <DemoPreview>
        <TestBox flex>
          <TestWrapper>
            <IconSvg size="custom" border borderWidth={2} />
          </TestWrapper>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet5}
      />
    </DemoSnippet>

    <DemoSnippet title="Coloring">
      <DemoPreview>
        <TestBox flex>
          <TestBox padding flex title="Light" bgColor="#999">
            <IconSvg border rounded colorScheme="light" />
          </TestBox>
          <TestBox padding flex title="dark">
            <IconSvg border rounded colorScheme="dark" />
          </TestBox>
          <TestBox padding flex title="custom color">
            <IconSvg border rounded color="palevioletred" />
          </TestBox>

          <TestBox padding flex title="with bg">
            <IconSvg
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
            <IconSvg border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="Flip X">
            <IconSvg border rounded flip="horizontal" size="large" />
          </TestBox>
          <TestBox padding flex title="Flip Y">
            <IconSvg border rounded flip="vertical" size="large" />
          </TestBox>
          <TestBox padding flex title="Rotate 45deg">
            <IconSvg border rounded rotate={45} size="large" />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>
  </RouteDemo>
);

IconSvgDemoRoute.displayName = 'IconSvgDemoRoute';
