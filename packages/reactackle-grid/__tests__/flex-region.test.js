'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { FlexRegion } from '../src';

jest.mock('react-dom');

describe('<FlexRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <FlexRegion />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
