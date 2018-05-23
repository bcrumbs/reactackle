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
          <WithDefaultDynamicTooltip
            text="Dynamic tooltip follows mouse"
            mode="dynamic"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetDefaultDynamic}
      />
    </DemoSnippet>

    <DemoSnippet title="Static tooltip with default wrapper">
      <DemoPreview>
        <TestBox>
          <WithDefaultStaticTooltip
            closeOnOutsideClick
            text="Static tooltip renders in a predefined place"
            mode="static"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetDefaultStatic}
      />
    </DemoSnippet>

    <DemoSnippet title="Dynamic tooltip with custom content">
      <DemoPreview>
        <TestBox>
          <WithCustomDynamicTooltip
            content={
              <div
                style={{
                  background: 'palevioletred',
                  color: 'white',
                  padding: '4px 12px',
                  fontSize: '12px',
                }}
              >
                <i>custom content</i>
              </div>
            }
            mode="dynamic"
          />
        </TestBox>
      </DemoPreview>

      <DemoCode
        code={SnippetCustomDynamic}
      />
    </DemoSnippet>

    <DemoSnippet title="Static tooltip with custom wrapper">
      <DemoPreview>
        <TestBox>
          <WithCustomStaticTooltip
            tooltipRenderer={({ hideTooltip }) =>
              <div
                style={{
                  background: '#333',
                  color: 'white',
                  padding: '12px',
                  fontSize: '12px',
                  minWidth: '240px',
                }}
              >
                <p>custom content</p>
                <Button
                  colorScheme="primary"
                  text="Close me"
                  size="small"
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
