import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBroadcast } from 'reactackle-core';
import { MENU_BROADCAST } from './broadcastsConstants';

import { MenuStyled } from './styles/MenuStyled';

const propTypes = {
  /**
   * Changes layout direction from vertical to horizontal
   */
  inline: PropTypes.bool,
  /**
   * Set to 'light' for using menu on dark background
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
};

const defaultProps = {
  inline: false,
  colorScheme: 'dark',
};

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      colorScheme: this.props.colorScheme,
      inline: this.props.inline,
    });
  }

  getChildContext() {
    return {
      ...this.context,
      [MENU_BROADCAST]: this._broadcast.subscribe,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.colorScheme !== nextProps.colorScheme ||
      this.props.inline !== nextProps.inline ||
      this.props.openSubmenuOnMouseEnter !== nextProps.openSubmenuOnMouseEnter
    ) {
      this._broadcast.publish({
        colorScheme: nextProps.colorScheme,
        inline: nextProps.inline,
        openSubmenuOnMouseEnter: nextProps.openSubmenuOnMouseEnter,
      });
    }
  }

  render() {
    return (
      <MenuStyled>
        { this.props.children }
      </MenuStyled>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = 'Menu';
Menu.childContextTypes = {
  [MENU_BROADCAST]: PropTypes.func.isRequired,
};
