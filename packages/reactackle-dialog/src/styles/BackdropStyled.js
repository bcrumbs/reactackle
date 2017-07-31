'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  animations,
} from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { margin } = theme.reactackle.components.dialog.window;

  const {
    backgroundColor,
    zIndex,
  } = theme.reactackle.components.dialog.backdrop;

  return `
    padding: ${getValueString(margin)};
    z-index: ${zIndex};
    background-color: ${backgroundColor};
    animation: ${animations.fadeIn} 300ms ease-in;
  `;
};

export const BackdropStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${baseProps};
`;

BackdropStyled.propTypes = propTypes;
BackdropStyled.displayName = 'BackdropStyled';
