'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { findByType } from 'reactackle-test-utils';
import { ToggleButton } from '../src';
import { ToggleStyled } from '../src/styles/ToggleStyled';

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
    const component = renderer.create(
      <ToggleButton />,
    );

    const toggle = findByType(component, ToggleStyled);

    expect(component.toJSON()).toMatchSnapshot();
    toggle.props.onMouseEnter();
    expect(component.toJSON()).toMatchSnapshot();
    toggle.props.onMouseLeave();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if focused', () => {
    const component = renderer.create(
      <ToggleButton />,
    );
    const toggle = findByType(component, ToggleStyled);

    expect(component.toJSON()).toMatchSnapshot();
    
    toggle.props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
    
    toggle.props.onBlur();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if handles input change and call onChange', () => {
    const mockFn = jest.fn(),
      component = renderer.create(
        <ToggleButton onChange={mockFn} />,
      );
    findByType(component, 'input').props.onChange({
      target: {
        checked: true,
      },
    });

    expect(mockFn).toHaveBeenCalledWith({ value: true });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
