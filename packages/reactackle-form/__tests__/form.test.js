'use strict';

import React from 'react';
import { findByType } from 'reactackle-core';
import renderer from 'react-test-renderer';
import { Form, FormItem } from '../src';

jest.mock('react-dom');

describe('<Form/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Form>
        <input />
      </Form>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop errorMessage set', () => {
    const tree = renderer.create(
      <Form errorMessage="test" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly, handles update and scrolls to field', () => {
    const component = renderer.create(
      <Form errorMessage="test" />,
      {
        createNodeMock(element) {
          if (element.type === 'form') {
            return {
              scrollIntoView() {},
            };
          }
    
          return null;
        },
      },
    );
    expect(component.toJSON()).toMatchSnapshot();
    component.getInstance().componentDidUpdate();
    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('handles submit event', () => {
    const mockSubmit = jest.fn();
    const tree = renderer.create(
      <Form errorMessage="test" onSubmit={mockSubmit} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    findByType(tree, 'form').props.onSubmit({ preventDefault: () => {} });
    expect(mockSubmit).toBeCalled();
  });
});

describe('<FormItem>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <FormItem />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
