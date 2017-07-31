'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  media,
  transition,
} from 'reactackle-core';

const propTypes = {
  /** Set padding size*/
  paddingSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Remove corresponding paddings */
  removePadding: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Container will occupy all available space */
  spread: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  paddingSize: 'small',
  removePadding: 'none',
  spread: false,
};

/** PROP RECEIVERS */
const padding = ({ paddingSize, removePadding, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.grid.paddingBox[paddingSize];
  const breakpoints = source.breakpoints;

  const pxScale =
    removePadding !== 'horizontal' &&
    breakpoints.map(
      item => css`
        ${media(item.breakpoint)`
          padding-left: ${getValueString(item.paddingX)};
          padding-right: ${getValueString(item.paddingX)};
        `}
      `,
    );

  const px =
    removePadding !== 'horizontal'
      ? css`
      padding-left: ${getValueString(source.paddingX)};
      padding-right: ${getValueString(source.paddingX)};      
      ${pxScale}
    `
      : `
      padding-left: 0;  
      padding-right: 0;  
    `;

  const pyScale =
    removePadding !== 'vertical' &&
    breakpoints.map(
      item => css`
        ${media(item.breakpoint)`
          padding-top: ${getValueString(item.paddingY)};
          padding-bottom: ${getValueString(item.paddingY)};
        `}
      `,
    );

  const py =
    removePadding !== 'vertical'
      ? css`
      padding-top: ${getValueString(source.paddingY)};
      padding-bottom: ${getValueString(source.paddingY)};
      
      ${pyScale}
    `
      : `
        padding-top: 0;
        padding-bottom: 0;
      `;

  return css`
    ${px}
    ${py}
  `;
};

const spread = ({ spread }) => spread && 'flex-grow: 1;';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    font-family: ${fontFamily};
    box-sizing: border-box;
  `;
};

/** STYLES */
export const PaddingBoxStyled = styled.div`
  ${transition('padding')} ${base} ${padding} ${spread};
`;

PaddingBoxStyled.propTypes = propTypes;
PaddingBoxStyled.defaultProps = defaultProps;
PaddingBoxStyled.displayName = 'PaddingBoxStyled';
