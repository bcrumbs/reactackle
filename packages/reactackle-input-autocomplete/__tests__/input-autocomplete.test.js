'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { AutoPosition } from 'reactackle-autoposition';
import {
  composeReactackleTheme,
  keyboardCodes,
} from 'reactackle-core';
import { findByType, findPortal } from 'reactackle-test-utils';

import InputAutocompleteWithHOC from '../src/InputAutocomplete';

const InputAutocomplete = InputAutocompleteWithHOC.withoutHOC;
jest.mock('react-dom');

const options = [
  { value: 'Option 1' },
  { value: 'Option 1.1' },
  { value: 'Option 2' },
  { value: 'Option 2.1' },
];

const map = {};

window.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('<InputAutocomplete/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<InputAutocomplete />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if set options', () => {
    const tree = renderer
      .create(<InputAutocomplete options={options} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if set options and init value', () => {
    const tree = renderer
      .create(<InputAutocomplete options={options} defaultValue="Opt" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if set options, init value and stateless', () => {
    const tree = renderer
      .create(<InputAutocomplete options={options} value="Opt" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if set options and call change option amount', () => {
    const component = renderer.create(
      <InputAutocomplete options={options} value="Opt" />,
    );

    component.getInstance().componentWillReceiveProps({ options: [] });
    expect(component.toJSON()).toMatchSnapshot();

    component.getInstance().componentWillReceiveProps({ options });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if set options and call onChange input', () => {
    const component = renderer.create(<InputAutocomplete options={options} />),
      value = 'Opt';

    const input = findByType(component.toJSON(), 'input');
    input.props.onChange({ target: { value } });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if set options and complete first option', () => {
    const theme = composeReactackleTheme();
    const component = renderer.create(
        <InputAutocomplete theme={theme} options={options} />,
      ),
      value = 'Opt';
    const setScrollMock = jest.fn();

    component.getInstance()._setScrollPositionByOptionKey = setScrollMock;

    const input = findByType(component.toJSON(), 'input');
    input.props.onChange({ target: { value } });
    input.props.onFocus();

    expect(component.toJSON()).toMatchSnapshot();

    map.keydown({
      keyCode: keyboardCodes.UP,
      preventDefault: jest.fn(),
    });
    expect(component.toJSON()).toMatchSnapshot();
    expect(setScrollMock.mock.calls.length).toEqual(1);

    map.keydown({
      keyCode: keyboardCodes.DOWN,
      preventDefault: jest.fn(),
    });

    expect(component.toJSON()).toMatchSnapshot();
    expect(setScrollMock.mock.calls.length).toEqual(2);

    component.getInstance().setState({ highlightedOption: 2 });
    map.keydown({
      keyCode: keyboardCodes.ENTER,
      preventDefault: jest.fn(),
    });

    expect(component.toJSON()).toMatchSnapshot();
    input.props.onChange({ target: { value } });
    input.props.onFocus();

    map.keydown({
      keyCode: keyboardCodes.ENTER,
      preventDefault: jest.fn(),
    });

    expect(component.toJSON()).toMatchSnapshot();

    input.props.onFocus();
    map.keydown({
      keyCode: keyboardCodes.ESC,
      preventDefault: jest.fn(),
    });

    expect(component.toJSON()).toMatchSnapshot();

    map.keydown({
      keyCode: keyboardCodes.ESC,
      preventDefault: jest.fn(),
    });
  });

  it('handles unmount', () => {
    const component = renderer.create(
      <InputAutocomplete stateless defaultValue="" options={options} />,
    );
    expect(() => component.unmount()).not.toThrow();
  });

  it('handles blur', () => {
    const mockBlur = jest.fn();
    const component = renderer.create(
      <InputAutocomplete onBlur={mockBlur} options={options} />,
    );
    const input = findByType(component.toJSON(), 'input');
    input.props.onBlur();
    expect(mockBlur).toBeCalled();
  });

  it('handles focus', () => {
    const mockFocus = jest.fn();
    const component = renderer.create(
      <InputAutocomplete onFocus={mockFocus} options={options} />,
    );
    const input = findByType(component.toJSON(), 'input');
    component.getInstance().setState({ showOptions: false });
    input.props.onFocus();
    expect(mockFocus).toBeCalled();
  });

  it('handles option mouse events', () => {
    const component = renderer.create(
      <InputAutocomplete
        stateless
        options={[
          {
            value: 'Foo',
          },
        ]}
      />,
    );
    const input = findByType(component.toJSON(), 'input');
    input.props.onFocus();

    const portal = findPortal(component, AutoPosition);
    const option = findByType(portal.toJSON(), 'li');
    const mockEvent = {
      nativeEvent: {
        target: {
          getAttribute: () => 0,
        },
        relatedTarget: {
          getAttribute: () => 0,
        },
      },
    };
    option.props.onMouseEnter(mockEvent);
    option.props.onMouseLeave(mockEvent);
    option.props.onClick(mockEvent);
  });
});
