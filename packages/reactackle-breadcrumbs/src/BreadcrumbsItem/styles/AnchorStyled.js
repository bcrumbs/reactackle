import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  alignItems: PropTypes.oneOf(['top', 'center', 'bottom']),
};

const defaultProps = {
  alignItems: 'center',
};

const ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const align = ({ alignItems }) => `align-items: ${ALIGN_MAP[alignItems]};`;

const colorScheme = ({ active, colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const stateKey = active ? 'active' : 'default';
  const path =
    theme.reactackle.components.breadcrumbs.item
      .colorScheme[colorScheme][stateKey];

  const {
    opacity,
    color,
  } = path;

  const hoverOpacity = path.hover.opacity || opacity;
  const hoverColor = path.hover.color || color;

  return css`
    opacity: ${opacity};
    color: ${color};
    
    &:hover {
      opacity: ${hoverOpacity};
      color: ${hoverColor};
    }
    
    &:focus {
      opacity: ${path.focus.opacity || hoverOpacity};
      color: ${path.focus.color || hoverColor};      
    }
  `;
};

const active = ({ active }) => active
  ? `
    &,
    &:hover,
    &:focus {
      cursor: default;
    }
  `
  : `
    &,
    &:hover,
    &:focus {
      cursor: pointer;
    }
  `;

export const AnchorStyled = styled.a`
  text-decoration: none;
  display: flex;
  ${colorScheme}
  ${active}
  ${align}
`;

AnchorStyled.propTypes = propTypes;
AnchorStyled.defaultProps = defaultProps;
