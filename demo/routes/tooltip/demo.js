import React from 'react';

import {
  withTooltip,
  Button,
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

import SnippetDefaultDynamic from './snippets/1.snippet';
import SnippetCustomDynamic from './snippets/2.snippet';
import SnippetDefaultStatic from './snippets/3.snippet';
import SnippetCustomStatic from './snippets/4.snippet';

/* eslint-disable react/prop-types */

const ComponentWithDefaultDynamicTooltip = props => {
  const wrapperProps = {
    onClick: props.toggleTooltip,
    onFocus: props.showTooltip,
    onBlur: props.hideTooltip,
    onMouseEnter: props.showTooltip,
    onMouseLeave: props.hideTooltip,
    tabIndex: '1',
  };
  return (
    <div {...wrapperProps}>
      <strong>Hover me</strong>
      <props.Tooltip>
        {props.text}
      </props.Tooltip>
    </div>
  );
};
const ComponentWithCustomDynamicTooltip = props => {
  const wrapperProps = {
    onClick: props.toggleTooltip,
    onFocus: props.showTooltip,
    onBlur: props.hideTooltip,
    onMouseEnter: props.showTooltip,
    onMouseLeave: props.hideTooltip,
    tabIndex: '1',
  };
  return (
    <div {...wrapperProps}>
      <strong>Hover me</strong>
      <props.TooltipSlot>
        {({ tooltipRef }) =>
          <div ref={tooltipRef}>
            {props.content}
          </div>
        }
      </props.TooltipSlot>
    </div>
  );
};

const ComponentWithDefaultStaticTooltip = props => {
  const wrapperProps = {
    onClick: props.toggleTooltip,
    tabIndex: '1',
  };
  return (
    <div {...wrapperProps}>
      <strong>Click me</strong>
      <props.Tooltip>
        {props.content}
      </props.Tooltip>
    </div>
  );
};
const ComponentWithCustomStaticTooltip = props => {
  const wrapperProps = {
    onClick: props.toggleTooltip,
    tabIndex: '1',
  };
  return (
    <div {...wrapperProps}>
      <strong>Click me</strong>
      <props.TooltipSlot>
        {({ tooltipRef }) =>
          <div ref={tooltipRef}>
            <props.tooltipRenderer hideTooltip={props.hideTooltip}  />
          </div>
        }
      </props.TooltipSlot>
    </div>
  );
};

const WithDefaultDynamicTooltip =
  withTooltip(ComponentWithDefaultDynamicTooltip);

const WithCustomDynamicTooltip = withTooltip(ComponentWithCustomDynamicTooltip);
const WithDefaultStaticTooltip = withTooltip(ComponentWithDefaultStaticTooltip);
const WithCustomStaticTooltip = withTooltip(ComponentWithCustomStaticTooltip);

export const TooltipDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Dynamic tooltip with default wrapper">
      <DemoPreview>
        <TestBox>
          <WithDefaultDynamicTooltip text="Just usual text" mode="dynamic" />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetDefaultDynamic}
      />
    </DemoSnippet>

    <DemoSnippet title="Dynamic tooltip with custom wrapper">
      <DemoPreview>
        <TestBox>
          <WithCustomDynamicTooltip
            content={<div style={{ background: 'red' }}>custom content</div>}
            mode="dynamic"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetCustomDynamic}
      />
    </DemoSnippet>

    <DemoSnippet title="Static tooltip with default wrapper">
      <DemoPreview>
        <TestBox>
          <WithDefaultStaticTooltip
            closeOnOutsideClick
            content={<div style={{ background: 'grey' }}>content in static tooltip</div>}
            mode="static"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetDefaultStatic}
      />
    </DemoSnippet>

    <DemoSnippet title="Static tooltip with custom wrapper">
      <DemoPreview>
        <TestBox>
          <WithCustomStaticTooltip
            tooltipRenderer={({ hideTooltip }) =>
              <div style={{ background: 'grey', width: '100px', height: '100px' }}>
                <Button
                  colorScheme="primary"
                  text="Close me"
                  onPress={hideTooltip}
                />
              </div>
            }
            mode="static"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetCustomStatic}
      />
    </DemoSnippet>
  </RouteDemo>
);

TooltipDemoRoute.displayName = 'TooltipDemoRoute';
