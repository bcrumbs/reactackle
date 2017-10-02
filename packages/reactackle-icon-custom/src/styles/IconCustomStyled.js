import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

import { iconCustomSizeMixin } from '../iconCustomSizeMixin';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['custom', 'small', 'normal', 'large', 'xlarge']),
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /** Set exact icon's color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
};

const defaultProps = {
  src: '',
  border: false,
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
  const path = theme.reactackle.components.iconCustom;
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
    : getValueString(theme.reactackle.components.iconCustom.borderRadius);

  return `
    border-radius: ${borderRadius};
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

const iconSize = ({ theme: themeFromProvider, sizeKey, border, rounded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.iconCustom;

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
  } else {
    imgSize = 'inherit';
  }

  return css`
    ${iconCustomSizeMixin(
      getValueString(height),
      getValueString(imgSize),
      getValueString(width),
    )}
  `;
};

const iconBg = ({ bgColor }) => bgColor && `background-color: ${bgColor}`;

const IconImg = ({ src }) => `        
  background-image: url('${src}');
`;

// STYLES
export const IconCustomStyled = styled.div`
  text-align: center;
  flex-shrink: 0;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  ${transition('background-color, color, opacity')};
  ${iconSize};
  ${iconBg};
  ${border};
  ${borderRadius};
  ${transform};
  ${IconImg};
`;

IconCustomStyled.propTypes = propTypes;
IconCustomStyled.defaultProps = defaultProps;
IconCustomStyled.displayName = 'IconCustomStyled';
