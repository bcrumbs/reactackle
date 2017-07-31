'use strict';

import styled from 'styled-components';

import {
  paletteBlueGrey25,
  colorBorder,
  fontSizeBody,
  bodyFontColor,
  fontFamilyMonospace,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const DemoCodeStyled = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0;
  background-color: ${paletteBlueGrey25};
  border-top: 1px solid ${colorBorder};
  font-size: ${fontSizeBody}px;
  color: ${bodyFontColor};
  font-family: ${fontFamilyMonospace};

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

DemoCodeStyled.displayName = 'DemoCodeStyled';
