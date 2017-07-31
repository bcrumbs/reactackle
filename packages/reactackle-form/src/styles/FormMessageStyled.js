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

  const {
    marginBottom,
    fontSize,
    lineHeight,
    backgroundColor,
    color,
    paddingY,
    paddingX,
  } = theme.reactackle.components.form.message;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    background-color: ${backgroundColor};
    color: ${color};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    margin-bottom: ${getValueString(marginBottom)};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

const errorProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    color,
    backgroundColor,
    paddingY,
    paddingX,
  } = theme.reactackle.components.form.message.error;

  return `
    background-color: ${backgroundColor};
    color: ${color};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

/** EXPORT STYLES */
export const FormMessageStyled = styled.div`
  ${baseProps};
  ${errorProps};
`;

FormMessageStyled.propTypes = propTypes;
FormMessageStyled.displayName = 'FormMessageStyled';
