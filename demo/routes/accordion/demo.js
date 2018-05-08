import React from 'react';
import { Accordion } from 'reactackle';
import { RouteDemo } from '../../components/Route/RouteStructure';

import {
  TestBox,
  DemoSnippet,
  DemoPreview,
  DemoCode,
} from '../../components/DemoSnippet/DemoSnippet';

import SnippetDefault from './snippets/1.snippet';
import SnippetExpanded from './snippets/2.snippet';
import SnippetSingle from './snippets/3.snippet';
import SnippetHeaderComponent from './snippets/4.snippet';
import SnippetStateless from './snippets/5.snippet';
import SnippetExpandAll from './snippets/6.snippet';
  
const SAMPLE_ITEMS = [
  {
    id: '1',
    title: 'Accordion Item 1',
    content: [<div key={0}>Place here some data</div>],
  },
  {
    id: '2',
    title: 'Accordion Item 2',
    content: [<div key={0}>Place here some data</div>],
  },
];

const SAMPLE_ITEMS_CUSTOM_HEADING = [
  {
    id: '1',
    title: 'Accordion Item 1',
    content: [<div key={0}>Place here some data</div>],
    headerSlot: [<em key={0}>Some header component</em>],
  },
  {
    id: '2',
    title: 'Accordion Item 2',
    content: [<div key={0}>Place here some data</div>],
    headerSlot: [<em key={0}>Some header component</em>],
  },
];


export const AccordionDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Default accordion">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion items={SAMPLE_ITEMS} />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetDefault} />
    </DemoSnippet>
    <DemoSnippet title="Accordion with all items expanded by default">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion items={SAMPLE_ITEMS} expandAll />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetExpandAll} />
    </DemoSnippet>
    <DemoSnippet title="Only single item can be opened">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion items={SAMPLE_ITEMS} single />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetSingle} />
    </DemoSnippet>
    <DemoSnippet title="Accordion with expanded items">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion
            items={SAMPLE_ITEMS}
            expandedItemIds={['2']}
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetExpanded} />
    </DemoSnippet>
    <DemoSnippet title="Accordion Item with HeaderSlot">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion items={SAMPLE_ITEMS_CUSTOM_HEADING} />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetHeaderComponent} />
    </DemoSnippet>
    <DemoSnippet title="Accordion with expanded items and stateless">
      <DemoPreview>
        <TestBox maxWidth="500px">
          <Accordion
            items={SAMPLE_ITEMS}
            expandedItemIds={['2']}
            stateless
          />
        </TestBox>
      </DemoPreview>
      <DemoCode code={SnippetStateless} />
    </DemoSnippet>
  </RouteDemo>
);

AccordionDemoRoute.displayName = 'AccordionDemoRoute';
