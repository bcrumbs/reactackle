import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
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

  return `
    color: ${color};
    opacity: ${opacity};
  `;
};

const iconSize = ({ dense, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconOuter;

  let source = null;
  if (dense && !fullWidth) source = path.size.dense;
  else if (dense && fullWidth) source = path.size.denseFullWidth;
  else if (!dense && fullWidth) source = path.size.fullWidth;
  else source = path.size;

  const { boxSize, imgSize } = source;

  const outer = getValueString(boxSize);

  return `
    width: ${outer};
    height: ${outer};
    line-height: ${outer};
    font-size: ${getValueString(imgSize)};
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
