'use strict';

import styled from 'styled-components';

import {
  baseModule,
  fontSizeBody,
  bodyFontColor,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const DemoAlertItemStyled = styled.div`
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColor};
  
  & + & {
    margin-top: ${baseModule(0.5)}px;
  }
`;

DemoAlertItemStyled.displayName = 'DemoAlertItemStyled';
