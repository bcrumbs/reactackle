'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

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
    color,
    fontSize,
    lineHeight,
    textTransform,
    fontWeight,
    marginBottom,
  } = theme.reactackle.components.formItem.label;

  return `
    color: ${color};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    margin-bottom: ${getValueString(marginBottom)};
  `;
};

/** EXPORT STYLES */
export const FormItemLabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  ${baseProps} ${transition('color')};
`;

FormItemLabelStyled.propTypes = propTypes;
FormItemLabelStyled.displayName = 'FormItemLabelStyled';
