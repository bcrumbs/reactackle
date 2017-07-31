'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  bordered: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  bordered: false,
};

/** Prop Receivers */
const sizeProps = ({
  dense,
  fullWidth,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.selectBox,
    styleKey = bordered ? 'bordered' : 'underlined';

  let source = path[styleKey].size;

  if (dense && !fullWidth) source = path[styleKey].size.dense;
  else if (dense && fullWidth) source = path[styleKey].size.denseFullWidth;
  else if (!dense && fullWidth) source = path[styleKey].size.fullWidth;

  const { paddingY, paddingX, lineHeight, fontSize } = source;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    line-height: ${lineHeight};
    font-size: ${getValueString(fontSize)};
    min-height: ${lineHeight}em;
  `;
};

/** Styles */
export const ButtonTextStyled = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  ${sizeProps};
`;

ButtonTextStyled.propTypes = propTypes;
ButtonTextStyled.defaultProps = defaultProps;
ButtonTextStyled.displayName = 'ButtonTextStyled';
