'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  dense: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  dense: false,
};

/** Prop Receivers */
const styleProps = ({
  theme: themeFromProvider,
  colorScheme,
  focus,
  disabled,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.message.style;

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

const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    messageSelectSpacing,
    fontSize,
    lineHeight,
  } = theme.reactackle.components.selectBox.message;

  return `
    margin-top: ${getValueString(messageSelectSpacing)};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
  `;
};

/** STYLES */
export const MessageStyled = styled.div`
  flex-grow: 1;
  ${baseProps};
  ${styleProps};
  ${transition('color')};
`;

MessageStyled.propTypes = propTypes;
MessageStyled.defaultProps = defaultProps;
MessageStyled.displayName = 'MessageStyled';
