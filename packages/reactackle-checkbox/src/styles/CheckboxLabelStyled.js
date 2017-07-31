'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  textFree: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  checked: false,
  textFree: false,
};

const labelSize = ({ theme: themeFromProvider, textFree }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size } = theme.reactackle.components.checkbox.input;

  const { checkboxTextSpacing } = theme.reactackle.components.checkbox.label;

  const paddingLeft = textFree
    ? getValueString(size)
    : `calc(${getValueString(size)} + ${getValueString(checkboxTextSpacing)})`;

  return css`
    min-width: ${getValueString(size)};
    max-width: ${textFree ? getValueString(size) : '100%'};
    min-height: ${getValueString(size)};
    padding-left: ${paddingLeft};

    &:empty {
      padding-left: ${getValueString(size)};
    }
  `;
};

const labelText = ({ theme: themeFromProvider, disabled }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const labelSource = theme.reactackle.components.checkbox.label;

  const { fontSize, fontColor, lineHeight } = labelSource;

  const { color: disabledColor } = labelSource.disabled;

  return `  
    line-height: ${lineHeight};
    font-size: ${getValueString(fontSize)};
    
    ${disabled
      ? `
        cursor: default;
        color: ${disabledColor};
      `
      : `
        cursor: pointer;
        color: ${fontColor};
      `}
  `;
};

const checkboxSize = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size } = theme.reactackle.components.checkbox.input;

  return `  
    width: ${getValueString(size)};
    height: ${getValueString(size)};
  `;
};

const checkboxStyle = ({ theme: themeFromProvider, checked, disabled }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.checkbox.input;

  const { size, borderWidth, borderRadius } = path;

  const source = checked ? path.checked : path;

  return `
    &::before {
      line-height: calc(${getValueString(size)} - ${borderWidth * 2}px);
      border: ${borderWidth}px solid transparent;
      border-radius: ${getValueString(borderRadius)};
    }
    
    ${!disabled
      ? `
        &::before {
          background-color: ${source.backgroundColor};
          border-color: ${source.borderColor};
        }
        
        &:hover::before {
          background-color: ${source.hover.backgroundColor};
          border-color: ${source.hover.borderColor};
        }
        
        &:focus::before {
          background-color: ${source.focus.backgroundColor};
          border-color: ${source.focus.borderColor};
        }
      `
      : `
        &::before,
        &:hover::before,
        &:focus::before {
          background-color: ${source.disabled.backgroundColor};
          border-color: ${source.disabled.borderColor};
        }
      `}
  `;
};

export const CheckboxLabelStyled = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  ${labelSize};
  ${labelText};

  &::before {
    content: '';
    display: block;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    ${checkboxSize};
    ${transition('color, background-color, border')};
  }

  ${checkboxStyle};
`;

CheckboxLabelStyled.propTypes = propTypes;
CheckboxLabelStyled.defaultProps = defaultProps;
CheckboxLabelStyled.displayName = 'CheckboxLabelStyled';
