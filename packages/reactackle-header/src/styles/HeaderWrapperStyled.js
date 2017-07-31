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
  behavior: PropTypes.oneOf(['static', 'fixed']),
  width: PropTypes.number,
  size: PropTypes.oneOf(['default', 'blank', 'dense']),
  theme: PropTypes.object,
};

const defaultProps = {
  customBackgroundColor: '',
  behavior: 'static',
  size: 'default',
};

/** PROP RECEIVERS */
const sizeProps = ({ size, theme: themeFromProvider  }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source =
    size !== 'default'
      ? theme.reactackle.components.header.header.size[size]
      : theme.reactackle.components.header.header.size;

  const { paddingY, paddingX, minHeight } = source;

  return `
    min-height: ${getValueString(minHeight)};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

const styleProps = ({ theme: themeFromProvider, customBackgroundColor }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { backgroundColor } = theme.reactackle.components.header.header,
    headerBackground = customBackgroundColor || backgroundColor;

  return `
    background-color: ${headerBackground};
  `;
};

const modeProps = ({ behavior }) => {
  let styles = null;

  if (behavior === 'fixed') {
    styles = `
      top: 0;
      position: fixed;
      will-change: transform;
    `;
  }

  return styles;
};

/** STYLES */
export const HeaderWrapperStyled = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  z-index: 1;
  transform: translateZ(0);
  ${transition('transform, top, height', '150ms')};
  ${sizeProps};
  ${styleProps};
  ${modeProps};
`;

HeaderWrapperStyled.propTypes = propTypes;
HeaderWrapperStyled.defaultProps = defaultProps;
HeaderWrapperStyled.displayName = 'HeaderWrapperStyled';
