'use strict';

import styled from 'styled-components';
import { demoSnippetConstants } from '../../styles/constants';

import {
  fontSizeBody,
  bodyFontColor,
} from '../../../../theme/styleHelpers';

export const DemoPreviewStyled = styled.div`
  width: 100%;
  line-height: 1.5;
  padding: 0;
  background-color: ${demoSnippetConstants.backgroundColor};
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColor};
`;

DemoPreviewStyled.displayName = 'DemoPreviewStyled';
