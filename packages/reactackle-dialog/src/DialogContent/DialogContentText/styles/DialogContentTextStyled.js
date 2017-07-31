'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    fontSize,
    lineHeight,
    color,
    fontWeight,
    similarTextBlockSpacing,
  } = theme.reactackle.components.dialog.content;

  return css`
    fontSize: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${color};
    font-weight: ${fontWeight};
    
    & + & {
      margin-top: ${getValueString(similarTextBlockSpacing)};
    }
  `;
};

/** Styles */
export const DialogContentTextStyled = styled.div`
  margin: 0;
  ${baseProps};
`;

DialogContentTextStyled.propTypes = propTypes;
DialogContentTextStyled.displayName = 'DialogContentTextStyled';
