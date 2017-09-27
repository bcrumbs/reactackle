'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { IconCustom } from '../src';

jest.mock('react-dom');

describe('<IconCustom/>', () => {
  test('renders correctly with default props', () => {
    const tree = renderer.create(
      <IconCustom />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with src prop', () => {
    const tree = renderer.create(
      <IconCustom src="http://files.gamebanana.com/img/ico/sprays/51cb98f9d3747.png" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with border prop', () => {
    const tree = renderer.create(
      <IconCustom
        border
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border and borderWidth', () => {
    const tree = renderer.create(
      <IconCustom
        border
        borderWidth={2}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border and rounded', () => {
    const tree = renderer.create(
      <IconCustom
        border
        rounded
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border, borderWidth, rounded', () => {
    const tree = renderer.create(
      <IconCustom
        border
        rounded
        borderWidth={2}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=small', () => {
    const tree = renderer.create(
      <IconCustom
        size="small"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=large', () => {
    const tree = renderer.create(
      <IconCustom
        size="large"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=xlarge', () => {
    const tree = renderer.create(
      <IconCustom
        size="xlarge"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop colorScheme=light', () => {
    const tree = renderer.create(
      <IconCustom
        colorScheme="light"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop color', () => {
    const tree = renderer.create(
      <IconCustom
        color="#02b4d4"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop backgroundColor', () => {
    const tree = renderer.create(
      <IconCustom
        backgroundColor="#e81f82"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props backgroundColor and color', () => {
    const tree = renderer.create(
      <IconCustom
        backgroundColor="#e81f82"
        color="#02b4d4"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop flip=horizontal', () => {
    const tree = renderer.create(
      <IconCustom
        flip="horizontal"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop flip=vertical', () => {
    const tree = renderer.create(
      <IconCustom
        flip="vertical"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop rotate', () => {
    const tree = renderer.create(
      <IconCustom
        rotate={45}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
