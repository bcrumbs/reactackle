'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['default', 'blank', 'dense']),
  theme: PropTypes.object,
};

const defaultProps = {
  colorScheme: 'light',
  size: 'default',
};

/** PROP RECEIVERS */
const sizeProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source =
    size === 'default'
      ? theme.reactackle.components.header.title.size
      : theme.reactackle.components.header.title.size[size];

  const { fontSize, fontWeight, lineHeight, paddingY, paddingX } = source;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    font-size: ${getValueString(fontSize)};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

const styleProps = ({ theme: themeFromProvider, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const fontColor =
    theme.reactackle.components.header.title.fontColor[colorScheme];

  return `
    color: ${fontColor};
  `;
};

/** STYLES */
export const HeaderTitleStyled = styled.div`
  margin: 0;
  flex-grow: 1;
  user-select: none;
  cursor: default;
  ${sizeProps} ${styleProps};
`;

HeaderTitleStyled.propTypes = propTypes;
HeaderTitleStyled.defaultProps = defaultProps;
HeaderTitleStyled.displayName = 'HeaderTitleStyled';
