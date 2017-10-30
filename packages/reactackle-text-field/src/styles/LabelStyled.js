import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  media,
} from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  bordered: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  labelPosition: PropTypes.oneOf(['top', 'side']),
  slidingLabel: PropTypes.bool,
  iconOuter: PropTypes.object,
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  dense: false,
  bordered: false,
  colorScheme: 'neutral',
  labelPosition: 'top',
  slidingLabel: false,
  iconOuter: null,
};

/** PROP RECEIVERS */
const labelBase = ({ labelPosition, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    path = theme.reactackle.components.textfield.label,
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

const labelSpacing = ({
  labelPosition,
  dense,
  fullWidth,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    key = labelPosition === 'top' ? 'positionTop' : 'positionSide',
    textfieldStyleKey = bordered ? 'bordered' : 'underlined';

  const path =
    theme.reactackle.components.textfield.label[key].size[textfieldStyleKey];

  let source = null;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;
  else source = path;

  const labelSpacing = getValueString(source.labelSpacing);

  return labelPosition === 'top'
    ? `padding-bottom: ${labelSpacing};`
    : `margin-right: ${labelSpacing};`;
};

const labelStyle = ({
  theme: themeFromProvider,
  disabled,
  colorScheme,
  labelPosition,
  focus,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    key = labelPosition === 'top' ? 'positionTop' : 'positionSide',
    path = theme.reactackle.components.textfield.label[key].style;

  let source = null;

  if (!disabled) {
    if (colorScheme !== 'neutral') source = path[colorScheme];
    else if (focus) source = path.focus;
    else source = path;
  } else {
    source = path.disabled;
  }

  return `color: ${source.fontColor};`;
};

const labelSideWidth = ({ labelPosition, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    source = theme.reactackle.components.textfield.label.positionSide;

  const breakpoints = source.breakpoints.map(item => {
    const width = getValueString(item.width);

    return css`
      ${media(item.breakpoint)`
        width: ${width};
      `}
    `;
  });

  return (
    labelPosition === 'side' &&
    css`
    width: ${getValueString(source.width)};
    ${breakpoints};
  `
  );
};

const offset = ({
  theme: themeFromProvider,
  bordered,
  labelPosition,
  dense,
  fullWidth,
  iconOuter,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    styleKey = bordered ? 'bordered' : 'underlined',
    positionKey = labelPosition === 'side' ? 'positionSide' : 'positionTop',
    textfieldPath = theme.reactackle.components.textfield.textfield,
    iconPath = theme.reactackle.components.textfield.iconOuter;

  const labelPath =
    theme.reactackle.components.textfield.label[positionKey].size[styleKey];

  let textfieldSource = null,
    labelSource = null,
    iconSource = null;
  if (dense && !fullWidth) {
    textfieldSource = textfieldPath.size.dense;
    labelSource = labelPath.dense;
    iconSource = iconPath.size.dense;
  } else if (dense && fullWidth) {
    textfieldSource = textfieldPath.size.denseFullWidth;
    labelSource = labelPath.denseFullWidth;
    iconSource = iconPath.size.denseFullWidth;
  } else if (!dense && fullWidth) {
    textfieldSource = textfieldPath.size.fullWidth;
    labelSource = labelPath.fullWidth;
    iconSource = iconPath.size.fullWidth;
  } else {
    textfieldSource = textfieldPath.size;
    labelSource = labelPath;
    iconSource = iconPath.size;
  }

  const paddingX = getValueString(textfieldSource.paddingX[styleKey]),
    iconSpacing = getValueString(iconPath.iconSpacing),
    boxSize = getValueString(iconSource.boxSize);

  const { paddingTop, paddingBottom, labelSpacing } = labelSource;

  const padBottom =
    labelPosition === 'side'
      ? getValueString(paddingBottom)
      : getValueString(labelSpacing);

  const iconLeftOffset = iconOuter ? `calc(${boxSize} + ${iconSpacing})` : 0;

  const fwIconOffset = iconLeftOffset
    ? `calc(${iconLeftOffset} + ${paddingX})`
    : paddingX;

  const leftOffset = fullWidth ? fwIconOffset : paddingX;

  const padLeft = labelPosition === 'side' ? paddingX : leftOffset;

  return fullWidth
    ? `
      padding-top: ${getValueString(paddingTop)};
      padding-bottom: ${padBottom};
      padding-left: ${padLeft};
      padding-right: ${paddingX};
    `
    : labelPosition === 'top' && `padding-left: ${iconLeftOffset};`;
};

/** STYLES */
export const LabelStyled = styled.label`
  display: flex;
  user-select: none;
  ${labelBase};
  ${labelStyle};
  ${labelSpacing};
  ${labelSideWidth};
  ${offset};
  ${transition('color, font-size')};
`;

LabelStyled.propTypes = propTypes;
LabelStyled.defaultProps = defaultProps;
LabelStyled.displayName = 'LabelStyled';
