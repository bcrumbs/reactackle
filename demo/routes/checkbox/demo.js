import React from 'react';
import {
  Checkbox,
} from 'reactackle';
import {
  RouteDemo,
} from '../../components/Route/RouteStructure';
import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';
import SnippetDefault from './snippets/1.snippet';
import Snippet1 from './snippets/2.snippet';
import Snippet2 from './snippets/3.snippet';

export const CheckboxDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Checkbox Example">
      <DemoPreview >
        <Checkbox label="Simple Checkbox" tooltip="some tooltip" />
        <Checkbox disabled label="Disabled checkbox" />
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>

    <DemoSnippet title="Checkbox elements">
      <DemoPreview >
        <Checkbox
          tooltip="some tooltip"
          labelElement={
            <div>
              Label with <a href="#">some anchor</a>
            </div>
          }
        />
        <Checkbox
          label="Disabled checkbox"
          errorMessage="Some error happened"
        />
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>

    <DemoSnippet title="Empty Checkbox with tooltip">
      <DemoPreview >
        <Checkbox tooltip="some tooltip" />
      </DemoPreview>
      <DemoCode
        code={Snippet1}
      />
    </DemoSnippet>
  </RouteDemo>
);

CheckboxDemoRoute.displayName = 'CheckboxDemoRoute';
