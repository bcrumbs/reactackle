import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { iconStyleMixin, iconSvgSizeMixin, iconCustomSizeMixin } from 'reactackle-icons';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

import { CheckboxLabelStyled } from './CheckboxLabelStyled';

const propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  checked: false,
};

/* Prop Receivers */
const iconSize = ({ theme: themeFromProvider, type }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.checkbox;
  const sizeMixin = type === 'svg' ? iconSvgSizeMixin : iconCustomSizeMixin;
  const { size, borderWidth } = path.input;
  const {
    imgSize,
    size: iconSize,
  } = path.icon;

  const outerSize = `calc(${getValueString(size)} - ${borderWidth * 2}px)`;

  return css`    
    ${sizeMixin(
      outerSize,
      getValueString(imgSize || iconSize),
      outerSize,
    )}
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
      opacity: ${source.opacity};
      ${iconStyleMixin(source.color)};
      
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
        opacity: ${source.disabled.opacity};
        ${iconStyleMixin(source.color)};
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
`;

CheckboxIconStyled.propTypes = propTypes;
CheckboxIconStyled.defaultProps = defaultProps;
CheckboxIconStyled.displayName = 'CheckboxIconStyled';
