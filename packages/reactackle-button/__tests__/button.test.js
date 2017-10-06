'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { IconSvg, IconCustom } from 'reactackle-icons';
import { Button } from '../src';

jest.mock('react-dom');

const demoIcon = (
  <svg viewBox="0 0 24 24">
    <polygon points="9,19.4 3.3,13.7 4.7,12.3 9,16.6 19.8,5.8 21.2,7.2" />
  </svg>
);

describe('<Button/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Button />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly if prop disabled set true', () => {
    const tree = renderer.create(
      <Button disabled />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop raised set to true', () => {
    const tree = renderer.create(
      // eslint-disable-next-line
      <Button raised />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop kind="primary" set', () => {
    const tree = renderer.create(
      <Button colorScheme="primary" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="secondary" set', () => {
    const tree = renderer.create(
      <Button colorScheme="secondary" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="alert" set', () => {
    const tree = renderer.create(
      <Button colorScheme="alert" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="success" set', () => {
    const tree = renderer.create(
      <Button colorScheme="success" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="warning" set', () => {
    const tree = renderer.create(
      <Button colorScheme="warning" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="info" set', () => {
    const tree = renderer.create(
      <Button colorScheme="info" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="flatLight" set', () => {
    const tree = renderer.create(
      <Button colorScheme="flatLight" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="white" set', () => {
    const tree = renderer.create(
      <Button colorScheme="white" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop colorScheme="link" set', () => {
    const tree = renderer.create(
      <Button colorScheme="link" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop narrow set', () => {
    const tree = renderer.create(
      <Button narrow />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop radius="none" set', () => {
    const tree = renderer.create(
      <Button radius="none" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop radius="default" set', () => {
    const tree = renderer.create(
      <Button radius="default" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop radius="rounded" set', () => {
    const tree = renderer.create(
      <Button radius="rounded" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set inline', () => {
    const tree = renderer.create(
      <Button size="inline" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set small', () => {
    const tree = renderer.create(
      <Button size="small" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set large', () => {
    const tree = renderer.create(
      <Button size="large" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop text set', () => {
    const tree = renderer.create(
      <Button text="test" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop text="foo" set', () => {
    const tree = renderer.create(
      <Button text="foo" />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop icon="svg" set', () => {
    const tree = renderer.create(
      <Button icon={<IconSvg>{demoIcon}</IconSvg>} />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop icon="custom" set', () => {
    const tree = renderer.create(
      <Button
        icon={
          <IconCustom src="http://files.gamebanana.com/img/ico/sprays/51cb98f9d3747.png" />
        }
      />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });
  
  it('one call onPress event', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <Button onPress={mockFn} />,
      ).toJSON();
    
    tree.props.onClick();
    
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  
  it('not call onPress if prop disabled', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <Button disabled onPress={mockFn} />,
      ).toJSON();
    
    tree.props.onClick();
    
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
  
  it('renders correctly if props text and subtitle are set', () => {
    const component = renderer.create(
      <Button text="test" subtitle="sup" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if props narrow false and radius rounded', () => {
    const component = renderer.create(
      <Button
        text="test"
        narrow={false}
        radius="rounded"
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
