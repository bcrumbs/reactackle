import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customThickness }) => {
  const componentTheme =
    extractThemeOrDefault(themeFromProvider).reactackle.components.progress;
  
  const { strokeSize } = componentTheme.circle.strokeSize;

  return css`
    stroke-width: ${getValueString(customThickness || strokeSize)};
  `;
};

export const SecondaryLineStyled = styled.circle`
  fill: none;
  stroke-dasharray: 0 158;
  transform-origin: center;
  ${style}
`;

SecondaryLineStyled.displayName = 'SecondaryLineStyled';
