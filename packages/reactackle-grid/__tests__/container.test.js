'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from '../src';

jest.mock('react-dom');

describe('<Container/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Container />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
