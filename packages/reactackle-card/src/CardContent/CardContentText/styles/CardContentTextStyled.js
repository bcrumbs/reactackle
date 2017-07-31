'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  theme: PropTypes.object,
};

const defaultProps = {
  size: 'default',
};

/** Prop Receivers */
const fontProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    fontColor,
    fontWeight,
    similarElementsSpacing,
  } = theme.reactackle.components.card.contentText.size[size];

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${fontColor};
    font-weight: ${fontWeight};
    
    & + & { margin-top: ${getValueString(similarElementsSpacing)}; }
  `;
};

/** Styles */
export const CardContentTextStyled = styled.p`
  position: relative;
  margin: 0;
  ${fontProps};
`;

CardContentTextStyled.propTypes = propTypes;
CardContentTextStyled.defaultProps = defaultProps;
CardContentTextStyled.displayName = 'CardContentTextStyled';
