'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { width, height, imgSize } = theme.reactackle.components.tabs.icon;

  return `
    width: ${getValueString(width)};
    height: ${getValueString(height)};
    line-height: ${height}px;
    font-size: ${getValueString(imgSize)};
  `;
};

const style = ({ theme: themeFromProvider, colorScheme, selected }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.tabs.icon.style[colorScheme];

  return !selected
    ? `
      color: ${source.fontColor};
      
      &:hover {
        color: ${source.hover.fontColor};
      }
      
      &:focus {
        color: ${source.focus.fontColor};
      }`
    : `      
      &,
      &:hover,
      &:focus {
        color: ${source.selected.fontColor};
      }`;
};

export const TabIconStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  ${size} ${style};
`;

TabIconStyled.propTypes = propTypes;
TabIconStyled.displayName = 'TabIconStyled';
