import React from 'react';
import { Tag, IconSvg } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import SnippetDefault from './snippets/1.snippet';
import Snippet2 from './snippets/2.snippet';

export const TagDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Some demo">
      <DemoPreview>
        <TestBox contentSpaced>
          <Tag text="simple tag" />
          <Tag
            text="simple tag with icon"
            icon={<IconSvg />}
          />
          <Tag text="tag with tooltip" tooltipText="tooltip" />
          <Tag text="removable tag" removable />
        </TestBox>

        <TestBox maxWidth="200px" contentSpaced>
          <Tag
            text="bounded tag with forbidden line wrapping."
            tooltipText="bounded tag with forbidden line wrapping."
            bounded
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>

    <DemoSnippet title="Custom styling">
      <DemoPreview>
        <TestBox contentSpaced>
          <Tag
            text="simple tag"
            bgColor="palevioletred"
            iconColor="papayawhip"
            textColor="white"
            icon={<IconSvg />}
          />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

TagDemoRoute.displayName = 'TagDemoRoute';
