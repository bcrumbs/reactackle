
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findByType } from 'reactackle-test-utils';
import AlertArea from '../src/AlertArea';

jest.mock('react-dom');
jest.useFakeTimers();

describe('<AlertArea/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <AlertArea />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop alerts set array', () => {
    const alerts = [{}];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alerts set' +
    ' [{vertical:false,buttons:[],content:"test"}]', () => {
    const alerts = [{
      vertical: false,
      buttons: [],
      content: 'test',
    }];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alerts set' +
    ' [{vertical:true,buttons:[],content:""}]', () => {
    const alerts = [{
      vertical: true,
      buttons: [],
      content: 'test',
    }];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alerts has buttons and checks them', () => {
    const alerts = [{
      vertical: true,
      buttons: [{
        text: 'test',
        action: () => {},
        closeAlert: true,
      }],
      content: 'test',
    }];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
    findByType(tree.toJSON(), 'button').props.onClick();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alerts set several vertical items', () => {
    const alerts = [
      {
        vertical: true,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 1',
      },
      {
        vertical: true,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 2',
      },
    ];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop alerts set several vertical/horizontal' +
    ' items', () => {
    const alerts = [
      {
        vertical: false,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 1',
      },
      {
        vertical: true,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 2',
      },
    ];
  
    const tree = renderer.create(
      <AlertArea alerts={alerts} />,
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('handles prop change', () => {
    const alerts = [
      {
        vertical: false,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 1',
      },
      {
        vertical: true,
        buttons: [{
          text: 'close',
          action: () => {},
          closeAlert: true,
        }],
        content: 'TEST 2',
      },
    ];
  
    const component = mount(
      <AlertArea alerts={alerts} />,
    );
    component.setProps({ alerts: [] });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('ensures that component methods are working', () => {
    const tree = renderer.create(
      <AlertArea />,
    );
    const instanse = tree.getInstance();
    instanse._handleAlertClose();
    instanse.timeout = null;
    instanse.addToQueue({
      vertical: false,
      buttons: [{
        text: 'close',
        action: () => {},
        closeAlert: true,
      }],
      content: 'TEST',
    });
    instanse._closeCurrentAlert();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
