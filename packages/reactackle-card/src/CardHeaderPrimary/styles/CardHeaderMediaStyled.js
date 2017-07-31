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
const sizeProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingX: headerPaddingX,
    paddingY: headerPaddingY,
  } = theme.reactackle.components.card.headerPrimary.size[size];

  const {
    width,
    height,
    marginX,
    titleMediaSpacing,
    marginY,
  } = theme.reactackle.components.card.headerMedia.size[size];

  const mx = `calc(${getValueString(marginX)} - ${getValueString(
    headerPaddingX,
  )})`;

  const my = `calc(${getValueString(marginY)} - ${getValueString(
    headerPaddingY,
  )})`;

  return `
    width: ${getValueString(width)};
    height: ${getValueString(height)};
    margin: ${my}px ${mx}px ${my}px ${getValueString(titleMediaSpacing)};
  `;
};

/** Styles */
export const CardHeaderMediaStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  ${sizeProps};
`;

CardHeaderMediaStyled.propTypes = propTypes;
CardHeaderMediaStyled.defaultProps = defaultProps;
CardHeaderMediaStyled.displayName = 'CardHeaderMediaStyled';
