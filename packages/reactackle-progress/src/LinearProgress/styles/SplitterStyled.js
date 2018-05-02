'use strict';

import styled, { css, keyframes } from 'styled-components';
import Color from 'color';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const splitterProgress = keyframes`
  0% {
    transform: scaleX(.75) translateX(-125%);
  }

  30% {
    transform: scaleX(.75) translateX(-125%);
    animation-timing-function: cubic-bezier(.42,0,.6,.8);
  }

  90% {
    transform: scaleX(.75) translateX(125%);
  }

  100% {
    transform: scaleX(.75) translateX(125%);
  }
`;

const style = ({ theme: themeFromProvider }) => {
  const componentTheme =
    extractThemeOrDefault(themeFromProvider).reactackle.components.progress;

  return css`
    height: ${getValueString(componentTheme.linear.thickness)};
    background-color: ${Color(componentTheme.linear.mainLine.color).string()};
  `;
};

export const SplitterStyled = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  transform-origin: center center;
  animation: ${splitterProgress} 2s linear infinite;
  ${style}
  ${transition('transform, background-color', '800ms')}
`;

SplitterStyled.displayName = 'SplitterStyled';
