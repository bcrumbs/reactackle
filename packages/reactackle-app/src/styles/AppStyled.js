'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  fixed: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  fixed: false,
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    min-height: ${getValueString(theme.reactackle.components.app.minHeight)};
    font-family: ${fontFamily};
  `;
};

const fixed = ({ fixed }) => (fixed ? 'max-height: 100vh;' : '');

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  ${base};
  ${fixed};
`;

AppStyled.propTypes = propTypes;
AppStyled.defaultProps = defaultProps;
AppStyled.displayName = 'AppStyled';
