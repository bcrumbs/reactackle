'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  checked: false,
  disabled: false,
};

/** PROP RECEIVERS */
const inputBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    size,
    borderWidth,
    borderRadius,
  } = theme.reactackle.components.radio.input;

  const { fontSize, lineHeight } = theme.reactackle.components.radio.label;

  const borderWdth = getValueString(borderWidth),
    sizeString = getValueString(size),
    top = `calc(${lineHeight / 2}em - ${sizeString} / 2 - ${borderWdth})`;

  return `
    top: ${top};
    width: ${sizeString};
    height: ${sizeString};
    border-radius: ${getValueString(borderRadius)};
    border-width: ${borderWdth};
    border-style: solid;
    font-size: ${getValueString(fontSize)};
  `;
};

const labelBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const size = getValueString(theme.reactackle.components.radio.input.size);

  const {
    inputLabelSpacing,
    fontSize,
    lineHeight,
  } = theme.reactackle.components.radio.label;

  return `
    padding-left: calc(${size} + ${getValueString(inputLabelSpacing)});
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    min-width: ${size};
    min-height: ${size};
  `;
};

const labelStateProps = ({ checked, disabled, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  let source = null;
  let inputSource = null;
  let styles = null;

  if (checked) {
    source = theme.reactackle.components.radio.label.checked;
    inputSource = theme.reactackle.components.radio.input.checked;
  } else {
    source = theme.reactackle.components.radio.label;
    inputSource = theme.reactackle.components.radio.input;
  }

  const inputDefault = css`    
    background-color: ${inputSource.backgroundColor};
    border-color: ${inputSource.borderColor};
    
    ${checked
      ? `box-shadow:
         inset 0 0 0 0.5px ${inputSource.borderColor},
         inset 0 0 0 ${getValueString(inputSource.knobOffsetSize)}
            ${inputSource.knobOffsetColor};`
      : null}    
  `;

  const inputHover = css`    
    background-color: ${inputSource.hover.backgroundColor};
    border-color: ${inputSource.hover.borderColor};
        
    ${checked
      ? `box-shadow:
         inset 0 0 0 0.5px ${inputSource.hover.borderColor},
         inset 0 0 0 ${getValueString(inputSource.hover.knobOffsetSize)}
            ${inputSource.hover.knobOffsetColor};`
      : null}    
  `;

  const inputFocus = css`    
    background-color: ${inputSource.focus.backgroundColor};
    border-color: ${inputSource.focus.borderColor};
        
    ${checked
      ? `box-shadow:
           inset 0 0 0 0.5px ${inputSource.focus.borderColor},
           inset 0 0 0 ${getValueString(inputSource.focus.knobOffsetSize)}
              ${inputSource.focus.knobOffsetColor};`
      : null}    
  `;

  const inputDisabled = css`    
    background-color: ${inputSource.disabled.backgroundColor};
    border-color: ${inputSource.disabled.borderColor};
    cursor: default;
        
    ${checked
      ? `box-shadow:
           inset 0 0 0 0.5px ${inputSource.disabled.borderColor},
           inset 0 0 0 ${getValueString(inputSource.disabled.knobOffsetSize)}
              ${inputSource.disabled.knobOffsetColor};`
      : null}  
  `;

  if (!disabled) {
    styles = css`
      color: ${source.fontColor};
      
      &:before {
        ${inputDefault}
      }
      
      &:hover,
      &:focus:hover,
      input[type='radio']:focus + &:hover {
        color: ${source.hover.fontColor};
      
        &:before {
          ${inputHover}
        }
      }
      
      &:focus,
      input[type='radio']:focus + & {
        color: ${source.focus.fontColor};
      
        &:before {
          ${inputFocus}
        }
      }
    `;
  } else {
    styles = css`        
      &,
      &:hover,
      &:focus,
      input[type='radio']:disabled:focus + & {
        color: ${source.disabled.fontColor};
        cursor: default;
      
        &:before {
          ${inputDisabled}
        }
      }
    `;
  }

  return styles;
};

/** STYLES */
export const RadioLabelStyled = styled.label`
  position: relative;
  cursor: pointer;
  display: block;
  user-select: none;
  ${labelBase} ${labelStateProps} ${transition('color')};

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    ${inputBase} ${transition('color, background-color, border-color')};
  }
`;

RadioLabelStyled.propTypes = propTypes;
RadioLabelStyled.defaultProps = defaultProps;
RadioLabelStyled.displayName = 'RadioLabelStyled';
