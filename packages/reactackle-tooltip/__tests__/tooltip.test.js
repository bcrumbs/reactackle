'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Portal from 'react-portal';
import {
  rendererWithPortal as rendererWithPortalMain,
} from 'reactackle-core';
import { Tooltip, withTooltip } from '../src';

jest.mock('react-dom');
const rendererWithPortal = (component, options) =>
  rendererWithPortalMain(component, options, Portal);

const options = {
  createNodeMock() {
    return {
      getBoundingClientRect() {
        return {
          height: 0,
          width: 0,
        };
      },
    };
  },
};

describe('<Tooltip/>', () => {
  it('renders correctly with default props', () => {
    const tree = rendererWithPortal(
      <Tooltip />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop isVisible set true', () => {
    const component = rendererWithPortal(
      <Tooltip isVisible />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('handles window resize and unmount', () => {
    const component = rendererWithPortal(
      <Tooltip isVisible />,
      options,
    );
    expect(component.toJSON()).toMatchSnapshot();
    window.dispatchEvent(new Event('resize', { clientX: 0, clientY: 0 }));
    expect(component.toJSON()).toMatchSnapshot();
    expect(() => component.unmount()).not.toThrow();
  });
});

describe('withTooltip', () => {
  it('renders correctly and calls instance methods', () => {
    const Component = withTooltip(Tooltip);
    const component = renderer.create(<Component
      hideTooltipAfter={10}
    />);
    const instance = component.getInstance();
    expect(() => instance.showTooltip()).not.toThrow();
    expect(() => instance.hideTooltip()).not.toThrow();
    expect(component.toJSON()).toMatchSnapshot();
    expect(() => component.unmount()).not.toThrow();
  });
});
