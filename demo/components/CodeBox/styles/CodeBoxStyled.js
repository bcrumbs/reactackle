'use strict';

import styled from 'styled-components';

import {
  baseModule,
  paletteBlueGrey25,
  radiusDefault,
  fontSizeBody,
  bodyFontColor,
  fontFamilyMonospace,
} from '../../../theme/styleHelpers';

/** STYLES */
export const CodeBoxStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: ${baseModule(3)}px ${baseModule(4)}px;
  background-color: ${paletteBlueGrey25};
  border-radius: ${radiusDefault}px;
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColor};
  font-family: ${fontFamilyMonospace};
  margin-top: ${baseModule(2)}px;

  pre,
  code {
    margin: 0;
    padding: 0;
    background-color: transparent !important;
    white-space: pre !important;
  }
  
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: transparent;
  }
`;

CodeBoxStyled.displayName = 'CodeBoxStyled';
