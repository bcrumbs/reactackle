'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  elementInvisible,
} from 'reactackle-core';

const propTypes = {
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

// PROP RECEIVERS
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size, similarItemsSpacing } = theme.reactackle.components.radio.input;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    min-width: ${getValueString(size)};
    min-height: ${getValueString(size)};
    
    & + & {
      margin-top: ${getValueString(similarItemsSpacing)};
    }
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const RadioStyled = styled.div`
  user-select: none;
  ${baseProps} input[type='radio'] {
    ${elementInvisible};
  }
`;

RadioStyled.propTypes = propTypes;
RadioStyled.displayName = 'RadioStyled';
