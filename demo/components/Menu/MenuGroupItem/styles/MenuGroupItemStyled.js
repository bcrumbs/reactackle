'use strict';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { transition } from 'reactackle';
import { MenuConstants } from '../../styles/constants';

import {
  baseModule,
  fontSizeBody,
  bodyFontColorAlt,
} from '../../../../theme/styleHelpers';

export const MenuGroupItemStyled = styled(Link)`
  width: 100%;
  margin: 0;
  user-select: none;
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColorAlt};
  padding: ${baseModule(1)}px ${MenuConstants.base.paddingX}px;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${bodyFontColorAlt};
    outline: none;
    box-shadow: none;
  }

  ${transition('background-color')}
`;

MenuGroupItemStyled.displayName = 'MenuGroupItemStyled';
