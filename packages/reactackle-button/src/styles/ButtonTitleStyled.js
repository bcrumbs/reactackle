'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  size: 'normal',
};

const titleSizeProps = ({ size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const lineHeight = theme.reactackle.components.button.size[size].lineHeight;

  const { fontWeight, textTransform } = theme.reactackle.components.button.text;

  return `
    font-size: inherit;
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
  `;
};

export const ButtonTitleStyled = styled.div`
  color: inherit;
  text-align: inherit;
  ${titleSizeProps};
`;

ButtonTitleStyled.propTypes = propTypes;
ButtonTitleStyled.defaultProps = defaultProps;
ButtonTitleStyled.displayName = 'ButtonTitleStyled';
