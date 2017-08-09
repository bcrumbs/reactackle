import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, bg }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    thickness,
    colourDefault,
    opacity,
  } = theme.reactackle.components.progress.linear.secondaryLine;

  return css`
    height: ${getValueString(thickness)};
    opacity: ${opacity};
    background: ${bg || colourDefault};
  `;
};

export const SecondaryLineStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
  ${style}
`;

SecondaryLineStyled.displayName = 'SecondaryLineStyled';
