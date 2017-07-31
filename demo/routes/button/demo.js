'use strict';

import React from 'react';
import { Button } from 'reactackle';
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

export const ButtonDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Sizes">
      <DemoPreview>
        <TestBox contentSpaced flex>
          <Button
            icon={{ name: 'apple' }}
            text="Inline Button"
            colorScheme="primary"
            size="inline"
            alternateTitle="alternate title"
          />

          <Button
            icon={{ name: 'apple' }}
            text="Small Button"
            colorScheme="secondary"
            size="small"
          />

          <Button
            icon={{ name: 'qq' }}
            text="Normal Button"
            colorScheme="info"
            size="normal"
          />

          <Button
            icon={{ name: 'android' }}
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
          <Button icon={{ name: 'apple' }} colorScheme="success" />
          <Button
            icon={{ name: 'apple' }}
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
          icon={{ name: 'android' }}
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
            icon={{ name: 'apple' }}
            text="Flat Button"
            colorScheme="flat"
          />

          <Button
            icon={{ name: 'apple' }}
            text="Flat Outlined Button"
            outlined
            colorScheme="flat"
          />
        </TestBox>
        <TestBox padding bgColor="#6f7c92" flex contentSpaced>
          <Button
            icon={{ name: 'apple' }}
            text="Flat light Button"
            colorScheme="flatLight"
          />

          <Button
            icon={{ name: 'apple' }}
            text="Flat light Outlined Button"
            outlined
            colorScheme="flatLight"
          />
        </TestBox>
        <TestBox padding flex contentSpaced>
          <Button
            icon={{ name: 'apple' }}
            text="primary Button"
            colorScheme="primary"
          />
          <Button
            icon={{ name: 'apple' }}
            text="primary Outlined Button"
            outlined
            colorScheme="primary"
          />
        </TestBox>
        <TestBox padding bgColor="#6f7c92" flex contentSpaced>
          <Button
            icon={{ name: 'apple' }}
            text="white Button"
            colorScheme="white"
          />
          <Button
            icon={{ name: 'apple' }}
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
            icon={{ name: 'arrow-right' }}
            iconPositionRight
          />

          <Button
            text="Your Order"
            subtitle="Back"
            colorScheme="secondary"
            icon={{ name: 'arrow-left' }}
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
            icon={{ name: 'link' }}
          />

          <Button
            text="Normal Button (inspect me)"
            colorScheme="secondary"
            icon={{ name: 'hand-pointer-o' }}
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
