'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.tooltipIcon.style;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  const { diameter, fontSize } = theme.reactackle.components.tooltipIcon;

  return `
    width: ${getValueString(diameter)};
    height: ${getValueString(diameter)};
    line-height: ${getValueString(diameter)};
    font-size: ${getValueString(fontSize)};
    border-radius: 50%;    
    background-color: ${path.backgroundColor};
    color: ${path.fontColor};

    &:hover {
      background-color: ${path.hover.backgroundColor};
      color: ${path.hover.fontColor};
      outline: none;
    }

    &:focus {
      background-color: ${path.focus.backgroundColor};
      color: ${path.focus.fontColor};
      outline: none;
    }
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const TooltipIconStyled = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  flex-shrink: 0;
  user-select: none;
  ${style};
  ${transition('color, background-color')};
`;

TooltipIconStyled.propTypes = propTypes;
TooltipIconStyled.displayName = 'TooltipIconStyled';
