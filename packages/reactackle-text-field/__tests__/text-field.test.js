'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { IconDefault } from 'reactackle-icons';
import {
  defaultTheme,
} from 'reactackle-core';
import { findByType, findBySelector } from 'reactackle-test-utils';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TextField } from '../src';

jest.mock('react-dom');

describe('<TextField/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <TextField />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop disabled set', () => {
    const component = renderer.create(
      <TextField disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop dense set', () => {
    const component = renderer.create(
      <TextField dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fullWidth set', () => {
    const component = renderer.create(
      <TextField fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop labelPosition set top', () => {
    const component = renderer.create(
      <TextField labelPosition="top" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop labelPosition set side', () => {
    const component = renderer.create(
      <TextField labelPosition="side" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop styleMode set neutral', () => {
    const component = renderer.create(
      <TextField styleMode="neutral" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop styleMode set error', () => {
    const component = renderer.create(
      <TextField styleMode="error" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop styleMode set success', () => {
    const component = renderer.create(
      <TextField styleMode="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop slidingLabel set true', () => {
    const component = renderer.create(
      <TextField slidingLabel />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop slidingLabel set false', () => {
    const component = renderer.create(
      <TextField slidingLabel={false} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly after fire event focus', () => {
    const component = renderer.create(
      <TextField />,
    );

    findBySelector(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if state showLengthError set true', () => {
    const component = renderer.create(
      <TextField />,
    );

    const instance = component.getInstance();

    instance.setState({
      showLengthError: true,
    });

    expect(component).toMatchSnapshot();
  });

  it('renders correctly if prop value set test', () => {
    const component = renderer.create(
      <TextField defaultValue="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop tooltip set test without label', () => {
    const component = renderer.create(
      <TextField tooltip="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop tooltip set test and label set test', () => {
    const component = renderer.create(
      <TextField label="test" tooltip="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop placeholder set test', () => {
    const component = renderer.create(
      <TextField placeholder="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop autoComplete set on', () => {
    const component = renderer.create(
      <TextField autoComplete="on" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and disabled', () => {
    const component = renderer.create(
      <TextField slidingLabel disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and colorScheme set success', () => {
    const component = renderer.create(
      <TextField slidingLabel colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and labelPosition set side', () => {
    const component = renderer.create(
      <TextField slidingLabel labelPosition="side" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' and call focus', () => {
    const component = renderer.create(
      <TextField slidingLabel />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop slidingLabel set true', () => {
    const component = renderer.create(
      <TextField slidingLabel />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true ' +
    'and bordered', () => {
    const component = renderer.create(
      <TextField slidingLabel bordered />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and dense', () => {
    const component = renderer.create(
      <TextField slidingLabel dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and fullWidth', () => {
    const component = renderer.create(
      <TextField slidingLabel fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' fullWidth and dense', () => {
    const component = renderer.create(
      <TextField slidingLabel fullWidth dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true ' +
    'and filled', () => {
    const component = renderer.create(
      <TextField slidingLabel filled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true' +
    ' and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'bordered and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' dense and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel dense iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' fullWidth and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel fullWidth iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' fullWidth, dense and iconOuter', () => {
    const component = renderer.create(
      <TextField
        slidingLabel
        fullWidth
        dense
        iconOuter={IconDefault}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'filled and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel filled iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and disabled', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and colorScheme set success', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and labelPosition set side', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" labelPosition="side" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and call focus', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop slidingLabel set true, label set test', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'label set test and bordered', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" bordered />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and dense', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and fullWidth', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test, fullWidth and dense', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" fullWidth dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'label set test and filled', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" filled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'label set test, bordered and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test, dense and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" dense iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test, fullWidth and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" fullWidth iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true,' +
    ' label set test, fullWidth, dense and iconOuter', () => {
    const component = renderer.create(
      <TextField
        slidingLabel
        label="test"
        fullWidth
        dense
        iconOuter={IconDefault}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop slidingLabel set true, ' +
    'label set test, filled and iconOuter', () => {
    const component = renderer.create(
      <TextField slidingLabel label="test" filled iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test and disabled', () => {
    const component = renderer.create(
      <TextField label="test" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test and colorScheme set success', () => {
    const component = renderer.create(
      <TextField label="test" colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test and labelPosition set side', () => {
    const component = renderer.create(
      <TextField label="test" labelPosition="side" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test and call focus', () => {
    const component = renderer.create(
      <TextField label="test" />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test', () => {
    const component = renderer.create(
      <TextField label="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test and bordered', () => {
    const component = renderer.create(
      <TextField label="test" bordered />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test and dense', () => {
    const component = renderer.create(
      <TextField label="test" dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set test and fullWidth', () => {
    const component = renderer.create(
      <TextField label="test" fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fullWidth and dense', () => {
    const component = renderer.create(
      <TextField label="test" fullWidth dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test and filled', () => {
    const component = renderer.create(
      <TextField label="test" filled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test and iconOuter', () => {
    const component = renderer.create(
      <TextField label="test" iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test, bordered and iconOuter', () => {
    const component = renderer.create(
      <TextField label="test" iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop label set test, dense and iconOuter', () => {
    const component = renderer.create(
      <TextField label="test" dense iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop label set test,' +
    'fullWidth and iconOuter', () => {
    const component = renderer.create(
      <TextField label="test" fullWidth iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop' +
    ' label set test, fullWidth, dense and iconOuter', () => {
    const component = renderer.create(
      <TextField
        label="test"
        fullWidth
        dense
        iconOuter={IconDefault}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop' +
    'label set test, filled and iconOuter', () => {
    const component = renderer.create(
      <TextField label="test" filled iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop password set true', () => {
    const component = renderer.create(
      <TextField type="password" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop password set true' +
    ' and call show password', () => {
    const component = renderer.create(
      <TextField defaultValue="test" type="password" />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    findByType(tree, 'svg').props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop password set true,' +
    'colorScheme set success', () => {
    const component = renderer.create(
      <TextField type="password" colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop password set true and disabled', () => {
    const component = renderer.create(
      <TextField type="password" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop password set and dense, fullWidth ', () => {
    const component = renderer.create(
      <TextField type="password" dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop password set and dense', () => {
    const component = renderer.create(
      <TextField type="password" dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop password set and fullWidth ', () => {
    const component = renderer.create(
      <TextField type="password" fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if type set password', () => {
    const component = renderer.create(
      <TextField type={'password'} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if label set password', () => {
    const component = renderer.create(
      <TextField label={'password'} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop iconInner set star', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set test', () => {
    const component = renderer.create(
      <TextField message="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test and' +
    ' colorScheme set success', () => {
    const component = renderer.create(
      <TextField message="test" colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set test', () => {
    const component = renderer.create(
      <TextField message="test" />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set test and disabled', () => {
    const component = renderer.create(
      <TextField message="test" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set test and symbolLimit set 1', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and labelPosition set side', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} labelPosition="side" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and iconOuter', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and dense, fullWidth ', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and dense, fullWidth, bordered ', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} dense fullWidth bordered />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and fullWidth ', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set test, symbolLimit set 1' +
    'and dense', () => {
    const component = renderer.create(
      <TextField message="test" symbolLimit={1} dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop symbolLimit set 1', () => {
    const component = renderer.create(
      <TextField symbolLimit={1} defaultValue="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop symbolLimit set 1 and focus', () => {
    const component = renderer.create(
      <TextField symbolLimit={1} defaultValue="test" />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop symbolLimit set 1 and disabled', () => {
    const component = renderer.create(
      <TextField symbolLimit={1} defaultValue="test" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop clearingIcon set true', () => {
    const component = renderer.create(
      <TextField clearingIcon />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop clearingIcon set true and call clear', () => {
    const component = renderer.create(
      <TextField defaultValue="test" clearingIcon />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    findByType(tree, 'svg').props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop id set test', () => {
    const component = renderer.create(
      <TextField id="test" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly after fire event blur', () => {
    const component = renderer.create(
      <TextField />,
    );

    findBySelector(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();

    findBySelector(component.toJSON(), 'input').props.onBlur();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls onChange with value test after had called' +
    ' change event with target.value=test', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <TextField onChange={mockFn} />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: 'test' } });

    expect(mockFn).toBeCalledWith({ value: 'test' });
    expect(tree).toMatchSnapshot();
  });

  it('doesn\'t call onChange and calls onPatternError after had called' +
    ' change event with target.value=test and pattern set /^[0-9]*$/g', () => {
    const mockFn = jest.fn(),
      mockErrorFn = jest.fn(),
      tree = renderer.create(
        <TextField
          onChange={mockFn}
          pattern={/^[0-9]*$/g}
          onPatternError={mockErrorFn}
        />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: 'test' } });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(mockErrorFn).toHaveBeenCalledTimes(1);
    expect(tree).toMatchSnapshot();
  });

  it('calls onChange event and calls onPatternError after had called' +
    ' change event with target.value=8 and pattern set /^[0-9]*$/g', () => {
    const mockFn = jest.fn(),
      mockErrorFn = jest.fn(),
      tree = renderer.create(
        <TextField
          onChange={mockFn}
          pattern={/^[0-9]*$/g}
          onPatternError={mockErrorFn}
        />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: '8' } });

    expect(mockFn).toBeCalledWith({ value: '8' });
    expect(mockErrorFn).toHaveBeenCalledTimes(0);
    expect(tree).toMatchSnapshot();
  });

  it('calls onChange with value test after had called change' +
    ' event with target.value=test and patternFn true', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <TextField onChange={mockFn} patternFn={item => item === 'test'} />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: 'test' } });

    expect(mockFn).toBeCalledWith({ value: 'test' });
    expect(tree).toMatchSnapshot();
  });

  it('calls onChange with value test after had called change event' +
    ' with target.value=test and patternFn false', () => {
    const mockFn = jest.fn(),
      tree = renderer.create(
        <TextField onChange={mockFn} patternFn={item => item === 'notValid'} />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: 'test' } });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(tree).toMatchSnapshot();
  });


  it('calls onChange event with value test after had called change event with' +
    ' target.value=test and symbolLimit set 2', () => {
    const mockFn = jest.fn(),
      mockLimitFn = jest.fn(),
      tree = renderer.create(
        <TextField
          onChange={mockFn}
          symbolLimit={2}
          onLengthError={mockLimitFn}
        />,
      ).toJSON();

    const input = findBySelector(tree, 'input');

    input.props.onChange({ target: { value: 'test' } });

    expect(mockFn).toBeCalledWith({ value: 'te' });
    expect(mockLimitFn).toHaveBeenCalledTimes(1);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with prop prefix', () => {
    const component = renderer.create(
      <TextField prefix="Foo" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop prefix and prefixImage', () => {
    const component = renderer.create(
      <TextField prefix="Foo" prefixImage="Bar" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop prefix, iconInner', () => {
    const component = renderer.create(
      <TextField prefix="Foo" iconInner={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly with prop prefix, iconInner and fullWidth', () => {
    const component = renderer.create(
      <TextField prefix="Foo" iconInner={IconDefault} fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop prefix, iconInner and dense', () => {
    const component = renderer.create(
      <TextField prefix="Foo" iconInner={IconDefault} dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly with prop prefix, iconInner,' +
    ' fullWidth and dense', () => {
    const component = renderer.create(
      <TextField prefix="Foo" iconInner={IconDefault} dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter, dense and fullWidth', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter, dense', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter, fullWidth', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter and disabled', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly with prop iconOuter and' +
    'colorScheme set success', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconOuter and if focus', () => {
    const component = renderer.create(
      <TextField iconOuter={IconDefault} />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner, dense and fullWidth', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner, dense', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner, fullWidth', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner and disabled', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly with prop iconInner and' +
    'colorScheme set success', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop iconInner and if focus', () => {
    const component = renderer.create(
      <TextField iconInner={IconDefault} />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix', () => {
    const component = renderer.create(
      <TextField postfix="Foo" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and dense', () => {
    const component = renderer.create(
      <TextField postfix="Foo" dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and fullWidth', () => {
    const component = renderer.create(
      <TextField postfix="Foo" fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix, dense and fullWidth', () => {
    const component = renderer.create(
      <TextField postfix="Foo" dense fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and call focus', () => {
    const component = renderer.create(
      <TextField postfix="Foo" />,
    );

    findByType(component.toJSON(), 'input').props.onFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and bordered', () => {
    const component = renderer.create(
      <TextField postfix="Foo" bordered />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and disabled', () => {
    const component = renderer.create(
      <TextField postfix="Foo" disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and colorScheme set success', () => {
    const component = renderer.create(
      <TextField postfix="Foo" colorScheme="success" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with prop postfix and postfixImage', () => {
    const component = renderer.create(
      <TextField postfix="Foo" postfixImage="Bar" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('handle click event', () => {
    const mockClick = jest.fn(),
      wrapper = shallow(
        <TextField onClick={mockClick} />,
      );
    wrapper.simulate('click');
    expect(mockClick).toBeCalled();
    expect(toJson(wrapper.render())).toMatchSnapshot();
  });

  it('handle focus event', () => {
    const mockFocus = jest.fn(),
      wrapper = shallow(
        <TextField
          onFocus={mockFocus}
          scrollOnFocus
        />,
      );
    
    wrapper.simulate('focus');
    expect(mockFocus).toBeCalled();
    expect(toJson(wrapper.render())).toMatchSnapshot();
  });

  it('handless focus', () => {
    const mockFocus = jest.fn(),
      component = mount(
        <TextField
          scrollOnFocus
          value="value"
          onFocus={mockFocus}
        />,
      );

    const instance = component.instance();
    instance.focus();
    expect(mockFocus).toBeCalled();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('public method: getValue', () => {
    const mockValue = 'value',
      component = renderer.create(
        <TextField value={mockValue} />,
      );
    
    expect(component.getInstance().getValue()).toEqual(mockValue);
  });
});

describe('<TextField /> multiline', () => {
  it('renders correctly if prop minRows set 5', () => {
    const wrapper = render(
      <TextField multiline multilineRows={{ min: 5 }} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly if prop maxRows set 5', () => {
    const wrapper = render(
      <TextField multiline multilineRows={{ max: 5 }} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly if prop disabled set', () => {
    const wrapper = render(
      <TextField multiline multilineRows={{ min: 5 }} disabled />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly if prop placeholder set', () => {
    const wrapper = render(
      <TextField multiline multilineRows={{ min: 5 }} placeholder="test" />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('handles change, focus and blur events', () => {
    const mockFn = jest.fn(),
      wrapper = mount(
        <TextField._withoutHOC
          onChange={mockFn}
          onFocus={mockFn}
          onBlur={mockFn}
          theme={defaultTheme}
          value="value"
          multiline multilineRows={{ min: 5 }}
        />,
      );

    wrapper.find('textarea').props().onChange({
      target: { value: 'newValue' },
    });
    wrapper.find('textarea').props().onFocus();
    wrapper.find('textarea').props().onBlur();

    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});

