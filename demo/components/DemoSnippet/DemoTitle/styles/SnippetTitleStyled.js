'use strict';

import styled from 'styled-components';

import {
  fontSizeTitle,
  fontWeightSemibold,
  bodyFontColor,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const SnippetTitleStyled = styled.div`
  line-height: 1.5;
  font-size: ${fontSizeTitle}px;
  font-weight: ${fontWeightSemibold};
  color: ${bodyFontColor};
`;

SnippetTitleStyled.displayName = 'SnippetTitleStyled';
