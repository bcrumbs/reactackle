import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  /**
   * If bordered = false, TextField will have only bottom border
   */
  bordered: PropTypes.bool,
  /**
   * Full-width TextField doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If textfield is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  bordered: false,
  fullWidth: false,
  dense: false,
  disabled: false,
  colorScheme: 'neutral',
};

const displayName = name => `TextFieldStyled(${name})`;

/** PROP RECEIVERS */
const textfieldSize = ({
  dense,
  fullWidth,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    styleKey = bordered ? 'bordered' : 'underlined';
  let source = null;

  if (dense && !fullWidth) {
    source = theme.reactackle.components.textfield.textfield.size.dense;
  } else if (dense && fullWidth) {
    source =
      theme.reactackle.components.textfield.textfield.size.denseFullWidth;
  } else if (!dense && fullWidth) {
    source = theme.reactackle.components.textfield.textfield.size.fullWidth;
  } else {
    source = theme.reactackle.components.textfield.textfield.size;
  }

  const { paddingY, paddingX } = source;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX[styleKey])};
  `;
};

const basicStyles = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  return css`
    font-family: ${theme.reactackle.components.textfield.textfield.fontFamily};
  `;
};

const textfieldStyle = ({
  disabled,
  colorScheme,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.textfield.textfield.state;

  const neutralStyles =
    colorScheme === 'neutral' &&
    css`
    background-color: ${source.backgroundColor};
    color: ${source.fontColor};

    &:hover {
      outline: none;
      background-color: ${source.hover.backgroundColor};
      color: ${source.hover.fontColor};
    }

    &:focus {
      outline: none;
      background-color: ${source.focus.backgroundColor};
      color: ${source.focus.fontColor};
    }
  `;

  const stateStyles =
    colorScheme !== 'neutral' &&
    css`
    &,
    &:hover,
    &:focus {
      background-color: ${source[colorScheme].backgroundColor};
      color: ${source[colorScheme].fontColor};
      outline: none;
    }
  `;

  const disabledStyles = `
    cursor: default;
    user-select: none;

    &,
    &:hover,
    &:focus {
      background-color: ${source.disabled.backgroundColor};
      color: ${source.disabled.fontColor};
      outline: none;
    }
  `;

  let styles = null;
  if (disabled) styles = disabledStyles;
  else if (colorScheme === 'neutral') styles = neutralStyles;
  else styles = stateStyles;

  return styles;
};

const placeholderStyles = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  return `
    color: ${theme.reactackle.components.textfield.placeholder.fontColor};
  `;
};

/** STYLES */

const styles = props => `
  border-width: 0;
  text-overflow: ellipsis;
  flex-grow: 1;
  width: 100%;
  resize: ${props.resize === 'none' ? 'none' : 'both'};
  max-width: 100%;
  font-size: inherit;
  line-height: inherit;
  z-index: 1;
  ${textfieldSize(props)}
  ${basicStyles(props)}
  ${textfieldStyle(props)}

  &::placeholder {
    ${placeholderStyles(props)}
  }

  ${transition('color, background-color, box-shadow')}
`;

export const TextareaAutosizeStyled = styled(({
  bordered,
  fullWidth,
  dense,
  disabled,
  colorScheme,
  focus,
  theme,
  saveRef,
  ...props
}) => <TextareaAutosize {...props} inputRef={saveRef} />)`
  ${styles}
`;
TextareaAutosizeStyled.propTypes = {
  ...propTypes,
  ...TextareaAutosize.propTypes,
  saveRef: PropTypes.func.isRequired,
};
TextareaAutosizeStyled.defaultProps = {
  ...defaultProps,
  ...TextareaAutosize.defaultProps,
};
TextareaAutosizeStyled.displayName = displayName(TextareaAutosize.displayName || 'TextareaAutosize');

export const TextareaStyled = styled.textarea`
  ${styles}
`;
TextareaStyled.propTypes = propTypes;
TextareaStyled.defaultProps = defaultProps;
TextareaStyled.displayName = displayName('Textarea');

export const InputStyled = styled.input`
  ${styles}
`;
InputStyled.propTypes = propTypes;
InputStyled.defaultProps = defaultProps;
InputStyled.displayName = displayName('Input');
