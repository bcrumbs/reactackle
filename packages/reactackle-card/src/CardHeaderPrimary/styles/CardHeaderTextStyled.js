'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';
import { CardMediaStyled } from '../../CardMedia/styles/CardMediaStyled';

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
    fontColorInMedia,
    fontWeight,
  } = theme.reactackle.components.card.headerPrimary.size[size];

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${fontColor};
    font-weight: ${fontWeight};
    
    ${CardMediaStyled} & { color: ${fontColorInMedia}; }
  `;
};

/** Styles */
export const CardHeaderTextStyled = styled.h2`
  margin: 0;
  ${fontProps};
`;

CardHeaderTextStyled.propTypes = propTypes;
CardHeaderTextStyled.defaultProps = defaultProps;
CardHeaderTextStyled.displayName = 'CardHeaderTextStyled';
