import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

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
  /**
   * If bordered = false, TextField will have only bottom border
   */
  bordered: PropTypes.bool,
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
  const theme = extractThemeOrDefault(themeFromProvider);
  const TextFieldStyleKey = bordered ? 'bordered' : 'underlined';
  const colorSource =
    theme.reactackle.components.textfield.postfix.state[TextFieldStyleKey];

  const neutralStyles =
    colorScheme === 'neutral' &&
    css`
    background-color: ${colorSource.backgroundColor};
    color: ${colorSource.fontColor};
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
      outline: none;
      color: ${colorSource[colorScheme].fontColor};
    }
  `;

  const disabledStyles = `
    &,
    &:hover,
    &:focus {
      background-color: ${colorSource.disabled.backgroundColor};
      outline: none;
      cursor: default;
      user-select: none;
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
  const theme = extractThemeOrDefault(themeFromProvider),
    styleKey = bordered ? 'bordered' : 'underlined',
    path = theme.reactackle.components.textfield.postfix.size,
    textfieldPath = theme.reactackle.components.textfield.textfield.size;

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

  const { postfixEdgeSpacing } = source;

  const { paddingY, lineHeight } = heightSource;

  const minHeight = `calc(${getValueString(paddingY)} * 2 + ${lineHeight}em)`;

  return css`
    padding-right: ${getValueString(postfixEdgeSpacing[styleKey])};
    max-height: ${minHeight};
  `;
};

/** STYLES */
export const PostfixStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ${styleProps};
  ${sizeProps};
`;

PostfixStyled.propTypes = propTypes;
PostfixStyled.defaultProps = defaultProps;
PostfixStyled.displayName = 'PostfixStyled';
