import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customDiameter }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    diameter,
  } = theme.reactackle.components.progress.circle;

  return css`
    width: ${getValueString(customDiameter || diameter)};
    height: ${getValueString(customDiameter || diameter)};
  `;
};

export const CircleBoxStyled = styled.svg`
  margin: auto;
  transform: rotate(-90deg);
  border-radius: 50%;
  display: block;
  max-width: 100%;
  max-height: 100%;
  ${style}
`;

CircleBoxStyled.displayName = 'CircleBoxStyled';
