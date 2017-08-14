'use strict';

import React from 'react';
import {
  findByType,
  rendererWithPortal as rendererWithPortalMain,
 } from 'reactackle-test-utils';
import Portal from 'react-portal';

import {
  Dialog,
  DialogContentText,
} from '../src';

import { BackdropStyled } from '../src/styles/BackdropStyled';

const rendererWithPortal = (component, options) =>
  rendererWithPortalMain(component, options, Portal);
jest.mock('react-dom');

const map = {};

document.body.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('<Dialog/>', () => {
  it('renders correctly with default props', () => {
    const component = rendererWithPortal(
      <Dialog />,
    );
    expect(component.toJSON()).toMatchSnapshot();
    component.unmount();
  });

  it('renders correctly if contains children', () => {
    const component = rendererWithPortal(
      <Dialog open>
        <div> test </div>
      </Dialog>,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly call button onPress if contains buttons', () => {
    const mockFn = jest.fn(),
      buttons = [{
        text: 'Button 1',
        onPress: mockFn,
      }],
      component = rendererWithPortal(
        <Dialog open buttons={buttons}>
          <div> test </div>
        </Dialog>,
      );
    
    findByType(component.toJSON(), 'button').props.onClick();

    expect(component.toJSON()).toMatchSnapshot();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });


  it('renders correctly if prop backdrop set true', () => {
    const component = rendererWithPortal(
      <Dialog backdrop open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly if prop backdrop set and click on backdrop', () => {
    const component = rendererWithPortal(
      <Dialog backdrop open closeOnBackdropClick />,
    );

    expect(component.toJSON()).toMatchSnapshot();

    findByType(component, BackdropStyled).props.onClick();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop scrollable set true', () => {
    const component = rendererWithPortal(
      <Dialog scrollable open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop open set true', () => {
    const component = rendererWithPortal(
      <Dialog open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop haveCloseButton set true', () => {
    const component = rendererWithPortal(
      <Dialog haveCloseButton open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop closeOnEscape set true', () => {
    const component = rendererWithPortal(
      <Dialog closeOnEscape open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop closeOnBackdropClick set true', () => {
    const component = rendererWithPortal(
      <Dialog closeOnBackdropClick open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop title set title', () => {
    const component = rendererWithPortal(
      <Dialog title="title" open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop subtitle set subtitle', () => {
    const component = rendererWithPortal(
      <Dialog subtitle="subtitle" open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop minWidth > 0', () => {
    const component = rendererWithPortal(
      <Dialog minWidth={50} open />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if has prop regionAside', () => {
    const component = rendererWithPortal(
      <Dialog open regionAside={<div>RegionAside</div>} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders with DialogContentText', () => {
    const component = rendererWithPortal(
      <Dialog open>
        <DialogContentText>
          Texty text
        </DialogContentText>
      </Dialog>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders with windowTitle', () => {
    const component = rendererWithPortal(
      <Dialog open windowTitle="Window title" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
    
  it('handles keyup and props change correctly if open', () => {
    const component = rendererWithPortal(
      <Dialog windowTitle="Window title" backdrop open closeOnEscape />,
    );

    map.keyup({ keyCode: 27 });
    map.keyup({ keyCode: 13 });

    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly left buttons', () => {
    const buttons = [{
        text: 'Button',
      }],
      component = rendererWithPortal(
        <Dialog open buttonsLeft={buttons}>
          <div> test </div>
        </Dialog>,
      );
    
    findByType(component.toJSON(), 'button').props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
