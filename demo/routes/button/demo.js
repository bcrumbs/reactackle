import React from 'react';
import { Button, IconSvg } from 'reactackle';
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
import Snippet6 from './snippets/6.snippet';
import Snippet7 from './snippets/7.snippet';

const DemoIcon = props => (
  <IconSvg size="custom" {...props}>
    <svg viewBox="0 0 24 24">
      <polygon points="9,19.4 3.3,13.7 4.7,12.3 9,16.6 19.8,5.8 21.2,7.2" />
    </svg>
  </IconSvg>
);

const ArrowBack = props => (
  <IconSvg size="custom" {...props}>
    <svg viewBox="0 0 24 24">
      <polygon points="20,11 8.4,11 13.7,5.7 12.3,4.3 4.6,12 12.3,19.7 13.7,18.3 8.4,13 20,13 " />
    </svg>
  </IconSvg>
);

const ArrowForward = props => (
  <IconSvg size="custom" {...props}>
    <svg viewBox="0 0 24 24">
      <polygon points="12.7,4.3 11.3,5.7 16.6,11 5,11 5,13 16.6,13 11.3,18.3 12.7,19.7 20.4,12 " />
    </svg>
  </IconSvg>
);

export const ButtonDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Sizes">
      <DemoPreview>
        <TestBox contentSpaced flex>
          <Button
            text="Inline Button"
            colorScheme="primary"
            size="inline"
            alternateTitle="alternate title"
          />

          <Button
            text="Small Button"
            colorScheme="secondary"
            size="small"
          />

          <Button
            text="Normal Button"
            colorScheme="info"
            size="normal"
          />

          <Button
            text="Large Button"
            colorScheme="success"
            size="large"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet0}
      />
    </DemoSnippet>

    <DemoSnippet title="Button radius">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <Button
            text="Button with zero radius"
            colorScheme="primary"
            radius="none"
          />

          <Button
            text="Button default"
            colorScheme="secondary"
            radius="default"
          />

          <Button
            text="Button rounded"
            colorScheme="info"
            radius="rounded"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>

    <DemoSnippet title="Icon only Button">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <Button
            icon={<ArrowForward />}
            colorScheme="success"
          />
          <Button
            icon={<ArrowForward />}
            radius="rounded"
            colorScheme="success"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>

    <DemoSnippet title="Raised Button">
      <DemoPreview>
        <Button
          text="Raised Button"
          raised
          colorScheme="warning"
        />
      </DemoPreview>
      <DemoCode
        code={Snippet3}
      />
    </DemoSnippet>

    <DemoSnippet title="Color Schemes">
      <DemoPreview>
        <TestBox padding flex contentSpaced>
          <Button
            icon={<DemoIcon />}
            text="Flat Button"
            colorScheme="flat"
          />
          <Button
            icon={<DemoIcon />}
            text="Flat Outlined Button"
            outlined
            colorScheme="flat"
          />
        </TestBox>
        <TestBox padding bgColor="#6f7c92" flex contentSpaced>
          <Button
            icon={<DemoIcon />}
            text="Flat light Button"
            colorScheme="flatLight"
          />
          <Button
            icon={<DemoIcon />}
            text="Flat light Outlined Button"
            outlined
            colorScheme="flatLight"
          />
        </TestBox>
        <TestBox padding flex contentSpaced>
          <Button
            icon={<DemoIcon />}
            text="primary Button"
            colorScheme="primary"
          />
          <Button
            icon={<DemoIcon />}
            text="primary Outlined Button"
            outlined
            colorScheme="primary"
          />
        </TestBox>
        <TestBox padding bgColor="#6f7c92" flex contentSpaced>
          <Button
            icon={<DemoIcon />}
            text="white Button"
            colorScheme="white"
          />
          <Button
            icon={<DemoIcon />}
            text="white Outlined Button"
            outlined
            colorScheme="white"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet4}
      />
    </DemoSnippet>

    <DemoSnippet title="Complex Button">
      <DemoPreview>
        <TestBox flex contentSpaced>
          <Button
            text="Registration"
            subtitle="Next"
            colorScheme="primary"
            icon={<ArrowForward />}
            iconPositionRight
          />

          <Button
            text="Your Order"
            subtitle="Back"
            colorScheme="secondary"
            icon={<ArrowBack />}
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet5}
      />
    </DemoSnippet>

    <DemoSnippet title="Narrow Button">
      <DemoPreview>
        <TestBox>
          <Button
            text="Normal Button"
            colorScheme="secondary"
          />
        </TestBox>

        <TestBox spaced>
          <Button
            text="Narrow Button"
            colorScheme="secondary"
            narrow
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet6}
      />
    </DemoSnippet>
  
    <DemoSnippet title="Button can be an Anchor">
      <DemoPreview>
        <TestBox contentSpaced>
          <Button
            text="Link Button (inspect me)"
            colorScheme="primary"
            href="#/button/demo"
          />

          <Button
            text="Normal Button (inspect me)"
            colorScheme="primary"
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet7}
      />
    </DemoSnippet>
  </RouteDemo>
);

ButtonDemoRoute.displayName = 'ButtonDemoRoute';
