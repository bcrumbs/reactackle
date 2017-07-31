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
    subtitleTitleSpacing,
  } = theme.reactackle.components.card.subheaderPrimary.size[size];

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${fontColor};
    font-weight: ${fontWeight};
    margin-top: ${getValueString(subtitleTitleSpacing)};
    
    ${CardMediaStyled} & { color: ${fontColorInMedia}; }
  `;
};

/** Styles */
export const CardSubheaderStyled = styled.div`
  margin: 0;
  ${fontProps};
`;

CardSubheaderStyled.propTypes = propTypes;
CardSubheaderStyled.defaultProps = defaultProps;
CardSubheaderStyled.displayName = 'CardSubheaderStyled';
