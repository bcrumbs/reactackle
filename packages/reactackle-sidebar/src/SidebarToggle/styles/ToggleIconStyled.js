'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
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
const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    height,
    imgSize,
  } = theme.reactackle.components.sidebar.toggleButton.icon;

  return `
    height: ${getValueString(height)};
    max-height: ${getValueString(height)};
    line-height: ${getValueString(height)};
    font-size: ${getValueString(imgSize)};
  `;
};

const state = ({ theme: themeFromProvider, expanded, autoCollapsing }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconPath = theme.reactackle.components.sidebar.toggleButton.icon.style,
    { widthChangingBreakpoint } = theme.reactackle.components.sidebar.sidebar;

  const collapsedStyles = `
    width: ${getValueString(iconPath.collapsed.width)};
    margin-left: ${getValueString(iconPath.collapsed.marginLeft)};
    color: ${iconPath.collapsed.color};
    opacity: ${iconPath.collapsed.opacity};
    transform: rotate(180deg);
    
    &:hover {
      color: ${iconPath.collapsed.hover.color};
      opacity: ${iconPath.collapsed.hover.opacity};
    }
    
    &:focus {
      color: ${iconPath.collapsed.focus.color};
      opacity: ${iconPath.collapsed.focus.opacity};
    }
  `;

  const expandedStyles = `
    width: ${getValueString(iconPath.expanded.width)};
    margin-left: ${getValueString(iconPath.expanded.marginLeft)};
    color: ${iconPath.expanded.color};
    opacity: ${iconPath.expanded.opacity};
    
    &:hover {
      color: ${iconPath.expanded.hover.color};
      opacity: ${iconPath.expanded.hover.opacity};
    }
    
    &:focus {
      color: ${iconPath.expanded.focus.color};
      opacity: ${iconPath.expanded.focus.opacity};
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
export const ToggleIconStyled = styled.div`
  display: flex;
  position: relative;
  flex-shrink: 0;
  justify-content: center;
  ${base} ${state} ${transition('transform, width, margin')};
`;

ToggleIconStyled.propTypes = propTypes;
ToggleIconStyled.defaultProps = defaultProps;
ToggleIconStyled.displayName = 'ToggleIconStyled';
