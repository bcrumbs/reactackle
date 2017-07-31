import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  /**
   * Full-width TextField doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If textfield is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
};

/** PROP RECEIVERS */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { lineHeight } = theme.reactackle.components.textfield.prefix;

  return `
    line-height: ${lineHeight};
  `;
};

const sizeProps = ({ dense, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.prefix.size;

  let source = null;
  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;
  else source = path;

  const { fontSize, paddingY, prefixSpacing } = source;

  return css`
    font-size: ${getValueString(fontSize)};
    padding: ${getValueString(paddingY)} 0;
    padding-right: ${getValueString(prefixSpacing)};
  `;
};

/** STYLES */
export const PrefixTextStyled = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  ${baseProps};
  ${sizeProps};
  ${transition('color')};
`;

PrefixTextStyled.propTypes = propTypes;
PrefixTextStyled.defaultProps = defaultProps;
PrefixTextStyled.displayName = 'PrefixTextStyled';
