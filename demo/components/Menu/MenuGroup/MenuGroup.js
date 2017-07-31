'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TitleStyled } from './styles/TitleStyled';
import { MenuGroupStyled } from './styles/MenuGroupStyled';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: '',
};

export const MenuGroup = props => {
  const groupTitle = props.title
    ? <TitleStyled>{props.title}</TitleStyled>
    : null;

  return (
    <MenuGroupStyled hasTitle={props.title}>
      {groupTitle}
      {props.children}
    </MenuGroupStyled>
  );
};

MenuGroup.propTypes = propTypes;
MenuGroup.defaultProps = defaultProps;
MenuGroup.displayName = 'MenuGroup';
