import { keyframes, css } from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const animationSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`;

// Props
export const spin = ({ spin }) =>
  spin &&
  `
  animation: ${animationSpin} 2s infinite linear;  
`;

export const pulse = ({ pulse }) =>
  pulse &&
  `
  animation: ${animationSpin} 1s infinite steps(8);
`;

export const border = ({
  border,
  rounded,
  colorScheme,
  userColor,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const colorLight = theme.reactackle.components.icon.color.light;
  const colorDark = theme.reactackle.components.icon.color.dark;
  const borderWidth = theme.reactackle.components.icon.borderWidth;
  const borderRadius = theme.reactackle.components.icon.borderRadius;

  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    border &&
    css`
      border: solid ${borderWidth}px ${userColor || color};
      ${!rounded &&
        `border-radius: 
          ${typeof borderRadius === 'string'
            ? borderRadius
            : `${borderRadius}px`}
        `}
    `
  );
};

export const rounded = ({ rounded }) =>
  rounded &&
  `
    border-radius: 50%;
`;

export const transform = ({ flip, rotate }) => {
  let iconFlip = '',
    iconRotate = '';

  if (flip === 'horizontal') iconFlip = 'scale(-1, 1);';
  else if (flip === 'vertical') iconFlip = 'scale(1, -1);';

  if (rotate) iconRotate = `rotate(${rotate}deg)`;

  return iconFlip || iconRotate ? `transform: ${iconFlip} ${iconRotate}` : '';
};
