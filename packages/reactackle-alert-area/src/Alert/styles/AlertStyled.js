import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  animateExit: PropTypes.bool,
  vertical: PropTypes.bool,
  colorScheme: PropTypes.oneOf([
    'default',
    'warning',
    'error',
    'success',
    'info',
  ]),
};

const defaultProps = {
  animateExit: false,
  vertical: false,
  colorScheme: 'default',
};

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    borderRadius,
    minWidth,
    maxWidth,
    fontSize,
  } = theme.reactackle.components.alertsArea.item.colorScheme;

  return css`
    border-radius: ${getValueString(borderRadius)};
    min-width: ${getValueString(minWidth)};
    max-width: ${getValueString(maxWidth)};
    font-size: ${getValueString(fontSize)};
  `;
};

const layoutDirection = ({ vertical }) => vertical
  ? `
    flex-direction: column;
    align-items: stretch;
  `
  : `
    layout-direction: row;
    align-items: center;
  `;

const animation = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    name,
    speed,
    timingFunction,
  } = theme.reactackle.components.alertsArea.item.animation.in;

  return `animation: ${name} ${speed} ${timingFunction};`;
};

const animationExit = ({ theme: themeFromProvider, animateExit }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    name,
    speed,
    timingFunction,
  } = theme.reactackle.components.alertsArea.item.animation.out;

  return animateExit && `animation: ${name} ${speed} ${timingFunction};`;
};

const colorScheme = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    textColor,
    backgroundColor,
  } = theme.reactackle.components.alertsArea.item.colorScheme[colorScheme];

  return `
    color: ${textColor};
    background-color: ${backgroundColor};
  `;
};

export const AlertStyled = styled.div`
  width: 100%;
  display: flex;
  ${style}
  ${layoutDirection}
  ${animation}
  ${animationExit}
  ${colorScheme}
`;

AlertStyled.propTypes = propTypes;
AlertStyled.defaultProps = defaultProps;
