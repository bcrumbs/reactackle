import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * Full-width TextField doesn't have borders
   */
  fullWidth: PropTypes.bool,
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
  colorScheme: 'neutral',
};

/** PROP RECEIVERS */
const size = ({ fullWidth }) => {
  const align = fullWidth ? 'center' : 'stretch';

  return `align-items: ${align};`;
};

const textfieldStyle = ({
  disabled,
  focus,
  colorScheme,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.textfield.textfield.state;

  const neutralStyles = css`
    background-color: ${source.backgroundColor};
    color: ${source.fontColor};
    border-color: ${source.borderColor};
    border-style: ${source.borderStyle};

    &:hover {
      outline: none;
      background-color: ${source.hover.backgroundColor};
      color: ${source.hover.fontColor};
      border-color: ${source.hover.borderColor};
      border-style: ${source.hover.borderStyle};
    }
  `;

  const focusStyles = css`
    outline: none;
    background-color: ${source.focus.backgroundColor};
    color: ${source.focus.fontColor};
    border-color: ${source.focus.borderColor};
    border-style: ${source.focus.borderStyle};
  `;
  
  const disabledStyles = css`
    cursor: default;
    user-select: none;

    &,
    &:hover,
    &:focus {
      background-color: ${source.disabled.backgroundColor};
      color: ${source.disabled.fontColor};
      border-color: ${source.disabled.borderColor};
      border-style: ${source.disabled.borderStyle};
      outline: none;
    }
  `;

  let styles = null;
  if (disabled) styles = disabledStyles;
  else if (colorScheme === 'neutral' && !focus && !disabled)
    styles = neutralStyles;
  else if (colorScheme === 'neutral' && focus && !disabled)
    styles = focusStyles;
  else {
    styles = css`
      background-color: ${source[colorScheme].backgroundColor};
      color: ${source[colorScheme].fontColor};
      border-color: ${source[colorScheme].borderColor};
      border-style: ${source[colorScheme].borderStyle};
      outline: none;
        
      &:hover,
      &:focus {
        background-color: ${source[colorScheme].backgroundColor};
        color: ${source[colorScheme].fontColor};
        border-color: ${source[colorScheme].borderColor};
        border-style: ${source[colorScheme].borderStyle};
        outline: none;
      }
    `;
  }

  return styles;
};

const textfieldBorder = ({ bordered, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = bordered
    ? theme.reactackle.components.textfield.textfield.bordered
    : theme.reactackle.components.textfield.textfield.underlined;

  const borderWidth = getValueString(source.borderWidth),
    borderRadius = getValueString(source.borderRadius);

  return bordered
    ? css`
      border-width: ${fullWidth ? '0' : borderWidth};
      border-radius: ${borderRadius};
    `
    : css`
      border-width: 0;
      border-bottom-width: ${fullWidth ? '0' : borderWidth};
      border-radius: ${borderRadius};
    `;
};

/** STYLES */
/** ex textfield-item-box */
export const TextFieldGroupStyled = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  flex-grow: 1;
  ${size};
  ${textfieldStyle};
  ${textfieldBorder};
  ${transition('border-color, border-style')};
`;

TextFieldGroupStyled.propTypes = propTypes;
TextFieldGroupStyled.defaultProps = defaultProps;
TextFieldGroupStyled.displayName = 'TextFieldGroupStyled';
