'use strict';

import styled from 'styled-components';

import {
  baseModule,
  fontSizeBody,
  bodyFontColor,
  colorWhite,
} from '../../../theme/styleHelpers';

/** STYLES */
export const ArticleStyled = styled.div`
  max-width: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColor};
  padding: ${baseModule(4)}px ${baseModule(4)}px;
  background-color: ${colorWhite};
`;

ArticleStyled.displayName = 'ArticleStyled';
