import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CircleProgress } from '../src';

jest.mock('react-dom');

describe('<CircleProgress/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CircleProgress />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop determinate set', () => {
    const tree = renderer.create(
      <CircleProgress determinate />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop determinate set false', () => {
    const tree = renderer.create(
      <CircleProgress determinate={false} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress set', () => {
    const tree = renderer.create(
      <CircleProgress secondaryProgress={90} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate secondaryProgress={90} value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop color and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate color="#d77d31" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop dynamicColor and value set', () => {
    const tree = renderer.create(
      <CircleProgress
        determinate
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
      <CircleProgress determinate color="#d77d" value={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value < max)', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={60} max={70} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value > max)', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={80} max={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value > min)', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={80} min={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop max and value set (value < min)', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={50} min={60} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressLabel and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={50} progressLabel />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressSupplementText and value set', () => {
    const tree = renderer.create(
      <CircleProgress
        determinate
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
      <CircleProgress
        determinate
        value={50}
        progressLabel
        progressSupplementText={progressSupplementText}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressSupplementText' +
    ' set string and progressLabel set false', () => {
    const tree = renderer.create(
      <CircleProgress
        determinate
        value={50}
        progressSupplementText="test"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop progressSupplementText' +
    ' set array and progressLabel = false', () => {
    const progressSupplementText = [
            { start: 0, text: 'POINT 0' },
            { start: 10, text: 'POINT 1' },
            { start: 20, text: 'POINT 2' },
            { start: 30, text: 'POINT 3' },
            { start: 50, text: 'POINT 4' },
    ];

    const tree = renderer.create(
      <CircleProgress
        determinate
        value={50}
        progressSupplementText={progressSupplementText}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={50} secondaryProgress={80} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgress, color and value set', () => {
    const tree = renderer.create(
      <CircleProgress
        determinate
        value={50}
        color="#d77d31"
        secondaryProgress={80}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop secondaryProgressColor and value set', () => {
    const tree = renderer.create(
      <CircleProgress
        determinate
        value={50}
        secondaryProgress={80}
        secondaryProgressColor="#d77d31"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop determinate and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={50} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop circleSize, strokeSize and value set', () => {
    const tree = renderer.create(
      <CircleProgress determinate value={50} circleSize={50} strokeSize={5} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call stopAnimate', () => {
    const component = renderer.create(
      <CircleProgress />,
    );

    const instance = component.getInstance();

    instance.stopAnimate();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call initAnimate', () => {
    const component = renderer.create(
      <CircleProgress determinate />,
    );

    const instance = component.getInstance();

    instance.initAnimate();
    instance.stopAnimate();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call componentWillUnmount', () => {
    const component = renderer.create(
      <CircleProgress />,
    );

    const instance = component.getInstance();

    instance.componentWillUnmount();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if determinate mode change to true', () => {
    const component = mount(
      <CircleProgress />,
    );

    component.setProps({ determinate: true });

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly if determinate mode change to false', () => {
    const component = mount(
      <CircleProgress determinate />,
    );

    component.setProps({ determinate: false });

    expect(toJson(component)).toMatchSnapshot();
  });
});
