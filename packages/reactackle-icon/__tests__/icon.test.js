'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../src';

jest.mock('react-dom');

describe('<Icon/>', () => {
  test('renders correctly with default props', () => {
    const tree = renderer.create(
      <Icon />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with prop type=svg', () => {
    const tree = renderer.create(
      <Icon type="svg" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with prop type=custom', () => {
    const tree = renderer.create(
      <Icon type="custom" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test('renders correctly with props type=svg and children', () => {
    const tree = renderer.create(
      <Icon type="svg">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path d="M7,10l5,5l5-5H7z" />
        </svg>
      </Icon>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with props type=svg and src', () => {
    const tree = renderer.create(
      <Icon
        src={
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <path d="M7,10l5,5l5-5H7z" />
          </svg>
        }
      />,
  );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg and border', () => {
    const tree = renderer.create(
      <Icon type="svg" border />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, border and borderWidth', () => {
    const tree = renderer.create(
      <Icon type="svg" border borderWidth={2} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, border and rounded', () => {
    const tree = renderer.create(
      <Icon type="svg" border rounded />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, border, rounded and borderWidth', () => {
    const tree = renderer.create(
      <Icon type="svg" border borderWidth={2} rounded />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, size=small', () => {
    const tree = renderer.create(
      <Icon type="svg" size="small" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, size=large', () => {
    const tree = renderer.create(
      <Icon type="svg" size="large" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, size=xlarge', () => {
    const tree = renderer.create(
      <Icon type="svg" size="xlarge" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, colorScheme=light', () => {
    const tree = renderer.create(
      <Icon type="svg" colorScheme="light" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, color', () => {
    const tree = renderer.create(
      <Icon type="svg" color="#02b4d4" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, backgroundColor', () => {
    const tree = renderer.create(
      <Icon type="svg" backgroundColor="#e81f82" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, backgroundColor, color', () => {
    const tree = renderer.create(
      <Icon
        type="svg"
        backgroundColor="#e81f82"
        color="#02b4d4"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, flip=horizontal', () => {
    const tree = renderer.create(
      <Icon type="svg" flip="horizontal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg flip=vertical', () => {
    const tree = renderer.create(
      <Icon type="svg" flip="vertical" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=svg, rotate', () => {
    const tree = renderer.create(
      <Icon type="svg" rotate={45} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, iconSrc', () => {
    const tree = renderer.create(
      <Icon
        type="custom"
        src="http://files.gamebanana.com/img/ico/sprays/51cb98f9d3747.png"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, border', () => {
    const tree = renderer.create(
      <Icon type="custom" border />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, border, borderWidth', () => {
    const tree = renderer.create(
      <Icon
        type="custom"
        border
        borderWidth={2}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, border, rounded', () => {
    const tree = renderer.create(
      <Icon
        type="custom"
        border
        rounded
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, border, borderWidth, rounded', () => {
    const tree = renderer.create(
      <Icon
        type="custom"
        border
        rounded
        borderWidth={2}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, size=small', () => {
    const tree = renderer.create(
      <Icon type="custom" size="small" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, size=large', () => {
    const tree = renderer.create(
      <Icon type="custom" size="large" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, size=xlarge', () => {
    const tree = renderer.create(
      <Icon type="custom" size="xlarge" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, colorScheme=light', () => {
    const tree = renderer.create(
      <Icon type="custom" colorScheme="light" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, color', () => {
    const tree = renderer.create(
      <Icon type="custom" color="#02b4d4" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, backgroundColor', () => {
    const tree = renderer.create(
      <Icon type="custom" backgroundColor="#e81f82" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, backgroundColor, color', () => {
    const tree = renderer.create(
      <Icon type="custom" backgroundColor="#e81f82" color="#02b4d4" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, flip=horizontal', () => {
    const tree = renderer.create(
      <Icon type="custom" flip="horizontal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, flip=vertical', () => {
    const tree = renderer.create(
      <Icon type="custom" flip="vertical" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props type=custom, rotate', () => {
    const tree = renderer.create(
      <Icon type="custom" rotate={45} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
