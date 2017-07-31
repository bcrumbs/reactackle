'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const styleProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    messageCheckboxSpacing,
    lineHeight,
    fontSize,
    fontColor,
  } = theme.reactackle.components.checkbox.errorMessage;

  const checkboxSize = getValueString(
    theme.reactackle.components.checkbox.input.size,
  );

  const checkboxTextSpacing = getValueString(
    theme.reactackle.components.checkbox.label.checkboxTextSpacing,
  );

  const offset = `calc(${checkboxSize} + ${checkboxTextSpacing})`;

  return css`
    padding-left: ${offset};
    font-size: ${getValueString(fontSize)};
    color: ${fontColor};
    line-height: ${lineHeight};
    margin-top: ${getValueString(messageCheckboxSpacing)};
  `;
};

export const MessageStyled = styled.div`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${styleProps};
`;

MessageStyled.propTypes = propTypes;
MessageStyled.displayName = 'MessageStyled';
