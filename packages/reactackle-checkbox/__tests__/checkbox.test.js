'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { findBySelector, withTestWrapper } from 'reactackle-test-utils';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  Checkbox,
} from '../src';
import {
  CheckboxLabelStyled
} from '../src/styles/CheckboxLabelStyled';
import {
  CheckboxInputStyled
} from '../src/styles/CheckboxInputStyled';

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

  it('handle keyboard checking', () => {
    // mocking document event listeners
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const component = mount(
      <Checkbox />,
    );

    const label = component.find(CheckboxLabelStyled);

    expect(toJson(component)).toMatchSnapshot();

    expect(component.state().focused).toBe(false);
    label.simulate('focus');
    expect(component.state().focused).toBe(true);

    expect(toJson(component)).toMatchSnapshot();

    expect(component.state().checked).toBe(false);
    map.keypress({ keyCode: 32 });
    expect(component.state().checked).toBe(true);

    expect(toJson(component)).toMatchSnapshot();

    map.keypress({ keyCode: 32 });
    expect(component.state().checked).toBe(false);

    expect(toJson(component)).toMatchSnapshot();
  });
});
