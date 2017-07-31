'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import {
  PaddingBox,
} from '../src';

jest.mock('react-dom');

describe('<PaddingBox/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <PaddingBox />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
