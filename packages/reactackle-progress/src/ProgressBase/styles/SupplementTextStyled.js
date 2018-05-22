import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, progressType }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    fontWeight,
  } = theme.reactackle.components.progress[progressType].supplementText;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
  `;
};

export const SupplementTextStyled = styled.div`
  ${style}
`;

SupplementTextStyled.displayName = 'SupplementTextStyled';
