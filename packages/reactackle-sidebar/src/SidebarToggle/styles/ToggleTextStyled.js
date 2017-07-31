'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, transition, media } from 'reactackle-core';

const propTypes = {
  expanded: PropTypes.bool,
  autoCollapsing: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  expanded: false,
  autoCollapsing: false,
};

const collapsing = ({ theme: themeFromProvider, expanded, autoCollapsing }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const sidebarPath = theme.reactackle.components.sidebar.sidebar,
    { widthChangingBreakpoint } = sidebarPath;

  const collapsedStyles = `
    position: fixed;
    opacity: 0;
    pointer-events: none;
  `;

  const expandedStyles = `
    position: relative;
    opacity: 1;
    pointer-events: initial;
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
export const ToggleTextStyled = styled.div`
  flex-grow: 1;
  word-break: break-word;
  ${collapsing} ${transition('opacity')};
`;

ToggleTextStyled.propTypes = propTypes;
ToggleTextStyled.defaultProps = defaultProps;
ToggleTextStyled.displayName = 'ToggleTextStyled';
