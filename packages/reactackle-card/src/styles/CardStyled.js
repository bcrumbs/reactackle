'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  boxShadow,
} from 'reactackle-core';

const propTypes = {
  elevation: PropTypes.number,
  theme: PropTypes.object,
};

const defaultProps = {
  elevation: 1,
};

const baseProps = ({ theme: themeFromProvider, elevation, noShadow }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  const {
    borderRadius,
    backgroundColor,
  } = theme.reactackle.components.card.card;

  return css`
    border-radius: ${getValueString(borderRadius)};
    background-color: ${backgroundColor};
    display: flex;
    align-items: stretch;
    ${!noShadow && boxShadow(elevation - 1)};

    &,
    &*,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const CardStyled = styled.div`
  width: 100%;
  ${baseProps};
`;

CardStyled.propTypes = propTypes;
CardStyled.defaultProps = defaultProps;
CardStyled.displayName = 'CardStyled';
