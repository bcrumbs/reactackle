import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const fontStyle = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.breadcrumbs.item.subtitle;

  const {
    marginTop,
    fontSize,
    lineHeight,
    fontWeight,
    textTransform,
  } = path;

  return css`
    margin-top: ${getValueString(marginTop)};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    color: ${path.colorScheme[colorScheme].color};
  `;
};

export const SubtitleStyled = styled.div`
  ${fontStyle}
`;

