import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'left',
};

/** PROP RECEIVERS */
const textBase = ({ theme: themeFromProvider, labelPosition }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    fontSize,
    lineHeight,
    toggleLabelSpacing,
  } = theme.reactackle.components.toggleButton.label;

  const { width } = theme.reactackle.components.toggleButton.toggleBar,
    thumbSize = theme.reactackle.components.toggleButton.toggleThumb.size;

  const thumbSizeValue = getValueString(thumbSize),
    fontSizeValue = getValueString(fontSize);

  const labelOffsetTop = `calc((${thumbSizeValue} - ${fontSizeValue} * ${lineHeight}) / 2)`;

  const spacingLeft =
    labelPosition === 'left' || !labelPosition
      ? '0'
      : `calc(${getValueString(toggleLabelSpacing)} + ${getValueString(
          width,
        )})`;

  const spacingRight =
    labelPosition === 'left'
      ? `calc(${getValueString(toggleLabelSpacing)} + ${getValueString(width)})`
      : '0';

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    padding-top: ${labelOffsetTop};
    padding-left: ${spacingLeft};
    padding-right: ${spacingRight};
  `;
};

const textStyle = ({ checked, disabled, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const componentPath = theme.reactackle.components.toggleButton.label.state;
  let source = null;

  if (!disabled)
    source = checked ? componentPath.checked : componentPath.unchecked;
  else source = componentPath.disabled;

  const { fontColor } = source;

  return `
    color: ${fontColor};
  `;
};

/** STYLES */
export const ToggleLabelTextBoxStyled = styled.span`
  display: flex;
  ${textBase};
  ${textStyle};
`;

ToggleLabelTextBoxStyled.propTypes = propTypes;
ToggleLabelTextBoxStyled.defaultProps = defaultProps;
ToggleLabelTextBoxStyled.displayName = 'ToggleLabelTextBoxStyled';
