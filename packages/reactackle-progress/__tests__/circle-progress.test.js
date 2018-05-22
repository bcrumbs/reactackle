import React from 'react';
import renderer from 'react-test-renderer';

import { CircleProgress } from '../src';

jest.mock('react-dom');

describe('<CircleProgress />', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CircleProgress />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with strokeSize props set to Number', () => {
    const tree = renderer.create(
      <CircleProgress strokeSize={1} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with ariaValueText props set to String', () => {
    const tree = renderer.create(
      <CircleProgress ariaValueText='Some aria value' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with dynamicColor props set to true', () => {
    const tree = renderer.create(
      <CircleProgress dynamicColor />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with exactProgressLabel props set to true', () => {
    const tree = renderer.create(
      <CircleProgress exactProgressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with indeterminate props set to true', () => {
    const tree = renderer.create(
      <CircleProgress indeterminate />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionX props set to one of enum value', () => {
    const tree = renderer.create(
      <CircleProgress labelPositionX='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionY props set to one of enum value', () => {
    const tree = renderer.create(
      <CircleProgress labelPositionY='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPostfix props set to String', () => {
    const tree = renderer.create(
      <CircleProgress labelPostfix='some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with max props set to Number', () => {
    const tree = renderer.create(
      <CircleProgress max={50} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with min props set to Number', () => {
    const tree = renderer.create(
      <CircleProgress min={20} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with progressLabel props set to true', () => {
    const tree = renderer.create(
      <CircleProgress progressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with secondaryProgressValue props set to Number', () => {
    const tree = renderer.create(
      <CircleProgress secondaryProgressValue={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with subtitle props set to String', () => {
    const tree = renderer.create(
      <CircleProgress subtitle='Some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with value props set to Number', () => {
    const tree = renderer.create(
      <CircleProgress value={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with withSecondaryProgress props set to true', () => {
    const tree = renderer.create(
      <CircleProgress withSecondaryProgress />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  
});

