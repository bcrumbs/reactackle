import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { iconStyleMixin, iconSvgSizeMixin, iconCustomSizeMixin } from 'reactackle-icons';
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
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  disabled: false,
  focused: false,
  colorScheme: 'neutral',
};

/** Prop Receivers */
const sizeProps = ({ dense, fullWidth, theme: themeFromProvider, type }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.icon.size;
  const sizeMixin = type === 'svg' ? iconSvgSizeMixin : iconCustomSizeMixin;
  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;

  const { boxSize, imgSize } = source;

  return css`    
    ${sizeMixin(
      getValueString(boxSize),
      getValueString(imgSize || boxSize),
      getValueString(boxSize),
    )}
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
      opacity: ${opacity};
      ${iconStyleMixin(color)};
    }
  `;
};

/** Styles */
export const ArrowIconStyled = styled.span`
  pointer-events: none;
  display: flex;
  ${sizeProps}
  ${styleProps}
  ${transition('color, opacity')};
`;

ArrowIconStyled.propTypes = propTypes;
ArrowIconStyled.defaultProps = defaultProps;
ArrowIconStyled.displayName = 'ArrowIconStyled';
