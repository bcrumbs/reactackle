'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { findByType } from 'reactackle-test-utils';

import {
  OptionCustom,
} from '../src/OptionCustom/OptionCustom';

import {
    OptionsListCustom,
} from '../src/OptionsListCustom/OptionsListCustom';

import {
    SelectBoxCustom,
} from '../src/SelectBoxCustom/SelectBoxCustom';

import {
    SelectBoxNative,
} from '../src/SelectBoxNative/SelectBoxNative';

import { SelectBox } from '../src';

jest.mock('react-dom');

const rect = {
  top: 0,
  bottom: 0,
};

const options = {
  createNodeMock(element) {
    return {
      ...element,
      style: {},
      getBoundingClientRect() {
        return rect;
      },
      contains() {
        return false;
      },
      scrollHeight: 1,
      parentNode: {
        getBoundingClientRect() {
          return rect;
        },
      },
    };
  },
};

describe('<SelectBoxCustom />', () => {
  it(
    'renders correctly if prop message set text and' +
    'colorScheme set success', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" colorScheme="success" />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set text and' +
    'colorScheme set error', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" colorScheme="error" />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it(
    'renders correctly if prop message set text,' +
    'dense and fullWidth', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" dense fullWidth />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set text and dense', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" dense />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set text and fullWidth', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" fullWidth />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop message set text and disabled', () => {
    const component = renderer.create(
      <SelectBoxCustom message="text" disabled />, options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with label, tooltip and message', () => {
    const component = renderer.create(
      <SelectBoxCustom
        label="Foo"
        tooltip="Bar"
        message="FooBar"
        options={[{ value: 'value', text: 'text' }]}
        defaultValue="value"
      />,
      options,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('<SelectBox/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <SelectBox />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop message set text', () => {
    const tree = renderer.create(
      <SelectBox message="text" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=custom', () => {
    const tree = renderer.create(
      <SelectBox type="custom" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native', () => {
    const tree = renderer.create(
      <SelectBox type="native" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and disabled', () => {
    const tree = renderer.create(
      <SelectBox type="native" disabled />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and colorScheme success', () => {
    const tree = renderer.create(
      <SelectBox type="native" colorScheme="success" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and colorScheme error', () => {
    const tree = renderer.create(
      <SelectBox type="native" colorScheme="error" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and bordered', () => {
    const tree = renderer.create(
      <SelectBox type="native" bordered />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and fullWidth', () => {
    const tree = renderer.create(
      <SelectBox type="native" fullWidth />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native, fullWidth and dense', () => {
    const tree = renderer.create(
      <SelectBox type="native" fullWidth dense />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native and dense', () => {
    const tree = renderer.create(
      <SelectBox type="native" dense />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop type=native, bordered and fullWidth', () => {
    const tree = renderer.create(
      <SelectBox type="native" bordered fullWidth />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop disabled set', () => {
    const tree = renderer.create(
      <SelectBox disabled />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop dense set', () => {
    const tree = renderer.create(
      <SelectBox dense />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop fullWidth set', () => {
    const tree = renderer.create(
      <SelectBox fullWidth />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop labelPosition set', () => {
    const tree = renderer.create(
      <SelectBox labelPosition="top" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop labelPosition set', () => {
    const tree = renderer.create(
      <SelectBox labelPosition="side" />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop light set', () => {
    const tree = renderer.create(
      <SelectBox light />, options,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly option list in native mode', () => {
    const tree = renderer.create(
      <SelectBox
        type="native"
        options={[
          {
            value: 'Foo',
            text: 'Bar',
          },
          {
            value: 'Bar',
            text: 'Foo',
            disabled: true,
          },

        ]}
      />, options,
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<OptionCustom />', () => {
  it('handles click and keyDown', () => {
    const component = renderer.create(
      <OptionCustom />,
    );
    expect(component.toJSON()).toMatchSnapshot();
    const option = findByType(component.toJSON(), 'li');
    option.props.onKeyDown({ keyCode: 32, preventDefault: jest.fn() });
    option.props.onClick();
  });

  it('render correctly if disabled', () => {
    const component = renderer.create(
      <OptionCustom disabled />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render correctly if selected', () => {
    const component = renderer.create(
      <OptionCustom selected />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render correctly if dense', () => {
    const component = renderer.create(
      <OptionCustom dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render correctly if fullWidth', () => {
    const component = renderer.create(
      <OptionCustom fullWidth />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render correctly if fullWidth and dense', () => {
    const component = renderer.create(
      <OptionCustom fullWidth dense />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('<OptionsListCustom />', () => {
  it('handles option click', () => {
    window.innerHeight = -1;
    const component = renderer.create(
      <OptionsListCustom
        options={[{ value: 'value', text: 'text' }]}
      />,
      options,
    );
    expect(component.toJSON()).toMatchSnapshot();
    const option = findByType(component.toJSON(), 'li');
    option.props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('handles scroll, updates and unmounts', () => {
    window.innerHeight = -1;
    const component = renderer.create(
      <OptionsListCustom
        options={[{ value: 'value', text: 'text' }]}
      />,
      options,
    );
    expect(component.toJSON()).toMatchSnapshot();
    const instance = component.getInstance();
    instance.setState({
      onTop: true,
      checkOverflowHeight: true,
    });
    rect.top = -1;
    document.dispatchEvent(new Event('scroll'));
    expect(component.toJSON()).toMatchSnapshot();
    rect.top = 0;
    instance.setState({
      onTop: true,
      checkOverflowHeight: true,
      height: 10,
    });
    document.dispatchEvent(new Event('scroll'));
    expect(component.toJSON()).toMatchSnapshot();
    rect.bottom = -11;
    instance.setState({
      onTop: false,
      checkOverflowHeight: true,
      height: 10,
    });
    document.dispatchEvent(new Event('scroll'));
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
  });

  it('renders correctly if prop dense', () => {
    const component = renderer.create(
      <OptionsListCustom
        dense
        options={[{ value: 'value', text: 'text' }]}
      />,
      options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fullWidth', () => {
    const component = renderer.create(
      <OptionsListCustom
        fullWidth
        options={[{ value: 'value', text: 'text' }]}
      />,
      options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fullWidth and dense', () => {
    const component = renderer.create(
      <OptionsListCustom
        fullWidth
        dense
        options={[{ value: 'value', text: 'text' }]}
      />,
      options,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('<SelectBoxNative />', () => {
  it('renders correctly if set options and defaultValue', () => {
    const component = renderer.create(
      <SelectBoxNative
        options={[{ value: 'value', text: 'text' }]}
        defaultValue="value"
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if set options and value', () => {
    const component = renderer.create(
      <SelectBoxNative
        options={[{ value: 'value', text: 'text' }]}
        value="value"
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with label, tooltip and message', () => {
    const component = renderer.create(
      <SelectBoxNative
        label="Foo"
        tooltip="Bar"
        message="FooBar"
        reverse
        options={[{ value: 'value', text: 'text' }]}
        defaultValue="value"
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('handles change', () => {
    const component = renderer.create(
      <SelectBoxNative
        options={[{ value: 'value', text: 'text' }]}
      />,
    );
    findByType(component.toJSON(), 'select').props.onChange({
      target: { value: 0 },
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
