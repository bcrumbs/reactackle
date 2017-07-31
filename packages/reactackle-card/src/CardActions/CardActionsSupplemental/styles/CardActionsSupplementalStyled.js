'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

import { CardAreaSideStyled } from '../../../CardAreaSide/styles/CardAreaSideStyled';

const propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  theme: PropTypes.object,
};

const defaultProps = {
  size: 'default',
};

/** Prop Receivers */
const sizeProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    itemsSpacingHorizontal,
    itemsSpacingVertical,
  } = theme.reactackle.components.card.actions.size[size];

  const itemsMarginY = getValueString(itemsSpacingVertical),
    itemsMarginX = getValueString(itemsSpacingHorizontal);

  return css`
    margin: -${itemsMarginY} -${itemsMarginX};
    justify-content: flex-start;
    
    & > * {
      margin: ${itemsMarginY} ${itemsMarginX};
    }
    
    ${CardAreaSideStyled} & {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    }
  `;
};

/** Styles */
export const CardActionsSupplementalStyled = styled.div`
  display: flex;
  text-align: left;
  ${sizeProps};
`;

CardActionsSupplementalStyled.propTypes = propTypes;
CardActionsSupplementalStyled.defaultProps = defaultProps;
CardActionsSupplementalStyled.displayName = 'CardActionsSupplementalStyled';
