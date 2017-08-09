import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customThickness }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    colourDefault,
    thickness,
  } = theme.reactackle.components.progress.circle.mainLine;

  return css`
    stroke: ${colourDefault};
    stroke-width: ${getValueString(customThickness || thickness)};
  `;
};

export const PrimaryLineStyled = styled.circle`
  fill: none;
  stroke-dasharray: 0 158;
  transform-origin: center;
  ${style}
`;

PrimaryLineStyled.displayName = 'PrimaryLineStyled';
