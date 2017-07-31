'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  customBackgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['default', 'blank', 'dense']),
  theme: PropTypes.object,
};

const defaultProps = {
  customBackgroundColor: '',
  size: 'default',
};

/** PROP RECEIVERS */
const sizeProps = ({ size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source =
    size !== 'default'
      ? theme.reactackle.components.header.header.size[size]
      : theme.reactackle.components.header.header.size;

  return `
    min-height: ${getValueString(source.minHeight)};
  `;
};

const baseProps = ({ theme: themeFromProvider, customBackgroundColor }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { zIndex, backgroundColor } = theme.reactackle.components.header.header;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  const headerBackground = customBackgroundColor || backgroundColor;

  return `
    background-color: ${headerBackground};
    z-index: ${zIndex};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

/** STYLES */
export const HeaderStyled = styled.header`
  padding: 0;
  position: relative;
  width: 100%;
  ${baseProps};
  ${sizeProps};
  ${transition('height')};
`;

HeaderStyled.propTypes = propTypes;
HeaderStyled.defaultProps = defaultProps;
HeaderStyled.displayName = 'HeaderStyled';
