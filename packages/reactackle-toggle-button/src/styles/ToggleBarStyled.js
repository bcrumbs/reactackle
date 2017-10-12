import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  boxShadow,
} from 'reactackle-core';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
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
};

/** PROP RECEIVERS */
const barBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { width, height } = theme.reactackle.components.toggleButton.toggleBar;

  const thumbSize = theme.reactackle.components.toggleButton.toggleThumb.size,
    offsetTop = `calc((${getValueString(thumbSize)} - ${getValueString(
      height,
    )}) / 2)`;

  return `
    width: ${getValueString(width)};
    height: ${getValueString(height)};
    border-radius: ${getValueString(height)};
    top: ${offsetTop};
  `;
};

const barStyle = ({ theme: themeFromProvider, checked, disabled }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const componentPath =
    theme.reactackle.components.toggleButton.toggleBar.state;
  let source = null;

  if (!disabled)
    source = checked ? componentPath.checked : componentPath.unchecked;
  else source = componentPath.disabled;

  const backgroundColor = source.backgroundColor.toString();

  return `
    background-color: ${backgroundColor};
  `;
};

const thumbBase = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    size,
    borderRadius,
  } = theme.reactackle.components.toggleButton.toggleThumb;

  const barHeight = theme.reactackle.components.toggleButton.toggleBar.height;

  const offsetTop = `calc((${getValueString(barHeight)} - ${getValueString(
    size,
  )}) / 2)`;

  return css`
    width: ${getValueString(size)};
    height: ${getValueString(size)};
    top: ${offsetTop};
    border-radius: ${getValueString(borderRadius)};
  `;
};

const thumbStyle = ({
  theme: themeFromProvider,
  checked,
  disabled,
  hover,
  focus,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const componentPath =
    theme.reactackle.components.toggleButton.toggleThumb.state;
  let source = null;

  if (!disabled)
    source = checked ? componentPath.checked : componentPath.unchecked;
  else source = componentPath.disabled;

  const { backgroundColor } = source;

  return css`
    background-color: ${backgroundColor};
    ${!disabled && boxShadow()};
    ${!disabled && (hover || focus) && boxShadow(2)};
  `;
};

const thumbPosition = ({
  checked,
  disabled,
  hover,
  focus,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const hoverOffset =
    theme.reactackle.components.toggleButton.toggleThumb.hoverOffset;

  const offset = (hover || focus) && !disabled
                 ? getValueString(hoverOffset) : 0,
    left = checked ? 'auto' : offset,
    right = checked ? offset : 'auto';

  return `
    left: ${left};
    right: ${right};
  `;
};

/** STYLES */
export const ToggleBarStyled = styled.label`
  display: block;
  position: absolute;
  left: 0;
  will-change: transform, box-shadow;
  ${barBase};
  ${barStyle};
  ${transition('background-color')};

  &::before {
    content: '';
    position: absolute;
    ${thumbBase};
    ${thumbPosition};
    ${thumbStyle};
    ${transition('left, box-shadow')};
  }
`;

ToggleBarStyled.propTypes = propTypes;
ToggleBarStyled.defaultProps = defaultProps;
ToggleBarStyled.displayName = 'ToggleBarStyled';
