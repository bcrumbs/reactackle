'use strict';

import styled from 'styled-components';

import {
  bodyFontColor,
  fontSizeTitle,
  fontWeightNormal,
  baseModule,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const ArticleLeadStyled = styled.div`
  margin: 0;
  padding: 0;
  font-size: ${fontSizeTitle}px;
  font-weight: ${fontWeightNormal};
  color: ${bodyFontColor};
  margin-top: ${baseModule(3)}px;
`;

ArticleLeadStyled.displayName = 'ArticleLeadStyled';
