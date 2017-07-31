'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';
import { CardMediaStyled } from '../../CardMedia/styles/CardMediaStyled';

import { CardHeaderPrimaryStyled } from '../../CardHeaderPrimary/styles/CardHeaderPrimaryStyled';

const propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  theme: PropTypes.object,
};

const defaultProps = {
  first: false,
  last: false,
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
  } = theme.reactackle.components.card.contentText.size[size];

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${fontColor};
    font-weight: ${fontWeight};
    
    ${CardMediaStyled} & { color: ${fontColorInMedia}; }
  `;
};

const sizeProps = ({ theme: themeFromProvider, first, last, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingX,
    paddingY,
    paddingYLarge,
    similarElementsSpacing,
  } = theme.reactackle.components.card.content.size[size];

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    
    ${first && `padding-top: ${getValueString(paddingYLarge)};`}
    ${last && `padding-bottom: ${getValueString(paddingYLarge)};`}
    
    & + & {
      padding-top: ${getValueString(similarElementsSpacing)};
    }
    
    ${CardHeaderPrimaryStyled} + & {
      padding-top: 0;
    }    
  `;
};

/** Styles */
export const CardContentStyled = styled.div`
  position: relative;
  ${fontProps} ${sizeProps};
`;

CardContentStyled.propTypes = propTypes;
CardContentStyled.defaultProps = defaultProps;
CardContentStyled.displayName = 'CardContentStyled';
