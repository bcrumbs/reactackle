import React from 'react';
import PropTypes from 'prop-types';
import { MenuListStyled } from './styles/MenuListStyled';
import { TitleStyled } from './styles/TitleStyled';

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
