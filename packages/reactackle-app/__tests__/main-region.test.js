'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { MainRegion } from '../src';

jest.mock('react-dom');

describe('<MainRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <MainRegion />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
