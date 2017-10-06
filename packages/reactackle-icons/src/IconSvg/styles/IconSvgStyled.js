import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

import { iconSvgSizeMixin } from '../iconSvgSizeMixin';

const propTypes = {
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's border width */
  borderWidth: PropTypes.number,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['custom', 'small', 'normal', 'large', 'xlarge']),
  /** Set icon's color scheme */
  colorScheme: PropTypes.string,
  /** Set icon's fill color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.string,
  // ** Rotate icon by some degree */
  rotate: PropTypes.number,
};

const defaultProps = {
  border: false,
  borderWidth: 0,
  rounded: false,
  size: 'normal',
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

export const border = ({
  border,
  borderWidth,
  colorScheme,
  customColor,
  sizeKey,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.iconSvg;
  const colorLight = path.color.light;
  const colorDark = path.color.dark;
  const customWidth = borderWidth > 0 && borderWidth;
  const themeWidth = sizeKey !== 'custom' ? path.size[sizeKey].borderWidth : 1;
  const bWidth = customWidth || themeWidth;

  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return border && css`
    border: solid ${bWidth}px ${customColor || color};
  `;
};

export const borderRadius = ({ rounded, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const borderRadius = rounded
    ? '50%'
    : getValueString(theme.reactackle.components.iconSvg.borderRadius);

  return `
    border-radius: ${borderRadius};
  `;
};

const iconSize = ({ theme: themeFromProvider, sizeKey, border, rounded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.iconSvg;

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
    ${iconSvgSizeMixin(
      getValueString(height),
      getValueString(imgSize),
      getValueString(width),
    )}
  `;
};

const backgroundProps = ({ backgroundColor }) => backgroundColor && `
  background-color: ${backgroundColor};
`;

const colorProps = ({ theme: themeFromProvider, customColor, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.iconSvg;
  const colorSource = customColor || iconTheme.color[colorScheme];

  return `
    svg { fill: ${colorSource}; }
  `;
};

export const transform = ({ flip, rotate }) => {
  let iconFlip = '',
    iconRotate = '';

  if (flip === 'horizontal') iconFlip = 'scale(-1, 1);';
  else if (flip === 'vertical') iconFlip = 'scale(1, -1);';

  if (rotate) iconRotate = `rotate(${rotate}deg)`;

  return iconFlip || iconRotate ? `transform: ${iconFlip} ${iconRotate};` : '';
};

const IconSvgStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  ${transition('background-color, color, opacity')};  
  
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  
  ${iconSize};
  ${backgroundProps};
  ${colorProps};
  ${border};
  ${borderRadius};
  ${transform}  
`;

IconSvgStyled.propTypes = propTypes;
IconSvgStyled.defaultProps = defaultProps;
IconSvgStyled.displayName = 'IconStyled';

export default IconSvgStyled;
