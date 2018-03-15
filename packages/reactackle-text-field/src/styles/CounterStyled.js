import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
};

/** PROP RECEIVERS */
const styleProps = ({ theme: themeFromProvider, error, focus, disabled }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.textfield.symbolCounter.style;

  let source = null;
  if (!disabled) {
    if (error) source = path.error;
    else if (focus) source = path.focus;
    else source = path;
  } else {
    source = path.disabled;
  }

  const { fontColor } = source;

  return `color: ${fontColor};`;
};

const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    counterSpacing,
    counterMessageSpacing,
    fontSize,
    lineHeight,
  } = theme.reactackle.components.textfield.symbolCounter;

  return `
    margin-top: ${getValueString(counterSpacing)};
    margin-left: ${getValueString(counterMessageSpacing)};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
  `;
};

const animationPulse = keyframes`
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

const animation = ({ error }) => error && `
  animation: ${animationPulse} 200ms;
  animation-iteration-count: 3;
`;

/** STYLES */
export const CounterStyled = styled.div`
  text-align: right;
  user-select: none;
  ${baseProps};
  ${styleProps};
  ${animation};
`;

CounterStyled.propTypes = propTypes;
CounterStyled.defaultProps = defaultProps;
CounterStyled.displayName = 'CounterStyled';
