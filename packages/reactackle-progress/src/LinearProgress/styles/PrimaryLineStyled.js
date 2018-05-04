import styled, { css, keyframes } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const barProgress = keyframes`
  0% {
    transform: scaleX(1) translateX(-100%);
  }

  50% {
    transform: scaleX(1) translateX(0%);
  }

  75% {
    transform: scaleX(1) translateX(0%);
    animation-timing-function: cubic-bezier(.28,.62,.37,.91);
  }

  100% {
    transform: scaleX(0) translateX(0%);
  }
`;

const indeterminate = ({ indeterminate }) => indeterminate
  ? css`
    background-color: transparent !important;
    width: 100%;
    transform-origin: right center;
    animation: ${barProgress} 2s linear infinite;
  `
  : '';

const style = ({ theme: themeFromProvider }) => {
  const componentTheme =
    extractThemeOrDefault(themeFromProvider).reactackle.components.progress;

  return css`
    height: ${getValueString(componentTheme.linear.thickness)};
  `;
};

export const PrimaryLineStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left center;
  will-change: transform;
  ${style}
  ${indeterminate}
  ${transition('transform, background-color', '800ms')}
`;

PrimaryLineStyled.displayName = 'PrimaryLineStyled';
