import React from 'react';
import renderer from 'react-test-renderer';
import {
  LinearProgress,
} from '../src';

jest.mock('react-dom');

describe('<LinearProgress/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <LinearProgress />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress set', () => {
    const tree = renderer.create(
      <LinearProgress secondaryProgress={90} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress and value set', () => {
    const tree = renderer.create(
      <LinearProgress secondaryProgress={90} value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignX left and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignX="left" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignX center and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignX="center" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignX right and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignX="right" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignY top and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignY="top" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignY center and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignY="center" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alignY bottom and value set', () => {
    const tree = renderer.create(
      <LinearProgress alignY="bottom" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop preloaderPositionX=left and value set', () => {
    const tree = renderer.create(
      <LinearProgress preloaderPositionX="left" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop preloaderPositionX=right and value set', () => {
    const tree = renderer.create(
      <LinearProgress preloaderPositionX="right" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop preloaderPositionY=left and value set', () => {
    const tree = renderer.create(
      <LinearProgress preloaderPositionY="left" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop preloaderPositionY=right and value set', () => {
    const tree = renderer.create(
      <LinearProgress preloaderPositionY="right" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop preloaderPositionY=center' +
    ' and value set', () => {
    const tree = renderer.create(
      <LinearProgress preloaderPositionY="center" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop color and value set', () => {
    const tree = renderer.create(
      <LinearProgress color="#d77d31" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop dynamicColor and value set', () => {
    const tree = renderer.create(
      <LinearProgress
        dynamicColor
        startColor={{ H: 154, S: 100, V: 42 }}
        endColor={{ H: 56, S: 69, V: 100 }}
        value={80}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop color hex length < 6 and value set', () => {
    const tree = renderer.create(
      <LinearProgress color="#d77d" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value < max)', () => {
    const tree = renderer.create(
      <LinearProgress value={60} max={70} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value > max)', () => {
    const tree = renderer.create(
      <LinearProgress value={80} max={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value > min)', () => {
    const tree = renderer.create(
      <LinearProgress value={80} min={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value < min)', () => {
    const tree = renderer.create(
      <LinearProgress value={50} min={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressLabel and value set', () => {
    const tree = renderer.create(
      <LinearProgress value={50} progressLabel />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressSupplementText and value set', () => {
    const tree = renderer.create(
      <LinearProgress
        value={50}
        progressLabel
        progressSupplementText="test"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressSupplementText set array', () => {
    const progressSupplementText = [
            { start: 0, text: 'POINT 0' },
            { start: 10, text: 'POINT 1' },
            { start: 20, text: 'POINT 2' },
            { start: 30, text: 'POINT 3' },
            { start: 50, text: 'POINT 4' },
    ];

    const tree = renderer.create(
      <LinearProgress
        value={50}
        progressLabel
        progressSupplementText={progressSupplementText}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress and value set', () => {
    const tree = renderer.create(
      <LinearProgress value={50} secondaryProgress={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress, color and value set', () => {
    const tree = renderer.create(
      <LinearProgress value={50} color="#d77d31" secondaryProgress={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgressColor and value set', () => {
    const tree = renderer.create(
      <LinearProgress
        value={50}
        secondaryProgress={80}
        secondaryProgressColor="#d77d31"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
