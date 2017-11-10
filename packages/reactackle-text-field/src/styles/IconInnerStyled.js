import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { iconStyleMixin } from 'reactackle-icons';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  iconSizeMixin,
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
  const { iconSpacing } = theme.reactackle.components.textfield.iconInner;

  return `
    margin-right: ${getValueString(iconSpacing)};
  `;
};

const iconStyle = ({
  theme: themeFromProvider,
  disabled,
  colorScheme,
  focus,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconInner.state;

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

const iconSize = ({ dense, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconInner;

  let source = null;
  if (dense && !fullWidth) source = path.size.dense;
  else if (dense && fullWidth) source = path.size.denseFullWidth;
  else if (!dense && fullWidth) source = path.size.fullWidth;
  else source = path.size;

  const { boxSize, imgSize } = source;

  return css`    
    ${iconSizeMixin(
      getValueString(boxSize),
      getValueString(imgSize || boxSize),
      getValueString(boxSize),
    )}
  `;
};

/** STYLES */
export const IconInnerStyled = styled.div`
  display: flex;
  ${iconBase};
  ${iconSize};
  ${iconStyle};
  ${transition('color, opacity')};
`;

IconInnerStyled.propTypes = propTypes;
IconInnerStyled.defaultProps = defaultProps;
IconInnerStyled.displayName = 'IconInnerStyled';
