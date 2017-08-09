import React from 'react';
import renderer from 'react-test-renderer';
import { Preloader } from '../src';

jest.mock('react-dom');

describe('<Preloader/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Preloader kind="circle" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop kind set circle', () => {
    const tree = renderer.create(
      <Preloader kind="circle" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop kind set linear', () => {
    const tree = renderer.create(
      <Preloader kind="linear" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop width set 50%', () => {
    const tree = renderer.create(
      <Preloader kind="circle" width="50%" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop width set 150%', () => {
    const tree = renderer.create(
      <Preloader kind="circle" width="150%" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop height set 100px', () => {
    const tree = renderer.create(
      <Preloader kind="circle" height="100px" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop height set 1100px', () => {
    const tree = renderer.create(
      <Preloader kind="circle" height="1100px" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
