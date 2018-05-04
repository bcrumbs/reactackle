import styled, { css, keyframes } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customThickness }) => {
  const componentTheme =
    extractThemeOrDefault(themeFromProvider).reactackle.components.progress;
  
  const { strokeSize } = componentTheme.circle;

  return css`
    stroke-width: ${getValueString(customThickness || strokeSize)};
  `;
};

const strokeAnimation = ({
  theme: themeFromProvider, circleLength, indeterminate,
}) => {
  const animationConfig =
    extractThemeOrDefault(themeFromProvider).reactackle
      .components.progress.circle.animation.circle;


  const animation = keyframes`
    0% {
      stroke-dasharray: ${0.02 * circleLength} ${circleLength};
      stroke-dashoffset: ${0 * -circleLength};
    }
    50% {
      stroke-dasharray: ${0.75 * circleLength} ${circleLength};
      stroke-dashoffset: ${0 * -circleLength};
    }
    100% {
      stroke-dasharray: ${0.75 * circleLength} ${circleLength};
      stroke-dashoffset: ${1 * -circleLength};
    }
  `;

  const {
    transitionDuration: duration,
  } = animationConfig;

  return !indeterminate ? null : css`
    animation: ${duration}ms ${animation} ease-in-out infinite;
  `;
};

export const PrimaryLineStyled = styled.circle`
  fill: none;
  stroke-dasharray: 0 158;
  transform-origin: center;
  ${strokeAnimation}
  ${style}
`;

PrimaryLineStyled.displayName = 'PrimaryLineStyled';
