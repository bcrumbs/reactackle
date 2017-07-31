'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

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
const sizeProps = ({ theme: themeFromProvider, first, last, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    paddingX,
    paddingY,
    paddingYLarge,
    similarElementsSpacing,
  } = theme.reactackle.components.card.headerPrimary.size[size];

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    
    ${first && `padding-top: ${getValueString(paddingYLarge)};`}
    ${last && `padding-bottom: ${getValueString(paddingYLarge)};`}
    
    & + & {
      padding-top: ${getValueString(similarElementsSpacing)};
    }
  `;
};

/** Styles */
export const CardHeaderPrimaryStyled = styled.div`
  display: flex;
  ${sizeProps};
`;

CardHeaderPrimaryStyled.propTypes = propTypes;
CardHeaderPrimaryStyled.defaultProps = defaultProps;
CardHeaderPrimaryStyled.displayName = 'CardHeaderPrimaryStyled';
