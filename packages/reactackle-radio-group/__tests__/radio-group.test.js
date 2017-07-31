'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { setProps, findByType } from 'reactackle-core';
import { RadioGroup } from '../src';

jest.mock('react-dom');

const options = [
  {
    text: 'value1',
    value: 1,
  },
];

describe('<RadioGroup/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <RadioGroup />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('handles onChange', () => {
    const mockChange = jest.fn();
    const component = renderer.create(
      <RadioGroup
        onChange={mockChange}
        options={options}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();

    const input = findByType(component.toJSON(), 'input');
    input.props.onChange({ target: { checked: true } });

    expect(mockChange).toBeCalledWith({ value: 1 });
    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('handles props change', () => {
    const component = renderer.create(
      <RadioGroup options={[]} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    setProps(component, { data: [{}] });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
