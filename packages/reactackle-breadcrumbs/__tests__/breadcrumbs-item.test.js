import React from 'react';
import renderer from 'react-test-renderer';
import { IconSvg } from 'reactackle-icons';
import { BreadcrumbsItem } from '../src';

jest.mock('react-dom');

describe('<BreadcrumbsItem />', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <BreadcrumbsItem />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with colorScheme prop set to one from emum', () => {
    const tree = renderer.create(
      <BreadcrumbsItem colorScheme='light' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with index set to number', () => {
    const tree = renderer.create(
      <BreadcrumbsItem index={1} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with home set to true', () => {
    const tree = renderer.create(
      <BreadcrumbsItem home />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with title set to string', () => {
    const tree = renderer.create(
      <BreadcrumbsItem title='Hello' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with subtitle set to string', () => {
    const tree = renderer.create(
      <BreadcrumbsItem subtitle='Some subtitle' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with separatorIcon set to <IconSVG />', () => {
    const tree = renderer.create(
      <BreadcrumbsItem separatorIcon={<IconSvg />} />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with itemHref set to string', () => {
    const tree = renderer.create(
      <BreadcrumbsItem itemHref='google.com' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with isActive set to true', () => {
    const tree = renderer.create(
      <BreadcrumbsItem isActive />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with alignItems set to one from enum', () => {
    const tree = renderer.create(
      <BreadcrumbsItem alignItems='top' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with ariaCurrentValue set to string', () => {
    const tree = renderer.create(
      <BreadcrumbsItem ariaCurrentValue='some string' />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });

});
