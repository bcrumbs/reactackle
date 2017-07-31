'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Define button theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  colorScheme: 'dark',
};

/** Prop Receivers */
const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    fontSize,
    lineHeight,
    textTransform,
    minHeight,
    minWidth,
    maxWidth,
  } = theme.reactackle.components.tabs.tab;

  const { thickness } = theme.reactackle.components.tabs.bar;

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    min-height: ${getValueString(minHeight)};
    min-width: ${getValueString(minWidth)};
    max-width: ${getValueString(maxWidth)};
    padding-top: ${getValueString(thickness)};
    padding-bottom: ${getValueString(thickness)};
  `;
};

const style = ({ theme: themeFromProvider, colorScheme, selected }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.tabs.tab.style[colorScheme];

  return !selected
    ? `
      color: ${source.fontColor};
      background-color: ${source.backgroundColor};
      font-weight: ${source.fontWeight};
      opacity: ${source.opacity};
      cursor: pointer;

      &:hover {
        color: ${source.hover.fontColor};
        background-color: ${source.hover.backgroundColor};
        font-weight: ${source.hover.fontWeight};
        opacity: ${source.hover.opacity};
      }

      &:focus {
        color: ${source.focus.fontColor};
        background-color: ${source.focus.backgroundColor};
        font-weight: ${source.focus.fontWeight};
        opacity: ${source.focus.opacity};
      }`
    : `
      &,
      &:hover,
      &:focus {
        color: ${source.selected.fontColor};
        background-color: ${source.selected.backgroundColor};
        font-weight: ${source.selected.fontWeight};
        opacity: ${source.selected.opacity};
        cursor: default;
      }`;
};

const bar = ({ theme: themeFromProvider, selected, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { thickness } = theme.reactackle.components.tabs.bar,
    { backgroundColor } = theme.reactackle.components.tabs.bar.style[
      colorScheme
    ];

  return (
    selected &&
    `
      background-color: ${backgroundColor};
      height: ${getValueString(thickness)};
  `
  );
};

/** Styles */
export const TabStyled = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  text-align: center;
  user-select: none;
  position: relative;
  ${base} ${style} ${transition('color, background-color, opacity')} &::after {
    display: block;
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    ${bar};
  }
`;

TabStyled.propTypes = propTypes;
TabStyled.defaultProps = defaultProps;
TabStyled.displayName = 'TabStyled';
