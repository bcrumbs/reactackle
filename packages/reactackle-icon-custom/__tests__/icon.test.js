'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../src';

jest.mock('react-dom');

describe('<Icon/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Icon name="github" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop name set', () => {
    const tree = renderer.create(
      <Icon name="github" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and size set inherit', () => {
    const tree = renderer.create(
      <Icon name="github" size="inherit" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and size set small', () => {
    const tree = renderer.create(
      <Icon name="github" size="small" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and size set normal', () => {
    const tree = renderer.create(
      <Icon name="github" size="normal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and size set large', () => {
    const tree = renderer.create(
      <Icon name="github" size="large" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and spin set', () => {
    const tree = renderer.create(
      <Icon name="github" spin />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and pulse set', () => {
    const tree = renderer.create(
      <Icon name="github" pulse />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and border set', () => {
    const tree = renderer.create(
      <Icon name="github" border />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop name and flip set horizontal', () => {
    const tree = renderer.create(
      <Icon name="github" flip="horizontal" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and flip set vertical', () => {
    const tree = renderer.create(
      <Icon name="github" flip="vertical" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and rotate set 180', () => {
    const tree = renderer.create(
      <Icon name="github" rotate={180} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and rotate set 0', () => {
    const tree = renderer.create(
      <Icon name="github" rotate={0} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and rotate set 90', () => {
    const tree = renderer.create(
      <Icon name="github" rotate={90} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and rotate set 270', () => {
    const tree = renderer.create(
      <Icon name="github" rotate={270} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and tabIndex set 1', () => {
    const tree = renderer.create(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <Icon name="github" tabIndex={1} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop name and tabIndex set 100', () => {
    const tree = renderer.create(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <Icon name="github" tabIndex={100} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('one call "onClick" event after "click"', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <Icon name="github" onClick={mockFn} />,
            ).toJSON();

    tree.props.onClick();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('renders with "library" as type', () => {
    const tree = renderer.create(
      <Icon type="library" src="foo://bar" name="github" />,
            ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly if prop type set library and tabIndex set 1', () => {
    const tree = renderer.create(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <Icon type="library" tabIndex={1} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
