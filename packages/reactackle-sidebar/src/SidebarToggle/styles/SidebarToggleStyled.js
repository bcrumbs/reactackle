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
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  expanded: false,
  autoCollapsing: false,
};

/** Prop Receivers */
const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { backgroundColor } = theme.reactackle.components.sidebar.sidebar;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    background-color: ${backgroundColor};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    height,
    fontSize,
    lineHeight,
    fontWeight,
    textTransform,
    zIndex,
    paddingRight,
  } = theme.reactackle.components.sidebar.toggleButton;

  return `
    z-index: ${zIndex};
    margin-top: -${getValueString(height)};
    height: ${getValueString(height)};
    font-size: ${getValueString(fontSize)};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    padding-right: ${getValueString(paddingRight)};
  `;
};

const state = ({ theme: themeFromProvider, expanded, autoCollapsing }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const sidebarPath = theme.reactackle.components.sidebar.sidebar,
    togglePath = theme.reactackle.components.sidebar.toggleButton.style,
    { widthChangingBreakpoint } = sidebarPath,
    expandedWidthValue = getValueString(sidebarPath.state.expanded.width);

  const collapsedStyles = `
    width: ${expandedWidthValue};
    background-color: ${togglePath.collapsed.backgroundColor};
    color: ${togglePath.collapsed.fontColor};
    
    &:hover {
      background-color: ${togglePath.collapsed.hover.backgroundColor};
      color: ${togglePath.collapsed.hover.fontColor};
    }
    
    &:focus {
      background-color: ${togglePath.collapsed.focus.backgroundColor};
      color: ${togglePath.collapsed.focus.fontColor};
    }
  `;

  const expandedStyles = `
    width: ${expandedWidthValue};
    background-color: ${togglePath.expanded.backgroundColor};
    color: ${togglePath.expanded.fontColor};
    
    &:hover {
      background-color: ${togglePath.expanded.hover.backgroundColor};
      color: ${togglePath.expanded.hover.fontColor};
    }
    
    &:focus {
      background-color: ${togglePath.expanded.focus.backgroundColor};
      color: ${togglePath.expanded.focus.fontColor};
    }
  `;

  if (autoCollapsing) {
    return css`
      ${expanded ? expandedStyles : collapsedStyles}
      
      ${media(widthChangingBreakpoint)`
        ${!expanded ? collapsedStyles : expandedStyles}
      `}
    `;
  } else {
    return css`
      ${!expanded ? collapsedStyles : expandedStyles}
    `;
  }
};

/** Styles */
export const SidebarToggleStyled = styled.button`
  position: absolute;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 0;
  z-index: 1;

  &,
  &:hover,
  &:focus {
    border: 0;
    outline: none;
    box-shadow: none;
  }

  ${base} ${style} ${state} ${transition('width, background-color')};
`;

SidebarToggleStyled.propTypes = propTypes;
SidebarToggleStyled.defaultProps = defaultProps;
SidebarToggleStyled.displayName = 'SidebarToggleStyled';
