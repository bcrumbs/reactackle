'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Row } from '../src';

jest.mock('react-dom');

describe('<Row/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Row />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if layoutDirection set horizontal', () => {
    const tree = renderer.create(
      <Row layoutDirection="horizontal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if layoutDirection set vertical', () => {
    const tree = renderer.create(
      <Row layoutDirection="vertical" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if behavior set nest', () => {
    const tree = renderer.create(
      <Row behavior="nest" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if behavior set collapse', () => {
    const tree = renderer.create(
      <Row behavior="collapse" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if collapse set', () => {
    const collapse = {
        xsmall: true,
      },
      tree = renderer.create(
        <Row collapse={collapse} />,
      );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if expandRatio set 0.5', () => {
    const tree = renderer.create(
      <Row expandRatio={0.5} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if spacing set true', () => {
    const tree = renderer.create(
      <Row spacing />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
