import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  bordered: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  dense: false,
  bordered: false,
  colorScheme: 'neutral',
};

/** PROP RECEIVERS */
const styleProps = ({
  disabled,
  focus,
  colorScheme,
  theme: themeFromProvider,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    TextFieldStyleKey = bordered ? 'bordered' : 'underlined';

  const colorSource =
    theme.reactackle.components.textfield.prefix.state[TextFieldStyleKey];

  const neutralStyles =
    colorScheme === 'neutral' &&
    css`
    background-color: ${colorSource.backgroundColor};
    color: ${colorSource.fontColor};

    &:hover {
      outline: none;
    }

    ${focus &&
      `
        outline: none;
        background-color: ${colorSource.focus.backgroundColor};
        color: ${colorSource.focus.fontColor};
      `}
  `;

  const stateStyles =
    colorScheme !== 'neutral' &&
    css`
    &,
    &:hover,
    &:focus {
      background-color: ${colorSource[colorScheme].backgroundColor};
      color: ${colorSource[colorScheme].fontColor};
      outline: none;
    }
  `;

  const disabledStyles = `
    &,
    &:hover,
    &:focus {
      cursor: default;
      user-select: none;
      background-color: ${colorSource.disabled.backgroundColor};
      outline: none;
      color: ${colorSource.disabled.fontColor};
    }
  `;

  let styles = null;
  if (disabled) styles = disabledStyles;
  else if (colorScheme === 'neutral') styles = neutralStyles;
  else styles = stateStyles;

  return styles;
};

const sizeProps = ({
  dense,
  fullWidth,
  theme: themeFromProvider,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const styleKey = bordered ? 'bordered' : 'underlined';
  const path = theme.reactackle.components.textfield.prefix.size;
  const textfieldPath = theme.reactackle.components.textfield.textfield.size;

  let source = null;
  let heightSource = null;
  if (dense && !fullWidth) {
    source = path.dense;
    heightSource = textfieldPath.dense;
  } else if (dense && fullWidth) {
    source = path.denseFullWidth;
    heightSource = textfieldPath.denseFullWidth;
  } else if (!dense && fullWidth) {
    source = path.fullWidth;
    heightSource = textfieldPath.fullWidth;
  } else {
    source = path;
    heightSource = textfieldPath;
  }

  const { prefixEdgeSpacing } = source;

  const { paddingY, lineHeight } = heightSource;

  const maxHeight = `calc(${getValueString(paddingY)} * 2 + ${lineHeight}em)`;

  return css`
    padding-left: ${getValueString(prefixEdgeSpacing[styleKey])};
    max-height: ${getValueString(maxHeight)};
  `;
};

/** STYLES */
export const PrefixStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ${styleProps};
  ${sizeProps};
`;

PrefixStyled.propTypes = propTypes;
PrefixStyled.defaultProps = defaultProps;
PrefixStyled.displayName = 'PrefixStyled';
