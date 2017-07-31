'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { findBySelector, withTestWrapper } from 'reactackle-core';
import {
  Checkbox,
} from '../src';

jest.mock('react-dom');

describe('<Checkbox/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Checkbox />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop checked set true', () => {
    const tree = renderer.create(
      <Checkbox checked />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop defaultChecked set true', () => {
    const tree = renderer.create(
      <Checkbox defaultChecked />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop disabled set true', () => {
    const tree = renderer.create(
      <Checkbox disabled />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop label set test', () => {
    const tree = renderer.create(
      <Checkbox label="test" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('could one call onChange ' +
    'event before call change event on <input/>', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <Checkbox onChange={mockFn} />,
      ).toJSON();

    const checkbox = findBySelector(tree, 'input');
    checkbox.props.onChange({ target: { checked: true } });

    expect(tree).toMatchSnapshot();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  
  it('does not fail when newly received props do not contain checked', () => {
    const CheckboxInTestWrapper = withTestWrapper(Checkbox),
      component = renderer.create(
        <CheckboxInTestWrapper checked />,
      );
  
    const instance = component.getInstance();
  
    expect(() => {
      instance.setProps({});
    }).not.toThrow();
  });
});
