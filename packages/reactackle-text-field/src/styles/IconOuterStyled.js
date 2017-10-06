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
  const { iconSpacing } = theme.reactackle.components.textfield.iconOuter;

  return `
    padding-right: ${getValueString(iconSpacing)};
  `;
};

const iconStyle = ({
  theme: themeFromProvider,
  disabled,
  colorScheme,
  focus,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconOuter.state;

  let source = null;
  if (!disabled) {
    if (colorScheme !== 'neutral') source = path[colorScheme];
    else if (focus) source = path.focus;
    else source = path;
  } else {
    source = path.disabled;
  }

  const { color, opacity } = source;

  return css`
    opacity: ${opacity};
    ${iconStyleMixin(color)}
  `;
};

const iconSize = ({ dense, fullWidth, theme: themeFromProvider, type }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconOuter;
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
export const IconOuterStyled = styled.label`
  display: flex;
  box-sizing: content-box !important;
  ${iconBase};
  ${iconSize};
  ${iconStyle};
  ${transition('color, opacity')};
`;

IconOuterStyled.propTypes = propTypes;
IconOuterStyled.defaultProps = defaultProps;
IconOuterStyled.displayName = 'IconOuterStyled';
