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
   * Simulate item offset for nested trees
   */
  nestingLevel: PropTypes.number,
  /**
   * Adds border to visually separate two lists
   */
  bordered: PropTypes.bool,
  /**
   * Define item colorScheme
   */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Set to 'light' for using menu on dark background
   */
  inline: PropTypes.bool,
};

const defaultProps = {
  title: '',
  nestingLevel: 0,
  colorScheme: 'dark',
  bordered: false,
  inline: false,
};

export class MenuList extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      inline: this.props.inline,
      colorScheme: this.props.colorScheme,
      nestingLevel: this.props.nestingLevel
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
    const { children, title, bordered, inline } = this.props;

    const titleBox = title && <TitleStyled>{title}</TitleStyled>;

    return (
      <MenuListStyled bordered={bordered} inline={inline}>
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
  ({ externalProps, ...props }) => <MenuList {...externalProps} {...props} />,
);

export default withExternalProps(MENU_GROUP_BROADCAST)(
  ({ externalProps, ...props }) => (
    <MenuListWithMenuProps {...externalProps} {...props} />
  ),
);
