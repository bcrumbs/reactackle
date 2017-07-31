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
    justify-content: flex-end;
    
    & > * {
      margin: ${itemsMarginY} ${itemsMarginX};
    }
    
    ${CardAreaSideStyled} & {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `;
};

/** Styles */
export const CardActionsMainStyled = styled.div`
  display: flex;
  flex-grow: 1;
  text-align: right;
  ${sizeProps};
`;

CardActionsMainStyled.propTypes = propTypes;
CardActionsMainStyled.defaultProps = defaultProps;
CardActionsMainStyled.displayName = 'CardActionsMainStyled';
