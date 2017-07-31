'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  Header,
  HeaderRegion,
  HeaderTitle,
} from '../src';

jest.mock('react-dom');
jest.mock('react-resize-detector', () => jest.fn(() => <div />));

const context = {
  createNodeMock(element) {
    if (element.type !== 'header') return null;
    
    return {
      getBoundingClientRect() {
        return {
          bottom: 124,
          height: 124,
          left: 0,
          right: 485,
          top: 0,
          width: 485,
        };
      },
    };
  },
};

const map = {};

window.removeEventListener = jest.fn();
window.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('<Header/>', () => {
  it('renders correctly with default props', () => {
    const component = mount(
      <Header />,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('call removeEventListener if unmount and header is condenses', () => {
    const component = mount(
      <Header condenses />,
    );
    
    component.instance().componentWillUnmount();
    
    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      map.scroll,
    );
  });
  
  it('renders correctly if change prop behavior set fixed', () => {
    const component = mount(
      <Header behavior="static" />,
    );
    
    expect(toJson(component)).toMatchSnapshot();
    component.instance().componentWillReceiveProps({ behavior: 'fixed' });
    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      map.scroll,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if change prop behavior set static', () => {
    const component = mount(
      <Header behavior="fixed" />,
    );
    
    expect(toJson(component)).toMatchSnapshot();
    component.instance().componentWillReceiveProps({ behavior: 'static' });
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if change prop condenses', () => {
    const component = mount(
      <Header condenses />,
    );
    
    expect(toJson(component)).toMatchSnapshot();
    component.instance().componentWillReceiveProps({ condenses: false });
    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      map.scroll,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if prop behavior set static', () => {
    const component = mount(
      <Header behavior="static" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if prop behavior set fixed', () => {
    const component = mount(
      <Header behavior="fixed" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set default', () => {
    const component = mount(
      <Header size="default" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set blank', () => {
    const component = mount(
      <Header size="blank" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if prop size set dense', () => {
    const component = mount(
      <Header size="dense" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if have children label with id test', () => {
    const component = mount(
      <Header>
        <label id="test" />
      </Header>,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if backgroundColor set', () => {
    const component = mount(
      <Header backgroundColor="red" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if backgroundImage set', () => {
    const component = mount(
      <Header backgroundImage="example.png" />,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders correctly if behavior set type-2 and page scroll', () => {
    const component = mount(
      <Header
        condensedHeaderHeight={50}
        condenses
        keepCondensedHeader
        behavior="fixed"
      >
        <HeaderRegion spread>
          <HeaderTitle>
            <div style={{ minHeight: '100px' }}>
              Header behavior set type-2
            </div>
          </HeaderTitle>
        </HeaderRegion>
      </Header>,
      context,
    );
    
    expect(toJson(component)).toMatchSnapshot();
    
    window.pageYOffset = 200;
    map.scroll();
    
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('<HeaderRegion/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <HeaderRegion />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});

describe('<HeaderTitle/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <HeaderTitle />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
