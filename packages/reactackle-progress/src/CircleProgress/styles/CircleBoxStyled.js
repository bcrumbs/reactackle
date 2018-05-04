import styled, { css, keyframes } from 'styled-components';
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

const rotateAnimation = ({ theme: themeFromProvider, indeterminate }) => {
  const animationConfig =
    extractThemeOrDefault(themeFromProvider).reactackle.components
      .progress.circle.animation.svg;

  const {
    transitionDuration: duration,
  } = animationConfig;

  const animation = keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;

  return !indeterminate ? null : css`
    animation: ${duration}ms ${animation} linear infinite;
  `;
};

export const CircleBoxStyled = styled.svg`
  margin: auto;
  border-radius: 50%;
  display: block;
  max-width: 100%;
  max-height: 100%;
  ${rotateAnimation}
  ${style}
`;

CircleBoxStyled.displayName = 'CircleBoxStyled';
