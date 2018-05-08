import React from 'react';
import renderer from 'react-test-renderer';
import { IconSvg } from 'reactackle-icons';
import { Tag } from '../src';

jest.mock('react-dom');

describe('<Tag />', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Tag />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with bgColor prop set to red', () => {
    const tree = renderer.create(
      <Tag bgColor='red' />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with bounded prop set to true', () => {
    const tree = renderer.create(
      <Tag bounded />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with icon prop set to <IconSvg />', () => {
    const tree = renderer.create(
      <Tag icon={<IconSvg />} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with icon prop set to IconSvg component', () => {
    const tree = renderer.create(
      <Tag icon={IconSvg} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with iconColor prop set to red', () => {
    const tree = renderer.create(
      <Tag icon={IconSvg} iconColor='red' />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with iconRemove prop set to <IconSvg />', () => {
    const tree = renderer.create(
      <Tag iconRemove={<IconSvg />} removable />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with text prop set to some text', () => {
    const tree = renderer.create(
      <Tag text='some text' />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with textColor prop set to red', () => {
    const tree = renderer.create(
      <Tag text='some text' textColor='red' />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tooltipText prop set to String', () => {
    const tree = renderer.create(
      <Tag tooltipText='some text' />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
