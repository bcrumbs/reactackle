import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';
import { spin, pulse, border, rounded, transform } from '../../styles/mixins';

const propTypes = {
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplier: PropTypes.number,
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
  /** Make icon spinning infinitely & smooth */
  spin: PropTypes.bool,
  /** Make icon spinning infinitely & with steps */
  pulse: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplier: 1,
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,
};

// PROP RECEIVERS
const iconSize = ({ sizeMultiplier, theme: themeFromProvider, sizeKey }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const width = getValueString(
    theme.reactackle.components.icon.size[sizeKey].width,
  );
  const height = getValueString(
    theme.reactackle.components.icon.size[sizeKey].height,
  );
  const imgSize = getValueString(
    theme.reactackle.components.icon.size[sizeKey].imgSize,
  );

  const widthValue =
    width !== 'inherit' ? `calc(${width} * ${sizeMultiplier})` : width;

  const heightValue =
    height !== 'inherit' ? `calc(${height} * ${sizeMultiplier})` : height;

  const innerSize =
    imgSize !== 'inherit' ? `calc(${imgSize} * ${sizeMultiplier})` : imgSize;

  return `
    width: ${widthValue};
    height: ${heightValue};
    line-height: ${heightValue} !important;
    font-size: ${innerSize} !important;
  `;
};

const iconColor = ({
  colorScheme,
  userColor,
  bgColor,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const colorDark = theme.reactackle.components.icon.color.dark;
  const colorLight = theme.reactackle.components.icon.color.light;

  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return `  
    color: ${userColor || color};
    
    ${bgColor ? `background-color: ${bgColor}` : null}
  `;
};

// STYLES
export const IconFontAwesomeStyled = styled.span`
  text-align: center;
  flex-shrink: 0;
  position: relative;

  &::before {
    height: 100%;
    width: 100%;
    line-height: inherit;
    text-align: center;
    position: absolute;
    font-size: inherit;
    color: inherit;
    top: 0;
    left: 0;
  }

  &,
  & *,
  &::after,
  &::before {
    box-sizing: border-box;
    font-family: FontAwesome !important;
  }

  ${transition('color, opacity')};
  ${iconSize};
  ${iconColor};
  ${border};
  ${rounded};
  ${transform};
  ${spin};
  ${pulse};
`;

IconFontAwesomeStyled.propTypes = propTypes;
IconFontAwesomeStyled.defaultProps = defaultProps;
IconFontAwesomeStyled.displayName = 'IconFontAwesomeStyled';
