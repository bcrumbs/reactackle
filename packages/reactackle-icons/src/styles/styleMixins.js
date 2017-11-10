import { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
} from 'reactackle-core';

export const border = ({
  border,
  borderWidth,
  colorScheme,
  customColor,
  sizeKey,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.icon;
  const customWidth = borderWidth > 0 && borderWidth;
  const themeWidth = sizeKey !== 'custom' ? path.size[sizeKey].borderWidth : 1;
  const bWidth = customWidth || themeWidth;

  const color = path.color[colorScheme];

  return border && css`
    border: solid ${bWidth}px ${customColor || color};
  `;
};

export const borderRadius = ({ rounded, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const borderRadius = rounded
    ? '50%'
    : getValueString(theme.reactackle.components.icon.borderRadius);

  return `
    border-radius: ${borderRadius};
  `;
};

export const sizeProps = ({
  theme: themeFromProvider,
  sizeKey,
  border,
  rounded,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.icon;

  const width = sizeKey !== 'custom'
    ? path.size[sizeKey].width || path.size[sizeKey].height
    : 'inherit';

  const height = sizeKey !== 'custom'
    ? path.size[sizeKey].height || path.size[sizeKey].width
    : 'inherit';

  let imgSize = null;
  if (sizeKey !== 'custom') {
    if (border)
      if (rounded)
        imgSize =
          path.size[sizeKey].roundedImgSize
          || path.size[sizeKey].borderedImgSize
          || path.size[sizeKey].imgSize
          || height;
      else
        imgSize =
          path.size[sizeKey].borderedImgSize
          || path.size[sizeKey].imgSize
          || height;
    else
      imgSize = path.size[sizeKey].imgSize || height;
  }

  return css`
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgSize),
      getValueString(width),
    )}
  `;
};

export const backgroundProps = ({ backgroundColor }) => backgroundColor && `
  background-color: ${backgroundColor};
`;

export const transform = ({ flip, rotate }) => {
  let iconFlip = '',
    iconRotate = '';

  if (flip === 'horizontal') iconFlip = 'scale(-1, 1);';
  else if (flip === 'vertical') iconFlip = 'scale(1, -1);';

  if (rotate) iconRotate = `rotate(${rotate}deg)`;

  return iconFlip || iconRotate ? `transform: ${iconFlip} ${iconRotate};` : '';
};
