import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    paddingY,
    paddingX,
  } = theme.reactackle.components.alertsArea.item;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)}; 
  `;
};

export const ContentStyled = styled.div`
  flex-grow: 1;
  user-select: none;
  cursor: default;
  color: currentColor;
  ${style}
`;
