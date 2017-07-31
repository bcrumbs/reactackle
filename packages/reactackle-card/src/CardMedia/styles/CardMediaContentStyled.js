'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const styleProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const backgroundColor =
    theme.reactackle.components.card.media.overlayBackgroundColor;

  return `background-color: ${backgroundColor};`;
};

/** Styles */
export const CardMediaContentStyled = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;

  ${styleProps};
`;

CardMediaContentStyled.propTypes = propTypes;
CardMediaContentStyled.displayName = 'CardMediaContentStyled';
