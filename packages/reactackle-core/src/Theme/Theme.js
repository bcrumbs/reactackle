'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import { createBroadcast } from '../utils/create-broadcast';
import { isFunction } from '../utils/misc';
import {
  defaultThemeBlueprintBroadcast,
  composeReactackleTheme,
} from '../theme';

const THEME_MIXIN_CHANNEL = '__reactackle_theme_mixin__';

const propTypes = {
  mixin: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

const defaultProps = {
  mixin: {},
};

const contextTypes = {
  [THEME_MIXIN_CHANNEL]: PropTypes.func,
};

const childContextTypes = {
  [THEME_MIXIN_CHANNEL]: PropTypes.func.isRequired,
};

export class Theme extends Component {
  constructor(props, context) {
    super(props, context);

    this._unsubscribeToOuter = null;
    this._unsubscribeDefaultTheme = null;
    this._broadcast = null;
    this._outerMixin = {};
    this._currentMixin = {};

    this.state = {
      theme: {},
    };

    this._updateTheme = this._updateTheme.bind(this);
  }

  getChildContext() {
    return {
      ...this.context,
      [THEME_MIXIN_CHANNEL]: this._broadcast.subscribe,
    };
  }

  componentWillMount() {
    if (this.context[THEME_MIXIN_CHANNEL]) {
      const subscribe = this.context[THEME_MIXIN_CHANNEL];
      this._unsubscribeToOuter = subscribe(mixin => {
        this._outerMixin = mixin;
      });
    }

    this._currentMixin = this._getMixin(this.props.mixin);
    this._broadcast = createBroadcast(this._currentMixin);
    this._unsubscribeDefaultTheme = defaultThemeBlueprintBroadcast.subscribe(
      this._updateTheme,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mixin !== nextProps.mixin) {
      this._currentMixin = this._getMixin(nextProps.mixin);

      this._broadcast.publish(this._currentMixin);
      this._updateTheme();
    }
  }

  componentWillUnmount() {
    this._unsubscribeDefaultTheme();
    if (this.context[THEME_MIXIN_CHANNEL]) this._unsubscribeToOuter();
  }

  _updateTheme() {
    this.setState({ theme: composeReactackleTheme(this._currentMixin) });
  }

  _getMixin(mixin) {
    if (isFunction(mixin)) return mixin(this._outerMixin);

    if (this.context[THEME_MIXIN_CHANNEL])
      return merge({}, this._outerMixin, mixin);

    return this.props.mixin;
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

Theme.childContextTypes = childContextTypes;
Theme.contextTypes = contextTypes;
Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;
Theme.displayName = 'Theme';
