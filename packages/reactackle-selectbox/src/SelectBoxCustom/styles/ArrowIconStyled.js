'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
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
  disabled: false,
  focused: false,
  colorScheme: 'neutral',
};

/** Prop Receivers */
const sizeProps = ({ dense, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.icon.size;
  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;

  const { boxSize, imgSize } = source;

  const outer = getValueString(boxSize);

  return `
    width: ${outer};
    height: ${outer};
    line-height: ${outer};
    font-size: ${getValueString(imgSize)};
  `;
};

const styleProps = ({
  theme: themeFromProvider,
  disabled,
  focused,
  colorScheme,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.icon.state;
  let source = path[colorScheme];

  if (disabled) source = path.disabled;
  else if (colorScheme === 'neutral' && !focused && !disabled) source = path;
  else if (colorScheme === 'neutral' && focused && !disabled)
    source = path.focus;

  const { color, opacity } = source;

  return `
    &,
    &:hover,
    &:focus {
      color: ${color};
      opacity: ${opacity};
    }
  `;
};

/** Styles */
export const ArrowIconStyled = styled.span`
  pointer-events: none;
  display: flex;
  ${sizeProps} ${styleProps} ${transition('color, opacity')};
`;

ArrowIconStyled.propTypes = propTypes;
ArrowIconStyled.defaultProps = defaultProps;
ArrowIconStyled.displayName = 'ArrowIconStyled';
