'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { BottomRegion } from '../src';

jest.mock('react-dom');

describe('<BottomRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <BottomRegion />,
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set true', () => {
    const tree = renderer.create(
      <BottomRegion fixed />,
        );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set false', () => {
    const tree = renderer.create(
      <BottomRegion fixed={false} />,
        );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
