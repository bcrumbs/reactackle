'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  media,
} from 'reactackle-core';

const propTypes = {
  labelPosition: PropTypes.oneOf(['top', 'side']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  labelPosition: 'top',
};

/** Prop Receivers */
const labelBase = ({ labelPosition, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.label,
    source = labelPosition === 'top' ? path.positionTop : path.positionSide;

  const { fontSize, lineHeight, textTransform, fontWeight } = source;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    ${labelPosition === 'side'
      ? `
        flex-direction: column;
        justify-content: center;
      `
      : 'align-items: center;'}
  `;
};

const labelSelectSpacing = ({
  labelPosition,
  dense,
  fullWidth,
  theme: themeFromProvider,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const key = labelPosition === 'top' ? 'positionTop' : 'positionSide',
    styleKey = bordered ? 'bordered' : 'underlined',
    path = theme.reactackle.components.selectBox.label[key].size[styleKey];

  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;

  const labelSelectSpacing = getValueString(source.labelSelectSpacing);

  return labelPosition === 'top'
    ? `margin-bottom: ${labelSelectSpacing};`
    : `margin-right: ${labelSelectSpacing};`;
};

const sizeProps = ({
  labelPosition,
  dense,
  fullWidth,
  theme: themeFromProvider,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const styleKey = bordered ? 'bordered' : 'underlined',
    path = theme.reactackle.components.selectBox.selectBox[styleKey].size;
  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;

  const { paddingY } = source;

  return (
    labelPosition === 'side' &&
    `
    padding-bottom: ${getValueString(paddingY)};
  `
  );
};

const labelStyle = ({
  theme: themeFromProvider,
  disabled,
  colorScheme,
  labelPosition,
  focus,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const key = labelPosition === 'top' ? 'positionTop' : 'positionSide',
    path = theme.reactackle.components.selectBox.label[key].style;
  let source = null;

  if (!disabled) {
    if (colorScheme !== 'neutral') source = path[colorScheme];
    else if (focus) source = path.focus;
    else source = path;
  } else {
    source = path.disabled;
  }
  const { fontColor } = source;

  return `color: ${fontColor};`;
};

const labelSideWidth = ({ labelPosition, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.selectBox.label.positionSide;

  const breakpoints = source.breakpoints.map(
    item => css`
      ${media(item.breakpoint)`
        width: ${getValueString(item.width)};
      `}
    `,
  );

  return (
    labelPosition === 'side' &&
    css`
      width: ${getValueString(source.width)};
      ${breakpoints};
    `
  );
};

/** STYLES */
export const SelectBoxLabelStyled = styled.label`
  display: flex;
  user-select: none;
  ${labelBase};
  ${labelStyle};
  ${sizeProps};
  ${labelSelectSpacing};
  ${labelSideWidth};
  ${transition('color, font-size')};
`;

SelectBoxLabelStyled.propTypes = propTypes;
SelectBoxLabelStyled.defaultProps = defaultProps;
SelectBoxLabelStyled.displayName = 'SelectBoxLabelStyled';
