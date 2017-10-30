import styled from 'styled-components';
import {
  extractThemeOrDefault,
  transition,
} from 'reactackle-core';

import { iconsPropType } from '../../iconsPropType';

import {
  transform,
  border,
  borderRadius,
  backgroundProps,
  sizeProps,
} from '../../styles/styleMixins';

const propTypes = {
  ...iconsPropType,
};

const defaultProps = {
  border: false,
  borderWidth: 0,
  rounded: false,
  size: 'normal',
  colorScheme: 'default',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

const colorProps = ({ theme: themeFromProvider, customColor, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconTheme = theme.reactackle.components.icon;
  const colorSource = customColor || iconTheme.color[colorScheme];

  return `
    svg { fill: ${colorSource}; }
  `;
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
  
  ${sizeProps};
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
