'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  visible: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  positionX: 'right',
  positionY: 'bottom',
  visible: true,
};

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    backgroundColor,
    borderRadius,
    paddingY,
    paddingX,
    fontSize,
    fontColor,
    lineHeight,
    minWidth,
    maxWidth,
  } = theme.reactackle.components.tooltip;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return css`
    background-color: ${backgroundColor};
    border-radius: ${getValueString(borderRadius)};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    font-size: ${getValueString(fontSize)};
    color: ${fontColor};
    line-height: ${lineHeight};
    min-width: ${getValueString(minWidth)};
    max-width: ${getValueString(maxWidth)};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

const visibility = ({ visible }) => `opacity: ${visible ? '1' : '0'};`;

const position = ({ positionY, positionX, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { tooltipRefererSpacing } = theme.reactackle.components.tooltip;
  const spacing = getValueString(tooltipRefererSpacing);

  const alignX =
    positionX === 'left'
      ? `right: ${spacing};`
      : `
        left: ${spacing};
        transform: translateX(-100%);
      `;

  const alignY =
    positionY === 'top'
      ? `
        top: -${spacing};
        transform: translateY(-100%);
      `
      : `
        bottom: -${spacing};
        transform: translateY(100%);
      `;

  return css`
    ${alignX};
    ${alignY};
  `;
};

/** Styles */
export const TooltipStyled = styled.div`
  position: absolute;
  text-align: left;
  pointer-events: none;
  opacity: 0;
  width: 100%;
  user-select: none;
  ${transition('top, bottom, left, right, opacity')};
  ${baseProps};
  ${visibility};
  ${position};
`;

TooltipStyled.propTypes = propTypes;
TooltipStyled.defaultProps = defaultProps;
TooltipStyled.displayName = 'TooltipStyled';
