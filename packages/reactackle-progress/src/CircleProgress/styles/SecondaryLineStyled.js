import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customThickness }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    colourDefault,
    thickness,
    opacity,
  } = theme.reactackle.components.progress.circle.secondaryLine;

  return css`
    stroke: ${colourDefault};
    opacity: ${opacity};
    stroke-width: ${getValueString(customThickness || thickness)};
  `;
};

export const SecondaryLineStyled = styled.circle`
  fill: none;
  stroke-dasharray: 0 158;
  transform-origin: center;
  ${style}
`;

SecondaryLineStyled.displayName = 'SecondaryLineStyled';
