'use strict';

import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    font-family: ${fontFamily};
  `;
};

export const TopRegionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  ${base};
`;

TopRegionStyled.displayName = 'TopRegionStyled';
