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

/** PropReceivers */
const styleProps = ({ theme: themeFromProvider, size }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    width,
    height,
    imageTextSpacing,
  } = theme.reactackle.components.card.headerSecondaryImage.size[size];

  return `
    width: ${getValueString(width)};
    height: ${getValueString(height)};
    margin-right: ${getValueString(imageTextSpacing)};
  `;
};

/** Styles */
export const CardHeaderSecondaryImageStyled = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  ${styleProps};
`;

CardHeaderSecondaryImageStyled.propTypes = propTypes;
CardHeaderSecondaryImageStyled.defaultProps = defaultProps;
CardHeaderSecondaryImageStyled.displayName = 'CardHeaderSecondaryImageStyled';
