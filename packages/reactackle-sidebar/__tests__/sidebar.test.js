'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import {
    Sidebar,
    SidebarToggle,
    SidebarRegion,
} from '../src';

jest.mock('react-dom');

describe('<Sidebar/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Sidebar />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop haveToggleButton set true', () => {
    const tree = renderer.create(
      <Sidebar haveToggleButton />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop haveToggleButton set false', () => {
    const tree = renderer.create(
      <Sidebar haveToggleButton={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop spread set true', () => {
    const component = renderer.create(
      <Sidebar spread />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop haveToggleButton set true' +
    ' and toggleButtonText set', () => {
    const tree = renderer.create(
      <Sidebar toggleButtonText="test" haveToggleButton />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop expanded set true', () => {
    const tree = renderer.create(
      <Sidebar expanded />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop expanded set false', () => {
    const tree = renderer.create(
      <Sidebar expanded={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop right set true', () => {
    const tree = renderer.create(
      <Sidebar right />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop right set false', () => {
    const tree = renderer.create(
      <Sidebar right={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('<SidebarToggle/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <SidebarToggle />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop toggleButtonText set', () => {
    const tree = renderer.create(
      <SidebarToggle toggleButtonText="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('one call "onToggle" event after "click"', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <SidebarToggle onClick={mockFn} />,
      ).toJSON();

    tree.props.onClick();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<SidebarRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <SidebarRegion />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop bordered', () => {
    const tree = renderer.create(
      <SidebarRegion bordered />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop spread', () => {
    const tree = renderer.create(
      <SidebarRegion spread />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop scrollable', () => {
    const tree = renderer.create(
      <SidebarRegion scrollable />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop scrollableMinHeight set 0', () => {
    const tree = renderer.create(
      <SidebarRegion scrollableMinHeight={0} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
