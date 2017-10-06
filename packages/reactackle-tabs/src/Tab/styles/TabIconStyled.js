import styled, { css } from 'styled-components';
import { iconStyleMixin, iconSvgSizeMixin, iconCustomSizeMixin } from 'reactackle-icons';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider, type }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const sizeMixin = type === 'svg' ? iconSvgSizeMixin : iconCustomSizeMixin;
  const { width, height, imgSize } = theme.reactackle.components.tabs.icon;

  return css`    
    ${sizeMixin(
      getValueString(height || width),
      getValueString(imgSize || height),
      getValueString(width || height),
    )}
  `;
};

const style = ({ theme: themeFromProvider, selected, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.tabs.icon.style[colorScheme];

  return !selected
    ? css`
      ${iconStyleMixin(source.color)};
      
      &:hover {
        color: ${source.hover.color};
      }
      
      &:focus {
        color: ${source.focus.color};
      }
    `
    : css`      
      &,
      &:hover,
      &:focus {
        ${iconStyleMixin(source.selected.color)};        
      }
    `;
};

export const TabIconStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  ${size}
  ${style};
`;

TabIconStyled.displayName = 'TabIconStyled';
