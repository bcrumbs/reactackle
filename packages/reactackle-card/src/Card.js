'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createBroadcast,
  CARD_CHANNEL,
  registerDefaultComponentTheme,
} from 'reactackle-core';
import { CardStyled } from './styles/CardStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('card', componentTheme);

const propTypes = {
  /**
   * Determines size of the card
   */
  size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  /**
   * Determines the shadow size. Min: 0 - no shadow
   */
  elevation: PropTypes.number,
  /**
   * Determines whether to show shadow
   */
  noShadow: PropTypes.bool,
};

const defaultProps = {
  size: 'default',
  elevation: 1,
  noShadow: false,
};

const childContextTypes = {
  [CARD_CHANNEL]: PropTypes.func.isRequired,
};

export default class Card extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      size: this.props.size,
    });
  }

  getChildContext() {
    return { ...this.context, [CARD_CHANNEL]: this._broadcast.subscribe };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.size !== nextProps.size) {
      this._broadcast.publish({
        size: nextProps.size,
      });
    }
  }

  render() {
    const { elevation, noShadow, children } = this.props;

    return (
      <CardStyled elevation={elevation} noShadow={noShadow}>
        {children}
      </CardStyled>
    );
  }
}

Card.childContextTypes = childContextTypes;
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.displayName = 'Card';
