
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';
import { CheckboxLabelStyled } from './CheckboxLabelStyled';

const propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  checked: false,
};

/* Prop Receivers */
const iconSize = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size, borderWidth } = theme.reactackle.components.checkbox.input;

  const { size: iconSize } = theme.reactackle.components.checkbox.icon;

  const outerSize = `calc(${getValueString(size)} - ${borderWidth * 2}px)`;

  return `
    width: ${outerSize};
    height: ${outerSize};
    font-size: ${getValueString(iconSize)};
    line-height: ${outerSize};
  `;
};

const iconPosition = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { borderWidth } = theme.reactackle.components.checkbox.input;

  return `
    top: ${getValueString(borderWidth)};
    left: ${getValueString(borderWidth)};
  `;
};

const iconStyle = ({ checked, disabled, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.checkbox.icon.style;
  const source = checked ? path.checked : path;

  return !disabled
    ? css`
      color: ${source.color};
      opacity: ${source.opacity};
      &:hover,
      ${CheckboxLabelStyled}:hover & {
        color: ${source.hover.color};
        opacity: ${source.hover.opacity};
      }
      &:focus,
      ${CheckboxLabelStyled}:focus & {
        color: ${source.focus.color};
        opacity: ${source.focus.opacity};
      }
    `
    : css`
      &,
      &:hover,
      ${CheckboxLabelStyled}:hover &,
      &:focus,
      ${CheckboxLabelStyled}:focus & {
        color: ${source.disabled.color};
        opacity: ${source.disabled.opacity};
      }
    `;
};

/* Styles */
export const CheckboxIconStyled = styled.div`
  position: absolute;
  z-index: 1;
  ${iconSize};
  ${iconPosition};
  ${iconStyle};
  ${transition('color, opacity')};
  
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

CheckboxIconStyled.propTypes = propTypes;
CheckboxIconStyled.defaultProps = defaultProps;
CheckboxIconStyled.displayName = 'CheckboxIconStyled';
