'use strict';

import styled from 'styled-components';
import { demoSnippetConstants } from './constants';

/** STYLES */
export const DemoSnippetStyled = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  
  & + & {
    margin-top: ${demoSnippetConstants.similarItemsSpacing}px;
  }
`;

DemoSnippetStyled.displayName = 'DemoSnippetStyled';
