/* eslint-disable react/prop-types */
import React from 'react';
import renderer from 'react-test-renderer';
import { findAllByType, setProps } from 'reactackle-test-utils';
import { Tabs } from '../src';
import { TabStyled } from '../src/Tab/styles/TabStyled';

jest.mock('react-dom');

const tabIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M20,5.6C20,4.7,19.3,4,18.4,4H5.6C4.7,4,4,4.7,4,5.6v9.6c0,0.9,0.7,1.6,1.6,1.6h11.2L20,20L20,5.6z" />
  </svg>
);

describe('<Tabs/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Tabs />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop selected set 1', () => {
    const tree = renderer.create(
      <Tabs
        selected={1}
        tabs={[
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop linkComponent passed', () => {
    const LinkComponent = props => {
      const content = props.children || props.title;
    
      return (
        <a href={props.href} onClick={props.onClick}>
          {content}
        </a>
      );
    };
    const tree = renderer.create(
      <Tabs
        linkComponent={LinkComponent}
        tabs={[
        { text: 'Test', linkHref: '/' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop icon', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: 'Test', icon: tabIcon },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop text is empty', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: '' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop ', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: 'Test1', linkHref: 'test1' },
          { text: 'Test2', linkHref: 'test2' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if change tab', () => {
    const mockFn = jest.fn(),
      component = renderer.create(
        <Tabs
          onChange={mockFn}
          tabs={[
            { text: 'Test 1', icon: tabIcon },
            { text: 'Test 2', icon: tabIcon },
          ]}
        />,
      );

    expect(component.toJSON()).toMatchSnapshot();

    const tabs = findAllByType(component, TabStyled);
    tabs[1].props.onClick();

    expect(mockFn).toHaveBeenCalledWith({ value: 1 });
    expect(component.toJSON()).toMatchSnapshot();
  });


  it('renders correctly if prop selected set after render', () => {
    const tree = renderer.create(
      <Tabs
        selected={2}
        tabs={[
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        ]}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
    setProps(tree, { selected: 1 });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
