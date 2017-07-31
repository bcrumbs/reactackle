'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  size: 'normal',
  iconPositionRight: false,
};

/* Prop Receivers */
const textSizeProps = ({
  size,
  iconPositionRight,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    textPaddingY,
    textPaddingX,
  } = theme.reactackle.components.button.size[size];

  return css`
    padding: ${getValueString(textPaddingY)} ${getValueString(textPaddingX)};
    order: ${iconPositionRight ? '1' : '2'};
  `;
};

/* Styles */
export const ButtonTextStyled = styled.div`
  flex-grow: 1;
  min-width: 0;
  ${textSizeProps};
`;

ButtonTextStyled.propTypes = propTypes;
ButtonTextStyled.defaultProps = defaultProps;
ButtonTextStyled.displayName = 'ButtonTextStyled';
