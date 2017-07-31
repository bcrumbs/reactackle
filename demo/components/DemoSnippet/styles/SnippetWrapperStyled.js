'use strict';

import styled from 'styled-components';
import { demoSnippetConstants } from './constants';
import { baseModule } from '../../../theme/styleHelpers';

export const SnippetWrapperStyled = styled.div`
  background-color: ${demoSnippetConstants.backgroundColor};
  padding: 0 ${baseModule(1)}px;
`;

SnippetWrapperStyled.displayName = 'SnippetWrapperStyled';
