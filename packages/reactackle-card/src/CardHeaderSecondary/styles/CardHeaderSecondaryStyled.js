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
    paddingX,
    paddingY,
  } = theme.reactackle.components.card.headerSecondary.size[size];

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

/** Styles */
export const CardHeaderSecondaryStyled = styled.div`
  display: flex;
  ${sizeProps};
`;

CardHeaderSecondaryStyled.propTypes = propTypes;
CardHeaderSecondaryStyled.defaultProps = defaultProps;
CardHeaderSecondaryStyled.displayName = 'CardHeaderSecondaryStyled';
