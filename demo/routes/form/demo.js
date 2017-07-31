'use strict';

import React from 'react';
import {
  Form,
  TextField,
  Button,
  FormItem,
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
import Snippet2 from './snippets/2.snippet';

export const FormDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Simple Form">
      <DemoPreview >
        <Form>
          <FormItem>
            <TextField label="Your name" />
          </FormItem>
          <FormItem>
            <Button text="Submit" colorScheme="primary" />
          </FormItem>
        </Form>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>

    <DemoSnippet title="Error handling">
      <DemoPreview>
        <Form errorMessage="Some error happened">
          <FormItem>
            <TextField label="Your name" />
          </FormItem>
          <FormItem>
            <Button text="Submit" colorScheme="primary" />
          </FormItem>
        </Form>
      </DemoPreview>
      <DemoCode
        code={Snippet2}
      />
    </DemoSnippet>
  </RouteDemo>
);

FormDemoRoute.displayName = 'FormDemoRoute';
