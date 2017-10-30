import PropTypes from 'prop-types';
import Color from 'color';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

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
   * Define label position
   */
  labelPosition: PropTypes.oneOf(['top', 'side']),
  /**
   * If slidingLabel = true, label will float to top
   * when parent textfield is focused or filled
   */
  slidingLabel: PropTypes.bool,
  /**
   * Add icon behind textfield
   */
  iconOuter: PropTypes.object,
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
  labelPosition: 'top',
  slidingLabel: false,
  iconOuter: null,
};

/** PROP RECEIVERS */
const labelBase = ({
  theme: themeFromProvider,
  bordered,
  focus,
  filled,
  dense,
  fullWidth,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const textfieldKey = bordered ? 'bordered' : 'underlined';
  const textfieldPath = theme.reactackle.components.textfield.textfield;
  const labelPath = theme.reactackle.components.textfield.label.positionTop;

  let textfieldSource = null;
  if (dense && !fullWidth) textfieldSource = textfieldPath.size.dense;
  else if (dense && fullWidth)
    textfieldSource = textfieldPath.size.denseFullWidth;
  else if (!dense && fullWidth) textfieldSource = textfieldPath.size.fullWidth;
  else textfieldSource = textfieldPath.size;

  /**
   * When textfield isn't in focus or filled, label should look like TextField's
   * value
   */
  const { fontSize, lineHeight } =
    focus || filled ? labelPath : textfieldSource;

  const borderWidth = getValueString(textfieldPath[textfieldKey].borderWidth);
  const borderWidthSubstraction = bordered ? `${borderWidth} * 2` : borderWidth;

  const { paddingY } = textfieldSource;

  const { textTransform, fontWeight } = labelPath;

  const filledStyles = `
    height: auto;
    bottom: auto;
    cursor: text;
    white-space: nowrap;
    background-color: transparent;
    top: 0;
  `;

  const defaultStyles = css`
    height: calc(100% - ${borderWidthSubstraction});
    bottom: ${borderWidth};
    cursor: default;
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    align-items: flex-end;
    padding-bottom: ${getValueString(paddingY)};
    pointer-events: none;
  `;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    ${transition('color, font-size, height')};
    ${focus || filled ? filledStyles : defaultStyles};
  `;
};

const labelSpacing = ({
  bordered,
  labelPosition,
  dense,
  fullWidth,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const key = labelPosition === 'top' ? 'positionTop' : 'positionSide';
  const labelSizeType = bordered ? 'bordered' : 'underlined';
  const path =
    theme.reactackle.components.textfield.label[key].size[labelSizeType];
  let source = null;

  if (dense && !fullWidth) source = path.dense;
  else if (dense && fullWidth) source = path.denseFullWidth;
  else if (!dense && fullWidth) source = path.fullWidth;
  else source = path;

  const labelSpacing = getValueString(source.labelSpacing);

  return labelPosition === 'top'
    ? `margin-bottom: ${labelSpacing};`
    : `margin-right: ${labelSpacing};`;
};

const labelStyle = ({
  theme: themeFromProvider,
  disabled,
  colorScheme,
  labelPosition,
  focus,
  filled,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider),
    key = labelPosition === 'top' ? 'positionTop' : 'positionSide',
    labelPath = theme.reactackle.components.textfield.label[key].style,
    textfieldPath = theme.reactackle.components.textfield.textfield.state,
    placeholderPath = theme.reactackle.components.textfield.placeholder;

  let labelSource = null,
    textfieldSource = null;

  if (!disabled) {
    if (colorScheme !== 'neutral') {
      labelSource = labelPath[colorScheme];
      textfieldSource = textfieldPath[colorScheme];
    } else if (focus) {
      labelSource = labelPath.focus;
      textfieldSource = textfieldPath.focus;
    } else {
      labelSource = labelPath;
      textfieldSource = textfieldPath;
    }
  } else {
    labelSource = labelPath.disabled;
    textfieldSource = textfieldPath.disabled;
  }

  const { fontColor } = focus || filled ? labelSource : placeholderPath;

  const textfieldBackgroundColor = Color(
    textfieldSource.backgroundColor,
  ).alpha()
    ? textfieldSource
    : 'white';

  const backgroundColor =
    focus || filled ? 'transparent' : textfieldBackgroundColor;

  return `
    background-color: ${backgroundColor};
    color: ${fontColor};
  `;
};

const offset = ({ theme: themeFromProvider, dense, fullWidth, iconOuter }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.iconOuter;

  let source = null;
  if (dense && !fullWidth) source = path.size.dense;
  else if (dense && fullWidth) source = path.size.denseFullWidth;
  else if (!dense && fullWidth) source = path.size.fullWidth;
  else source = path.size;

  const iconSpacing = getValueString(path.iconSpacing);
  const boxSize = getValueString(source.boxSize);

  const iconOffset = iconOuter ? `calc(${boxSize} + ${iconSpacing})` : 0;

  return (
    iconOffset &&
    `
    left: ${iconOffset};
    max-width: calc(100% - ${iconOffset});
  `
  );
};

/** STYLES */
export const LabelSlidingStyled = styled.label`
  display: flex;
  user-select: none;
  width: 100%;
  position: absolute;
  z-index: 2;
  justify-content: flex-start;
  ${labelBase};
  ${labelStyle};
  ${labelSpacing};
  ${offset};
`;

LabelSlidingStyled.propTypes = propTypes;
LabelSlidingStyled.defaultProps = defaultProps;
LabelSlidingStyled.displayName = 'LabelSlidingStyled';
