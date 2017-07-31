'use strict';

import styled from 'styled-components';

import {
  contentWidth,
  radiusDefault,
  paletteBlueGrey25,
  fontSizeBody,
  bodyFontColor,
  fontFamilyMonospace,
} from '../../../../theme/styleHelpers';

/** STYLES */
export const DemoCodeStyled = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${contentWidth}px;
  overflow-x: auto;
  padding: 0;
  background-color: ${paletteBlueGrey25};
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
  
  @media only screen and (min-width: ${contentWidth}px) {
    border-radius: ${radiusDefault}px;  
  }
`;

DemoCodeStyled.displayName = 'DemoCodeStyled';
