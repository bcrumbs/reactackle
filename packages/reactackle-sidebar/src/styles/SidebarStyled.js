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
      width: ${collapsedWidthValue};
      z-index: ${zIndex};
      ${media(widthChangingBreakpoint)`
        ${!expanded
          ? `width: ${collapsedWidthValue};`
          : `width: ${expandedWidthValue};`}
      `}
    `;
  } else {
    return css`
      ${!expanded
        ? `width: ${collapsedWidthValue};`
        : `width: ${expandedWidthValue};`}
    `;
  }
};

const attachToRight = ({ attachToRight }) => (attachToRight ? 'order: 2;' : '');

const toggleButtonBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const togglePath = theme.reactackle.components.sidebar.toggleButton,
    { height } = togglePath;

  return css`
    &::before {
      content: "";
      height: ${height}px;
      position: fixed;
      top: 0;
      left: 0;
      ${transition('width, right')};
    }
  `;
};

const toggleButtonState = ({
  theme: themeFromProvider,
  expanded,
  autoCollapsing,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const sidebarPath = theme.reactackle.components.sidebar.sidebar,
    { widthChangingBreakpoint } = sidebarPath,
    collapsedWidthValue = getValueString(sidebarPath.state.collapsed.width),
    expandedWidthValue = getValueString(sidebarPath.state.expanded.width);

  const collapsedStyles = `
    width: ${collapsedWidthValue};
  `;

  const expandedStyles = `
    width: ${expandedWidthValue};
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
      ${expanded ? expandedStyles : collapsedStyles}
    `;
  }
};

const toggleButton = ({ haveToggleButton }) =>
  haveToggleButton
    ? css`
    ${toggleButtonBase}
    ${toggleButtonState}
  `
    : '';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

/** Styles */
export const SidebarStyled = styled.aside`
  display: block;
  position: relative;
  flex-shrink: 0;
  z-index: 2;
  ${base};
  ${width};
  ${attachToRight};
  ${transition('width')};
  ${toggleButton};
`;

SidebarStyled.propTypes = propTypes;
SidebarStyled.defaultProps = defaultProps;
SidebarStyled.displayName = 'SidebarStyled';
