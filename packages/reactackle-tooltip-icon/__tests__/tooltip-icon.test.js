'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { TooltipIcon } from '../src';

jest.mock('react-dom');

describe('<TooltipIcon/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <TooltipIcon text="test" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
