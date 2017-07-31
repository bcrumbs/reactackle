'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, transition } from 'reactackle-core';

const propTypes = {
  scrollable: PropTypes.bool,
};

const defaultProps = {
  scrollable: false,
};

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { zIndex } = theme.reactackle.components.dialog.window;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    z-index: ${zIndex + 1};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

const visible = ({ visible }) => `display: ${visible ? 'flex' : 'none'};`;

/** Styles */
export const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  overflow: hidden;
  will-change: transform, opacity;
  ${visible};
  ${baseProps};
  ${transition('opacity, transform')};
`;

ModalStyled.propTypes = propTypes;
ModalStyled.defaultProps = defaultProps;
ModalStyled.displayName = 'ModalStyled';
