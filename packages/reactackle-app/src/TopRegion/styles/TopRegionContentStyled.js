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

export const TopRegionContentStyled = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  ${base};
`;

TopRegionContentStyled.displayName = 'TopRegionContentStyled';
