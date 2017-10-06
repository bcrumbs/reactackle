import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { iconStyleMixin, iconSvgSizeMixin, iconCustomSizeMixin } from 'reactackle-icons';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  /**
   * Full-width TextField doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If textfield is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  dense: false,
  colorScheme: 'neutral',
};

/** PROP RECEIVERS */
const iconBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { iconSpacing } = theme.reactackle.components.textfield.buttonInner;

  return `
    margin-left: ${getValueString(iconSpacing)};
  `;
};

const iconStyle = ({ theme: themeFromProvider, disabled, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.buttonInner.state;
  let source = null;

  if (!disabled) source = colorScheme !== 'neutral' ? path[colorScheme] : path;
  else source = path.disabled;

  const { color, opacity } = source;

  const disabledStyles = css`
    &,
    &:hover,
    &:focus {
      opacity: ${opacity};
      cursor: default;
      box-shadow: none;
      ${iconStyleMixin(color)}
    }
  `;

  const defaultStyles = css`
    opacity: ${opacity};
    cursor: pointer;
    ${iconStyleMixin(color)}
    
    &:hover {
      outline: none;
      color: ${path.hover.color};
      opacity: ${path.hover.opacity};
      box-shadow: none;
    }
    
    &:focus {
      outline: none;
      color: ${path.focus.color};
      opacity: ${path.focus.opacity};
      box-shadow: none;
    }     
  `;

  return disabled ? disabledStyles : defaultStyles;
};

const iconSize = ({ dense, fullWidth, theme: themeFromProvider, type }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.buttonInner;
  const sizeMixin = type === 'svg' ? iconSvgSizeMixin : iconCustomSizeMixin;

  let source = null;
  if (dense && !fullWidth) source = path.size.dense;
  else if (dense && fullWidth) source = path.size.denseFullWidth;
  else if (!dense && fullWidth) source = path.size.fullWidth;
  else source = path.size;

  const { boxSize, imgSize } = source;

  return css`    
    ${sizeMixin(
      getValueString(boxSize),
      getValueString(imgSize || boxSize),
      getValueString(boxSize),
    )}
  `;
};

/** STYLES */
export const InnerButton = styled.div`
  display: flex;
  background-color: transparent;
  border: 0 solid transparent;
  padding: 0;
  ${iconBase};
  ${iconSize};
  ${iconStyle};
  ${transition('color, opacity')};
`;

InnerButton.propTypes = propTypes;
InnerButton.defaultProps = defaultProps;
InnerButton.displayName = 'InnerButton';
