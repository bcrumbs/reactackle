'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

/** PROP RECEIVERS */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { spacing } = theme.reactackle.components.formItem;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    input,
    textarea,
    button,
    select {
      margin-top: 0;
      margin-bottom: 0;
    }
    
    & + & {
      margin-top: ${getValueString(spacing)};
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

/** EXPORT STYLES */
export const FormItemStyled = styled.div`${baseProps};`;

FormItemStyled.propTypes = propTypes;
FormItemStyled.displayName = 'FormItemStyled';
