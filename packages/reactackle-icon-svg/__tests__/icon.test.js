'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { IconSvg } from '../src';

jest.mock('react-dom');

describe('<IconSvg/>', () => {
  test('renders correctly with default props', () => {
    const tree = renderer.create(
      <IconSvg />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with children prop', () => {
    const tree = renderer.create(
      <IconSvg>
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path d="M7,10l5,5l5-5H7z" />
        </svg>
      </IconSvg>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with src prop', () => {
    const tree = renderer.create(
      <IconSvg
        src={
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <path d="M7,10l5,5l5-5H7z" />
          </svg>
        }
      />,
  );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with border prop', () => {
    const tree = renderer.create(
      <IconSvg border />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border and borderWidth', () => {
    const tree = renderer.create(
      <IconSvg border borderWidth={2} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border and rounded', () => {
    const tree = renderer.create(
      <IconSvg border rounded />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props border, borderWidth, rounded', () => {
    const tree = renderer.create(
      <IconSvg
        border
        rounded
        borderWidth={2}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=small', () => {
    const tree = renderer.create(
      <IconSvg size="small" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=large', () => {
    const tree = renderer.create(
      <IconSvg size="large" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop size=xlarge', () => {
    const tree = renderer.create(
      <IconSvg size="xlarge" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop colorScheme=light', () => {
    const tree = renderer.create(
      <IconSvg
        colorScheme="light"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop color', () => {
    const tree = renderer.create(
      <IconSvg color="#02b4d4" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop backgroundColor', () => {
    const tree = renderer.create(
      <IconSvg backgroundColor="#e81f82" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with props backgroundColor and color', () => {
    const tree = renderer.create(
      <IconSvg
        backgroundColor="#e81f82"
        color="#02b4d4"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop flip=horizontal', () => {
    const tree = renderer.create(
      <IconSvg flip="horizontal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop flip=vertical', () => {
    const tree = renderer.create(
      <IconSvg flip="vertical" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly with prop rotate', () => {
    const tree = renderer.create(
      <IconSvg rotate={45} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
