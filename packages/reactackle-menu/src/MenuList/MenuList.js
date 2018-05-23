import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBroadcast, withExternalProps } from 'reactackle-core';
import { MenuListStyled } from './styles/MenuListStyled';
import { TitleStyled } from './styles/TitleStyled';

import { MENU_BROADCAST, MENU_GROUP_BROADCAST } from '../broadcastsConstants';

const propTypes = {
  /**
   * List title
   */
  title: PropTypes.string,
  /**
   * Adds border to visually separate two lists
   */
  bordered: PropTypes.bool,
  /**
   * Set to 'light' for using menu on dark background
   */
  inline: PropTypes.bool,
};

const defaultProps = {
  title: '',
  bordered: false,
  inline: false,
};

export class MenuList extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      inline: this.props.inline,
    });
  }

  getChildContext() {
    return {
      ...this.context,
      [MENU_BROADCAST]: this._broadcast.subscribe,
      [MENU_GROUP_BROADCAST]: this._broadcast.subscribe,
    };
  }
  
  render() {
    const {
      children,
      title,
      bordered,
      inline,
    } = this.props;

    const titleBox = title && (
      <TitleStyled>
        {title}
      </TitleStyled>
    );

    return (
      <MenuListStyled
        bordered={bordered}
        inline={inline}
      >
        {titleBox}
        {children}
      </MenuListStyled>
    );
  }
}

MenuList.propTypes = propTypes;
MenuList.defaultProps = defaultProps;
MenuList.displayName = 'MenuList';
MenuList.childContextTypes = {
  [MENU_BROADCAST]: PropTypes.func.isRequired,
  [MENU_GROUP_BROADCAST]: PropTypes.func.isRequired,
};

const MenuListWithMenuProps = withExternalProps(MENU_BROADCAST)(
  ({ externalProps, ...props }) => (
    <MenuList inline={externalProps.inline} {...props} />
  ),
);

export default withExternalProps(MENU_GROUP_BROADCAST)(
  ({ externalProps, ...props }) => (
    <MenuListWithMenuProps inline={externalProps.inline} {...props} />
  ),
);
