'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
    App,
    BottomRegion,
    TopRegion,
    MainRegion,
    Content,
} from '../src';

describe('<App/>', () => {
  it('renders correctly with default props', () => {
    const tree = shallow(
      <App />,
    );

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set true', () => {
    const tree = renderer.create(
      <App fixed />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop fixed set false', () => {
    const tree = renderer.create(
      <App fixed={false} />,
    );
    
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if contains children', () => {
    const tree = renderer.create(
      <App>
        <TopRegion />
        <MainRegion>
          <Content>
            <div>TEST</div>
          </Content>
        </MainRegion>
        <BottomRegion />
      </App>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly if prop fixed changing', () => {
    const component = renderer.create(
      <App>
        <MainRegion>
          <Content>
            <div>TEST</div>
          </Content>
        </MainRegion>
      </App>,
    );
    
    expect(component.toJSON()).toMatchSnapshot();
    
    const instance = component.getInstance();
    instance.componentWillReceiveProps({ fixed: true });
    
    expect(component.toJSON()).toMatchSnapshot();
  });
});
