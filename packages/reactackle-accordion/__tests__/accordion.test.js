import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Accordion, AccordionItem } from '../src';
import { TitleBoxStyled } from '../src/AccordionItem/styles';

const items = [
  {
    id: '1',
    title: 'Accordion Item 1',
    content: [<div key={1}>Place here some data</div>],
  },
  {
    id: '2',
    title: 'Accordion Item 2',
    content: [<div key={1}>Place here some data</div>],
  },
];

describe('<Accordion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Accordion />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with items', () => {
    const tree = renderer.create(
      <Accordion items={items} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with default prop single set to true', () => {
    const tree = renderer.create(
      <Accordion items={items} single />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with default prop stateless set tot true', () => {
    const tree = renderer.create(
      <Accordion items={items} stateless />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly with expandedItemIds props', () => {
    const tree = renderer.create(
      <Accordion items={items} expandedItemIds={["1"]} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with expandAll props', () => {
      const wrapper = mount(
        <Accordion items={items} expandAll />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find(AccordionItem).forEach(node => {
        expect(node.prop('expanded')).toEqual(true);
      });
  });

  it('renders correctly with onItem click on stateless mode', () => {
    const wrapper = mount(
      <Accordion items={items} />,
    );

    const item = wrapper.find(AccordionItem).first();
    wrapper.setState({ expandedItemIds: [item.prop('id')]  });
    const expandedItem = wrapper.find(AccordionItem).first();
    expect(expandedItem.prop('expanded')).toEqual(true);
  });
});