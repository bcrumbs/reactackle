import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { IconSvg } from 'reactackle-icons';
import { Breadcrumbs } from '../src';

jest.mock('react-dom');

const rendererOptions = {
  createNodeMock(element) {
    if (element.type === 'li' || element.type === 'ol') {
      return {
        addEventListener() {},
      };
    }
    return null;
  },
};

const items = [
  {
    title: 'Home',
    home: true,
  },
  {
    title: 'Index',
    itemHref: 'index',
  },
];

const longItems = [
  {
    title: 'Index',
    home: true,
    itemHref: 'index',
  },
  {
    title: 'Catalog',
    subtitle: 'Catalog subtitle',
    itemHref: 'catalog',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
  },
  {
    title: 'Item',
    itemHref: 'item',
    isActive: true,
  },
];

//eslint-disable-next-line
const CustomLink = props => <a {...props} />;

describe('<Breadcrumbs />', () => {
  it('must render with default props', () => {
    const component = renderer.create(
      <Breadcrumbs items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('must render with alignItems prop set to one from enum', () => {
    const component = renderer.create(
      <Breadcrumbs alignItems="top" items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('must render with colorScheme prop set to one from enum', () => {
    const component = renderer.create(
      <Breadcrumbs colorScheme="light" items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('must render with overflow prop set to true', () => {
    const component = mount(
      <Breadcrumbs
        overflow
        items={longItems}
      />,
      rendererOptions,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('must render with separatorType prop set to text', () => {
    const component = renderer.create(
      <Breadcrumbs separatorType="text" items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('must render with separatorIcon prop set to <IconSvg />', () => {
    const component = renderer.create(
      <Breadcrumbs separatorIcon={<IconSvg />} items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('must render with linkComponent prop set to CustomLink', () => {
    const component = renderer.create(
      <Breadcrumbs linkComponent={CustomLink} items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('has to render items list and handle prop items change', () => {
    const component = mount(
      <Breadcrumbs
        overflow
        items={longItems}
      />,
      rendererOptions,
    );
    expect(toJson(component)).toMatchSnapshot();
    component.setProps({ items });
    expect(toJson(component)).toMatchSnapshot();
  });


});
