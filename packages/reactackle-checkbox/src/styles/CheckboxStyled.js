'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  textFree: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  textFree: false,
};

const checkboxSizeProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { size } = theme.reactackle.components.checkbox.input;

  const { fontSize, lineHeight } = theme.reactackle.components.checkbox.label;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    min-width: ${getValueString(size)};
    min-height: ${getValueString(size)};
    line-height: ${lineHeight};
    font-size: ${getValueString(fontSize)};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }    
  `;
};

const spacing = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { checkboxesSpacing: spacing } = theme.reactackle.components.checkbox;

  return `& + & { margin-top: ${getValueString(spacing)}; }`;
};

export const CheckboxStyled = styled.div`
  position: relative;
  user-select: none;
  ${spacing};
  ${checkboxSizeProps};
`;

CheckboxStyled.propTypes = propTypes;
CheckboxStyled.defaultProps = defaultProps;
CheckboxStyled.displayName = 'CheckboxStyled';
