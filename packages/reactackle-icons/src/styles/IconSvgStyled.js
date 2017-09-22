import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const defaultProps = {
  backgroundColor: '',
  border: false,
  color: '',
  colorScheme: 'dark',
  flip: 'none',
  rotate: 0,
  rounded: false,
  size: 'normal',
};

const propTypes = {
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's color scheme */
  colorScheme: PropTypes.string,
  /** Set icon's fill color */
  color: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.string,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon's size */
  size: PropTypes.string,
  /** Set icon's height */
  height: PropTypes.number,
  /** Set icon's width */
  width: PropTypes.number,
};

const heightProps = ({ theme: themeFromProvider, height, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.iconSvg;
  const heightValue = height || iconTheme.size[size].height;

  return `height: ${heightValue}px`;
};

const widthProps = ({ theme: themeFromProvider, width, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.iconSvg;
  const widthValue = width || iconTheme.size[size].width;

  return `width: ${widthValue}px`;
};

const backgroundProps = ({ backgroundColor }) => `
  background-color: ${backgroundColor};
`;

const colorProps = ({ theme: themeFromProvider, color, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.iconSvg;
  const colorSource = color || iconTheme.color[colorScheme];

  return `
    fill: ${colorSource}
  `;
};

const borderProps = ({
  theme: themeFromProvider,
  color,
  colorScheme,
  border,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.iconSvg;
  const borderWidth = iconTheme.borderWidth;
  const borderRadiusUnit = iconTheme.borderRadiusUnit;
  const colorProps = color || iconTheme.color[colorScheme];
  
  return border && `
    border: solid ${borderWidth}${borderRadiusUnit} ${colorProps};
  `;
};

const borderRadiusProps = ({ rounded }) => rounded && `border-radius: 50%`;

const transformProps = ({ flip, rotate }) => {
  if (flip === 'horizontal') {
    return `transform: scale(-1, 1) rotate(${rotate}deg)`;
  } else if (flip === 'vertical') {
    return `transform: scale(1, -1) rotate(${rotate}deg)`;
  } else {
    return `transform: rotate(${rotate}deg)`;
  }
};

const IconSvgStyled = styled.svg`
  box-sizing: border-box;
  ${transition('background-color, color, opacity')};
  
  ${heightProps};
  ${widthProps};
  ${backgroundProps};
  ${colorProps};
  ${borderRadiusProps};
  ${borderProps};
  ${transformProps}  
`;

IconSvgStyled.propTypes = propTypes;
IconSvgStyled.defaultProps = defaultProps;
IconSvgStyled.displayName = 'IconStyled';

export default IconSvgStyled;
