import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const propTypes = {
  isBounded: PropTypes.bool,
};

const defaultProps = {
  isBounded: false,
};

const textStyle = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
  } = theme.reactackle.components.tag;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
  `;
};

const isBounded = ({ isBounded }) => isBounded && `
  white-space: nowrap;
`;

export const TextStyled = styled.span`
  color: currentColor;
  ${textStyle}
  ${isBounded}
`;

TextStyled.propTypes = propTypes;
TextStyled.defaultProps = defaultProps;
