'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  getValueString,
  extractThemeOrDefault,
  transition,
  media,
} from 'reactackle-core';

const propTypes = {
  haveToggleButton: PropTypes.bool,
  expanded: PropTypes.bool,
  attachToRight: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  haveToggleButton: false,
  expanded: false,
  attachToRight: false,
  autoCollapsing: false,
};

/** Prop Receivers */
const width = ({ theme: themeFromProvider, autoCollapsing, expanded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const componentPath = theme.reactackle.components.sidebar.sidebar,
    { widthChangingBreakpoint, zIndex } = componentPath,
    collapsedWidthValue = getValueString(componentPath.state.collapsed.width),
    expandedWidthValue = getValueString(componentPath.state.expanded.width);

  if (autoCollapsing) {
    return css`
      ${expanded
        ? `
          width: ${expandedWidthValue};
          z-index: ${zIndex};
        `
        : `width: ${collapsedWidthValue};`}
      ${media(widthChangingBreakpoint)`
        ${!expanded
          ? `width: ${collapsedWidthValue};`
          : `width: ${expandedWidthValue};`}
      `}
    `;
  } else {
    return css`
      ${expanded
        ? `width: ${expandedWidthValue};`
        : `width: ${collapsedWidthValue};`}
    `;
  }
};

const style = ({ theme: themeFromProvider, attachToRight }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    minHeight,
    zIndex,
    backgroundColor,
    fontColor,
    fontSize,
    lineHeight,
  } = theme.reactackle.components.sidebar.sidebar;

  return css`
    background-color: ${backgroundColor};
    min-height: ${getValueString(minHeight)};
    color: ${fontColor};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    z-index: ${zIndex};
    ${attachToRight
      ? `
        left: auto;
        right: 0;
      `
      : 'left: 0;'}
  `;
};

const toggleButton = ({ haveToggleButton, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { height } = theme.reactackle.components.sidebar.toggleButton;

  return haveToggleButton
    ? css`
      padding-top: ${getValueString(height)};
    `
    : '';
};

/** Styles */
export const SidebarBoxStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  ${width};
  ${style};
  ${toggleButton};
  ${transition('width')};
`;

SidebarBoxStyled.propTypes = propTypes;
SidebarBoxStyled.defaultProps = defaultProps;
SidebarBoxStyled.displayName = 'SidebarBoxStyled';
