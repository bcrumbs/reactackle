'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from '../src';

jest.mock('react-dom');

describe('<Content/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Content />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if contains children', () => {
    const tree = renderer.create(
      <Content>
        <div>TEST</div>
      </Content>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
