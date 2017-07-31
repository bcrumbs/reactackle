'use strict';

import styled from 'styled-components';

import {
  fontSizeSmall,
  fontColorMedium,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const RequiredStyled = styled.span`
  font-size: ${fontSizeSmall}px;
  color: ${fontColorMedium};
`;

RequiredStyled.displayName = 'RequiredStyled';
