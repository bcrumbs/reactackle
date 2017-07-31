'use strict';

import React from 'react';
import { MenuStyled } from './styles/MenuStyled';

const propTypes = {};
const defaultProps = {};

export const Menu = props => (
  <MenuStyled>
    {props.children}
  </MenuStyled>
);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = 'Menu';

export * from './MenuGroup/MenuGroup';
export * from './MenuGroupItem/MenuGroupItem';
