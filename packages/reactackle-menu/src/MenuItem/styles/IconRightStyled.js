import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
  transition,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider, iconOnly }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
    marginLeft,
    marginRight,
  } = theme.reactackle.components.menu.item.iconRight;

  const mLeft = iconOnly ? 0 : getValueString(marginLeft);
  const mRight = iconOnly ? 0 : getValueString(marginRight);

  return css`
    margin: 0 ${mLeft} 0 ${mRight};
    
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight),
    )}
  `;
};

const color = ({ theme: themeFromProvider, colorScheme, active }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path =
    theme.reactackle.components.menu.item.iconRight.colorScheme[colorScheme];

  const defaultColor = path.default.color;
  const defaultOpacity = path.default.opacity;

  return active
    ? css`
      color: ${path.active.color || defaultColor};
      opacity: ${path.active.opacity || defaultOpacity};
    `
    : `
      color: ${defaultColor};
      opacity: ${defaultOpacity};
    `;
};

export const IconRightStyled = styled.div`
  flex-shrink: 0;
  ${size}
  ${color}
  ${transition('color, width, height, opacity, transform')}
`;

IconRightStyled.displayName = 'IconRightStyled';
