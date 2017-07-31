'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  withTooltip,
  noop,
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
import SnippetDefault from './snippets/1.snippet';

const SomeComponentTemplate = props => {
  const wrapperProps = {
    onClick: props.toggleTooltip,
    onFocus: props.showTooltip,
    onBlur: props.hideTooltip,
    onMouseEnter: props.showTooltip,
    onMouseLeave: props.hideTooltip,
    className: 'some-component has-tooltip',
    tabIndex: '1',
  };
  return (
    <div {...wrapperProps}>
      <strong>Hover me</strong>
      <props.Tooltip text={props.text} />
    </div>
  );
};
SomeComponentTemplate.propTypes = {
  toggleTooltip: PropTypes.func,
  showTooltip: PropTypes.func,
  hideTooltip: PropTypes.func,
  text: PropTypes.string,
};
SomeComponentTemplate.defaultProps = {
  toggleTooltip: noop,
  showTooltip: noop,
  hideTooltip: noop,
  text: '',
};
SomeComponentTemplate.displayName = 'SomeComponent';

export const SomeComponent = withTooltip(SomeComponentTemplate, true);

export const TooltipDemoRoute = () => (
  <RouteDemo>
    <DemoSnippet title="Some demo">
      <DemoPreview>
        <TestBox>
          <SomeComponent text="Tooltip" />
        </TestBox>
      </DemoPreview>
      <DemoCode
        code={SnippetDefault}
      />
    </DemoSnippet>
  </RouteDemo>
);

TooltipDemoRoute.displayName = 'TooltipDemoRoute';
