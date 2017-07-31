'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  transparentBg: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  transparentBg: false,
};

/** Prop Receivers */
const sizeProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    width,
    height,
    imgSize,
  } = theme.reactackle.components.dialog.closeButton;

  return `
    width: ${getValueString(width)};
    height: ${getValueString(height)};
    line-height: ${getValueString(height)};
    font-size: ${getValueString(imgSize)};
  `;
};

const styleProps = ({ theme: themeFromProvider, transparentBg }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.dialog.closeButton.style,
    source = transparentBg ? path.modalWithTransparentBg : path;

  return `
    color: ${source.color};
    opacity: ${source.opacity};

    &:hover {
      color: ${source.hover.color};
      opacity: ${source.hover.opacity};
    }

    &:focus {
      color: ${source.focus.color};
      opacity: ${source.focus.opacity};
    }
  `;
};

/** Styles */
export const DialogCloseButtonStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  z-index: 9;
  cursor: pointer;
  ${sizeProps} ${styleProps} ${transition('color, opacity')};
`;

DialogCloseButtonStyled.propTypes = propTypes;
DialogCloseButtonStyled.defaultProps = defaultProps;
DialogCloseButtonStyled.displayName = 'DialogCloseButtonStyled';
