import React from 'react';
import PropTypes from 'prop-types';
import { MenuListStyled } from './styles/MenuListStyled';
import { TitleStyled } from './styles/TitleStyled';

const propTypes = {
  title: PropTypes.string,
  bordered: PropTypes.bool,
  inline: PropTypes.bool,
};
const defaultProps = {
  title: '',
  bordered: false,
  inline: false,
};
export default function MenuList({
  children,
  title,
  bordered,
  inline,
}) {
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

MenuList.propTypes = propTypes;
MenuList.defaultProps = defaultProps;
MenuList.displayName = 'MenuList';
