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
  } = theme.reactackle.components.card.headerSecondary.size[size];

  return `
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${fontColor};
    font-weight: ${fontWeight};
  `;
};

/** Styles */
export const CardHeaderSecondaryTextStyled = styled.div`
  margin: 0;
  ${fontProps};
`;

CardHeaderSecondaryTextStyled.propTypes = propTypes;
CardHeaderSecondaryTextStyled.defaultProps = defaultProps;
CardHeaderSecondaryTextStyled.displayName = 'CardHeaderSecondaryTextStyled';
