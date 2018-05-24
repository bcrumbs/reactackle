import styled from 'styled-components';
import React from 'react';

const Menu = styled.nav`
  padding: 0;
  margin: 0;
`;

const MenuDiv = Menu.withComponent('div');

// eslint-disable-next-line react/prop-types
export const MenuStyled = ({ wrapWithDiv, ...props }) => wrapWithDiv
  ? <MenuDiv {...props} />
  : <Menu {...props} />;

MenuStyled.displayName = 'MenuStyled';
