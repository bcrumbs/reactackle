'use strict';

import styled from 'styled-components';

import {
  baseModule,
  contentWidth,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const ArticleModuleStyled = styled.div`
  margin: 0 auto;
  max-width: ${contentWidth}px;
  padding: ${baseModule(4)}px ${baseModule(4)}px;
  
  & + & {
    padding-top: 0;
  }
`;

ArticleModuleStyled.displayName = 'ArticleModuleStyled';
