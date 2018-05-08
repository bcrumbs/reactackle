import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { AccordionItem } from '../src';
import { TitleBoxStyled } from '../src/AccordionItem/styles';

describe('<AccordionItem />', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <AccordionItem />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with contentBlank prop set to true', () => {
    const tree = renderer.create(
      <AccordionItem contentBlank />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with expanded prop set to true', () => {
    const tree = renderer.create(
      <AccordionItem expanded />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with expanded id to string', () => {
    const tree = renderer.create(
      <AccordionItem id='testId' />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with expanded id to number', () => {
    const tree = renderer.create(
      <AccordionItem id={1} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with title to string', () => {
    const tree = renderer.create(
      <AccordionItem title='hello' />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('one call onToggleExpanded event', () => {
    const mockFn = jest.fn(),
      wrapper = mount(
        <AccordionItem onToggleExpanded={mockFn} />,
      );

      wrapper.find(TitleBoxStyled).simulate('click');

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(mockFn).toHaveBeenCalledTimes(1);
  });
});