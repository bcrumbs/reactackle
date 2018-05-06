import React from 'react';
import renderer from 'react-test-renderer';
import { IconSvg } from 'reactackle-icons';
import { Breadcrumbs } from '../src';

jest.mock('react-dom');

const rendererOptions = {
  createNodeMock() {
    return {
      addEventListener() {},
    };
  },
};

const items = [
  {
    title: 'Index',
    home: true,
    itemHref: 'index',
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
    const component = renderer.create(
      <Breadcrumbs overflow items={items} />,
      rendererOptions,
    );
    expect(component.toJSON()).toMatchSnapshot();
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

});
