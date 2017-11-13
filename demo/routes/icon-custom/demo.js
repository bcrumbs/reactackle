import React from 'react';
import styled from 'styled-components';

import {
  IconCustom,
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
  ${iconSizeMixin('70px', '42px', '50px')}
`;

export const IconCustomDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="IconCustom Source">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <IconCustom />
          <IconCustom
            src="http://files.gamebanana.com/img/ico/sprays/51cb98f9d3747.png"
          />
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
            <IconCustom border />
          </TestBox>
          <TestBox flex title="Rounded">
            <IconCustom border rounded />
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
            <IconCustom border rounded />
          </TestBox>
          <TestBox padding flex title="Small">
            <IconCustom border rounded size="small" />
          </TestBox>
          <TestBox padding flex title="Normal">
            <IconCustom border rounded size="normal" />
          </TestBox>
          <TestBox padding flex title="Large">
            <IconCustom border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="X-Large">
            <IconCustom border rounded size="xlarge" />
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
            <IconCustom size="custom" border borderWidth={2} />
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
            <IconCustom border rounded colorScheme="light" />
          </TestBox>
          <TestBox padding flex title="dark">
            <IconCustom border rounded colorScheme="dark" />
          </TestBox>
          <TestBox padding flex title="custom color">
            <IconCustom border rounded color="palevioletred" />
          </TestBox>

          <TestBox padding flex title="with bg">
            <IconCustom
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
            <IconCustom border rounded size="large" />
          </TestBox>
          <TestBox padding flex title="Flip X">
            <IconCustom border rounded flip="horizontal" size="large" />
          </TestBox>
          <TestBox padding flex title="Flip Y">
            <IconCustom border rounded flip="vertical" size="large" />
          </TestBox>
          <TestBox padding flex title="Rotate 45deg">
            <IconCustom border rounded rotate={45} size="large" />
          </TestBox>
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>
  </RouteDemo>
);

IconCustomDemoRoute.displayName = 'IconCustomDemoRoute';
