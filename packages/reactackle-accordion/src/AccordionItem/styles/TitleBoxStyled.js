import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  transition,
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const propTypes = {
  expanded: PropTypes.bool,
};

const defaultProps = {
  expanded: false,
};

const ALIGN_MAP = {
  top: 'flex-start',
  end: 'flex-end',
  bottom: 'center',
  stretch: 'stretch',
};

const style = ({ expanded, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const pathKey = expanded ? 'expanded' : 'collapsed';
  const path = theme.reactackle.components.accordion.item.title[pathKey];

  return `
    background-color: ${path.backgroundColor};
    opacity: ${path.opacity};
    
    &:hover {    
      background-color: ${path.hover.backgroundColor};
      opacity: ${path.hover.opacity};
    }
    
    &:focus {    
      background-color: ${path.focus.backgroundColor};
      opacity: ${path.focus.opacity};
    }
  `;
};

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    align,
    minHeight,
  } = theme.reactackle.components.accordion.item.title;

  return css`
    align-items: ${ALIGN_MAP[align]};
    
    ${minHeight && `min-height: ${getValueString(minHeight)};`}
  `;
};

const expanded = ({ theme: themeFromProvider, expanded }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const styleKey = expanded ? 'expanded' : 'collapsed';

  const { color } = theme.reactackle.components.accordion.item.title[styleKey];

  return css`
    color: ${color};
  `;
};

export const TitleBoxStyled = styled.button`
  width: 100%;
  display: flex;
  cursor: pointer;
  text-align: left;
  ${transition('background-color, opacity')}
  
  &,
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    border: 0 solid transparent;
    padding: 0;
  }
  
  ${style}
  ${size}
  ${expanded}
`;

TitleBoxStyled.propTypes = propTypes;
TitleBoxStyled.defaultProps = defaultProps;
