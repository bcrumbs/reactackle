'use strict';

import styled from 'styled-components';
import { demoSnippetConstants } from './constants';
import { colorBorder } from '../../../theme/styleHelpers';

/** STYLES */
export const DemoSnippetStyled = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  
  & + & {
    margin-top: ${demoSnippetConstants.similarItemsSpacing}px;
    padding-top: ${demoSnippetConstants.similarItemsSpacing}px;
    border-top: 1px dotted ${colorBorder};
  }
`;

DemoSnippetStyled.displayName = 'DemoSnippetStyled';
