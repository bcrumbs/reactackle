'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { TopRegion } from '../src';

jest.mock('react-dom');

describe('<TopRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <TopRegion />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set true', () => {
    const tree = renderer.create(
      <TopRegion fixed />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set false', () => {
    const tree = renderer.create(
      <TopRegion fixed={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if contains children', () => {
    const tree = renderer.create(
      <TopRegion>
        <div>TEST</div>
      </TopRegion>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
