import React from 'react';
import renderer from 'react-test-renderer';

import { Preloader } from '../src';

jest.mock('react-dom');

describe('<Preloader />', () => {
  it('renders correctly with alignX prop set to one of enum values', () => {
    const tree = renderer.create(
      <Preloader kind='linear' alignX='left' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with alignY prop set to one of enum values', () => {
    const tree = renderer.create(
      <Preloader kind='linear' alignY='top' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with height prop set to String', () => {
    const tree = renderer.create(
      <Preloader kind='linear' height='Some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with kind prop set to one of enum values', () => {
    const tree = renderer.create(
      <Preloader kind='linear' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with width prop set to Sring', () => {
    const tree = renderer.create(
      <Preloader kind='linear' width='Some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with ariaValueText props set to String', () => {
    const tree = renderer.create(
      <Preloader kind='linear' ariaValueText='Some aria value' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with dynamicColor props set to true', () => {
    const tree = renderer.create(
      <Preloader kind='linear' dynamicColor />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with exactProgressLabel props set to true', () => {
    const tree = renderer.create(
      <Preloader kind='linear' exactProgressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with indeterminate props set to true', () => {
    const tree = renderer.create(
      <Preloader kind='linear' indeterminate />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionX props set to one of enum value', () => {
    const tree = renderer.create(
      <Preloader kind='linear' labelPositionX='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPositionY props set to one of enum value', () => {
    const tree = renderer.create(
      <Preloader kind='linear' labelPositionY='center' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with labelPostfix props set to String', () => {
    const tree = renderer.create(
      <Preloader kind='linear' labelPostfix='some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with max props set to Number', () => {
    const tree = renderer.create(
      <Preloader kind='linear' max={50} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with min props set to Number', () => {
    const tree = renderer.create(
      <Preloader kind='linear' min={20} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with progressLabel props set to true', () => {
    const tree = renderer.create(
      <Preloader kind='linear' progressLabel />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with secondaryProgressValue props set to Number', () => {
    const tree = renderer.create(
      <Preloader kind='linear' secondaryProgressValue={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with subtitle props set to String', () => {
    const tree = renderer.create(
      <Preloader kind='linear' subtitle='Some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with value props set to Number', () => {
    const tree = renderer.create(
      <Preloader kind='linear' value={2} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with withSecondaryProgress props set to true', () => {
    const tree = renderer.create(
      <Preloader kind='linear' withSecondaryProgress />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});