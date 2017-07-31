'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuGroupItemWrapperStyled,
} from './styles/MenuGroupItemWrapperStyled';

import { MenuGroupItemStyled } from './styles/MenuGroupItemStyled';

const propTypes = {
  text: PropTypes.string,
  linkHref: PropTypes.string,
};

const defaultProps = {
  text: '',
  linkHref: '',
};

export const MenuGroupItem = props => (
  <MenuGroupItemWrapperStyled>
    <MenuGroupItemStyled tabIndex={0} replace to={props.linkHref}>
      <span>{props.text}</span>
    </MenuGroupItemStyled>
  </MenuGroupItemWrapperStyled>
);

MenuGroupItem.displayName = 'MenuGroupItem';
MenuGroupItem.propTypes = propTypes;
MenuGroupItem.defaultProps = defaultProps;
