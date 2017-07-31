'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

import { CardAreaSideStyled } from '../../CardAreaSide/styles/CardAreaSideStyled';

const propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'large', 'xlarge']),
  theme: PropTypes.object,
};

const defaultProps = {
  size: 'default',
};

const sizeProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.card.actions.size[size];

  const { paddingY: mainPaddingY, paddingX: mainPaddingX } = source.mainRegion;

  const { paddingY: sidePaddingY, paddingX: sidePaddingX } = source.sideRegion;

  return css`
    padding: ${getValueString(mainPaddingY)} ${getValueString(mainPaddingX)};
    
    ${CardAreaSideStyled} & {
      padding: ${getValueString(sidePaddingY)} ${getValueString(sidePaddingX)};
      flex-direction: column;
    }
  `;
};

export const CardActionsStyled = styled.div`
  display: flex;
  position: relative;
  ${sizeProps};
`;

CardActionsStyled.propTypes = propTypes;
CardActionsStyled.defaultProps = defaultProps;
CardActionsStyled.displayName = 'CardActionsStyled';
