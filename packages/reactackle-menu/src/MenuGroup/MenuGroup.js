import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBroadcast, withExternalProps } from 'reactackle-core';
import { MenuList } from '../MenuList';
import { MenuItem } from '../MenuItem';
import { MENU_BROADCAST, MENU_GROUP_BROADCAST } from '../broadcastsConstants';

import { MenuGroupStyled } from './styles/MenuGroupStyled';

const MenuItemType =
  PropTypes.shape({
    ...MenuItem.propTypes,
    type: PropTypes.func,
    submenuGroup: PropTypes.shape(
      {
        type: PropTypes.func,
        // Lazy function for circular structure
        data: PropTypes.arrayOf(() => (() => MenuItemType)()),
      },
    ),
  });

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.func,
    data: PropTypes.arrayOf(MenuItemType),
  })),
  inline: PropTypes.bool,
  nestingLevel: PropTypes.func,
};

const defaultProps = {
  data: [],
  inline: false,
  nestingLevel: PropTypes.func,
};

class MenuGroup extends Component {
  constructor(props) {
    super(props);

    this._broadcast = createBroadcast({
      nestingLevel: this.props.nestingLevel,
    });

    this.MenuGroup = MenuGroup;
    this.MenuList = MenuList;
    this.MenuItem = MenuItem;
    this._createElementRef = this._createElementRef.bind(this);
    this._generateMenuList = this._generateMenuList.bind(this);
    this._generateSubMenuList = this._generateSubMenuList.bind(this);
  }

  getChildContext() {
    return {
      ...this.context,
      [MENU_GROUP_BROADCAST]: this._broadcast.subscribe,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.nestingLevel !== nextProps.nestingLevel
    ) {
      this._broadcast.publish({
        nestingLevel: nextProps.nestingLevel,
      });
    }
  }
  
  _createElementRef(ref) {
    this.element = ref;
  }
  
  _generateMenuList(itemList, itemListKey) {
    return React.createElement(
      itemList.type || this.MenuList,
      {
        ...itemList,
        key: itemListKey,
      },
      itemList.data.map(this._generateSubMenuList),
    );
  }
  _generateSubMenuList(item, itemKey) {
    return React.createElement(
      item.type || this.MenuItem,
      {
        ...item,
        key: itemKey,
      },
      item.submenuGroup && Array.isArray(item.submenuGroup.data)
      && React.createElement(
        item.submenuGroup.type || this.MenuGroup,
        item.submenuGroup,
      ),
    );
  }
  render() {
    const {
      children,
      data,
      inline,
    } = this.props;

    const content = data.length
      ? data.map(this._generateMenuList)
      : children;
    
    return (
      <MenuGroupStyled
        ref={this._createElementRef}
        inline={inline}
      >
        {content}
      </MenuGroupStyled>
    );
  }
}

MenuGroup.propTypes = propTypes;
MenuGroup.defaultProps = defaultProps;
MenuGroup.displayName = 'MenuGroup';
MenuGroup.childContextTypes = {
  [MENU_GROUP_BROADCAST]: PropTypes.func.isRequired,
};

export default withExternalProps(MENU_BROADCAST)(
  ({ externalProps, ...props }) =>
    <MenuGroup {...props} menuProps={externalProps} />,
);
