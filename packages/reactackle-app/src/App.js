'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createBroadcast,
  APP_CHANNEL,
  registerDefaultComponentTheme,
} from 'reactackle-core';
import { AppStyled } from './styles/AppStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('app', componentTheme);

const propTypes = {
  /**
   * Set App height to be equal to the window height, so the <Content /> will
   * become scrollable.
   */
  fixed: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
};

const childContextTypes = {
  [APP_CHANNEL]: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      fixed: this.props.fixed,
    });
  }

  getChildContext() {
    return {
      ...this.context,
      [APP_CHANNEL]: this._broadcast.subscribe,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.fixed !== nextProps.fixed) {
      this._broadcast.publish({
        fixed: nextProps.fixed,
      });
    }
  }

  render() {
    return (
      <AppStyled fixed={this.props.fixed}>
        {this.props.children}
      </AppStyled>
    );
  }
}

App.childContextTypes = childContextTypes;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
App.displayName = 'App';
