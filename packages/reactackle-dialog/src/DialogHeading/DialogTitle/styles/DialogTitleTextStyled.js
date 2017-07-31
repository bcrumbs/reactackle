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

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    color,
    fontWeight,
  } = theme.reactackle.components.dialog.title;

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${color};
    font-weight: ${fontWeight};
  `;
};

/** Styles */
export const DialogTitleTextStyled = styled.div`
  margin: 0;
  ${baseProps};
`;

DialogTitleTextStyled.propTypes = propTypes;
DialogTitleTextStyled.displayName = 'DialogTitleTextStyled';
