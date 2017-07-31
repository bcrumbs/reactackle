'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

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

// PROP RECEIVERS
const subtitleSizeProps = ({ size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    subtitleFontSize,
    subtitleLineHeight,
  } = theme.reactackle.components.button.size[size];

  const {
    fontWeight,
    textTransform,
    fontColor,
    fontOpacity,
    subtitleTitleSpacing,
  } = theme.reactackle.components.button.subtitle;

  return `
    font-size: ${getValueString(subtitleFontSize)};
    line-height: ${subtitleLineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    color: ${fontColor};
    opacity: ${fontOpacity};
    margin-bottom: ${getValueString(subtitleTitleSpacing)};
  `;
};

export const ButtonSubtitleStyled = styled.div`
  ${subtitleSizeProps};
  color: inherit;
`;

ButtonSubtitleStyled.propTypes = propTypes;
ButtonSubtitleStyled.defaultProps = defaultProps;
ButtonSubtitleStyled.displayName = 'ButtonSubtitleStyled';
