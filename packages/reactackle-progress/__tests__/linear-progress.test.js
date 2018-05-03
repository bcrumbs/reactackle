import React from 'react';
import renderer from 'react-test-renderer';

import { LinearProgress } from '../src';

jest.mock('react-dom');

describe('<LinearProgress />', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <LinearProgress />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with ariaValueText props set to String', () => {
    const tree = renderer.create(
      <LinearProgress ariaValueText='Some aria value' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with dynamicColor props set to true', () => {
    const tree = renderer.create(
      <LinearProgress dynamicColor />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with exactProgressLabel props set to true', () => {
    const tree = renderer.create(
      <LinearProgress exactProgressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with indeterminate props set to true', () => {
    const tree = renderer.create(
      <LinearProgress indeterminate />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionX props set to one of enum value', () => {
    const tree = renderer.create(
      <LinearProgress labelPositionX='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionY props set to one of enum value', () => {
    const tree = renderer.create(
      <LinearProgress labelPositionY='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPostfix props set to String', () => {
    const tree = renderer.create(
      <LinearProgress labelPostfix='some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with max props set to Number', () => {
    const tree = renderer.create(
      <LinearProgress max={50} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with min props set to Number', () => {
    const tree = renderer.create(
      <LinearProgress min={20} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with progressLabel props set to true', () => {
    const tree = renderer.create(
      <LinearProgress progressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with secondaryProgressValue props set to Number', () => {
    const tree = renderer.create(
      <LinearProgress secondaryProgressValue={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with subtitle props set to String', () => {
    const tree = renderer.create(
      <LinearProgress subtitle='Some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with value props set to Number', () => {
    const tree = renderer.create(
      <LinearProgress value={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with withSecondaryProgress props set to true', () => {
    const tree = renderer.create(
      <LinearProgress withSecondaryProgress />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});