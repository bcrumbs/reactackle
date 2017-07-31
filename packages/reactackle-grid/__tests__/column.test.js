'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Column } from '../src';

jest.mock('react-dom');

describe('<Column/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Column />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop size set', () => {
    const tree = renderer.create(
      <Column size={{ xsmall: 12, medium: 6 }} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutDirection set horizontal', () => {
    const tree = renderer.create(
      <Column layoutDirection="horizontal" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutDirection set vertical', () => {
    const tree = renderer.create(
      <Column layoutDirection="vertical" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutX set start', () => {
    const tree = renderer.create(
      <Column layoutX="start" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutX set end', () => {
    const tree = renderer.create(
      <Column layoutX="end" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutX set center', () => {
    const tree = renderer.create(
      <Column layoutX="center" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('renders correctly if prop layoutX set space-between', () => {
    const tree = renderer.create(
      <Column layoutX="space-between" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutX set space-around', () => {
    const tree = renderer.create(
      <Column layoutX="space-around" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutY set stretch', () => {
    const tree = renderer.create(
      <Column layoutY="stretch" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutY set center', () => {
    const tree = renderer.create(
      <Column layoutY="center" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutY set start', () => {
    const tree = renderer.create(
      <Column layoutY="start" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutY set end', () => {
    const tree = renderer.create(
      <Column layoutY="end" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop layoutY set baseline', () => {
    const tree = renderer.create(
      <Column layoutY="baseline" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop centered set', () => {
    const tree = renderer.create(
      <Column centered={{ xsmall: true, medium: false }} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop collapsed set true', () => {
    const tree = renderer.create(
      <Column collapsed />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop collapsed set false', () => {
    const tree = renderer.create(
      <Column collapsed={false} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
