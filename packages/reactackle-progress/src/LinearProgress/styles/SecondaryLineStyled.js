import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider }) => {
  const componentTheme =
    extractThemeOrDefault(themeFromProvider).reactackle.components.progress;

  return css`
    height: ${getValueString(componentTheme.linear.thickness)};
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
