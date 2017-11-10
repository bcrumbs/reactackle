'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ToggleButton } from '../src';
import { ToggleStyled } from '../src/styles/ToggleStyled';
import { ToggleInputStyled } from '../src/styles/ToggleInputStyled';

jest.mock('react-dom');

describe('<ToggleButton/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <ToggleButton />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if disabled', () => {
    const tree = renderer.create(
      <ToggleButton disabled />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if checked', () => {
    const tree = renderer.create(
      <ToggleButton checked />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if checked and disabled', () => {
    const tree = renderer.create(
      <ToggleButton checked disabled />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltip and label', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" tooltip="Bar" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with label', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltip, label, labelPosition=right', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" tooltip="Bar" labelPosition="right" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltip, label and checked', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" tooltip="Bar" checked />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltip, label and disabled', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" tooltip="Bar" disabled />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltip, label, disabled and checked', () => {
    const tree = renderer.create(
      <ToggleButton label="Foo" tooltip="Bar" disabled checked />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if hovered', () => {
    const component = mount(
      <ToggleButton />,
    );

    const toggle = component.find(ToggleStyled);
    expect(toJson(component)).toMatchSnapshot();
    toggle.simulate('mouseEnter');
    expect(toJson(component)).toMatchSnapshot();
    toggle.simulate('mouseLeave');
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly if focused', () => {
    const component = mount(
      <ToggleButton />,
    );
    const toggle = component.find(ToggleInputStyled);

    expect(toJson(component)).toMatchSnapshot();
    
    toggle.simulate('focus');
    expect(toJson(component)).toMatchSnapshot();
    
    toggle.simulate('blur');
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly if handles input change and call onChange', () => {
    const mockFn = jest.fn(),
      component = mount(
        <ToggleButton onChange={mockFn} />,
      );
    const input = component.findWhere(n => n.type() === 'input');
    
    expect(toJson(component)).toMatchSnapshot();
    input.simulate('change', {
      target: {
        checked: true,
      },
    });
    expect(mockFn).toHaveBeenCalledWith({ value: true });
    expect(toJson(component)).toMatchSnapshot();
  });
});
