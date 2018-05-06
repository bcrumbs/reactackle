import React from 'react';

import { Breadcrumbs } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import SnippetDefault from './snippets/1.snippet';
import SnippetOverflow from './snippets/2.snippet';
import SnippetColor from './snippets/3.snippet';
import SnippetSeparator from './snippets/4.snippet';
import { IconSvg } from '../../../packages/reactackle-icons/dist/IconSvg';

const SAMPLE_LIST = [
  {
    title: 'Index',
    subtitle: 'Index subtitle',
    home: true,
    itemHref: 'index',
  },
  {
    title: 'Catalog',
    subtitle: 'Catalog subtitle',
    itemHref: 'catalog',
    isActive: true,
  },
];

export const BreadcrumbsDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Default Breadcrumbs">
      <DemoPreview>
        <Breadcrumbs
          colorScheme="dark"
          items={SAMPLE_LIST}
          separatorType="icon"
        />
      </DemoPreview>
      <DemoCode code={SnippetDefault} />
    </DemoSnippet>

    <DemoSnippet title="Extremely long Breadcrumbs with overflow">
      <DemoPreview>
        <Breadcrumbs
          colorScheme="dark"
          overflow
          
          items={[
            {
              title: 'Index',
              home: true,
              itemHref: 'index',
            },
            {
              title: 'Catalog',
              subtitle: 'Catalog subtitle',
              itemHref: 'catalog',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
            },
            {
              title: 'Item',
              itemHref: 'item',
              isActive: true,
            },
          ]}
        />
      </DemoPreview>
      <DemoCode code={SnippetOverflow} />
    </DemoSnippet>

    <DemoSnippet title="Light color scheme">
      <DemoPreview>
        <div style={{ backgroundColor: '#333', padding: '10px' }}>
          <Breadcrumbs
            colorScheme="light"
            items={SAMPLE_LIST}
          />
        </div>
      </DemoPreview>
      <DemoCode code={SnippetColor} />
    </DemoSnippet>

    <DemoSnippet title="Custom separator">
      <DemoPreview>
        <Breadcrumbs
          colorScheme="dark"
          separatorType="text"
          separatorIcon="/"
          items={SAMPLE_LIST}
        />
      </DemoPreview>
      <DemoCode code={SnippetSeparator} />
    </DemoSnippet>
  </RouteDemo>
);

BreadcrumbsDemoRoute.displayName = 'BreadcrumbsDemoRoute';
