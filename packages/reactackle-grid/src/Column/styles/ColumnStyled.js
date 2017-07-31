'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  media,
  defaultTheme,
} from 'reactackle-core';

const propTypes = {
  /**
   * Shows how much space takes the column on different screen sizes.
   * Total number of columns: 12.
   */
  size: PropTypes.shape({
    xsmall: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    xlarge: PropTypes.number,
  }),
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Set content align along horizontal axis */
  horizontalAlign: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
  ]),
  /** Set content align along vertical axis */
  verticalAlign: PropTypes.oneOf([
    'stretch',
    'center',
    'start',
    'end',
    'baseline',
  ]),
  /** Removes column paddings */
  collapsed: PropTypes.bool,
  /**
   * Shows on which screens block should be centered.
   * Centering starts from the smallest breakpoint, marked as true, up to
   * the next breakpoint marked as false.
   */
  centered: PropTypes.shape({
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
  }),
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  size: { xsmall: 12 },
  layoutDirection: 'vertical',
  horizontalAlign: 'start',
  verticalAlign: 'start',
  collapsed: false,
  centered: null,
};

/** PROP RECEIVERS */
const collapsed = ({ collapsed, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    gutterHorizontal,
    breakpoints,
  } = theme.reactackle.components.grid.column;

  const baseGutter = `calc(${getValueString(gutterHorizontal)} / 2)`;

  const paddingScale = breakpoints.map(item => {
    const gutter = `calc(${getValueString(item.gutterHorizontal)} / 2)`;

    return css`
      ${media(item.breakpoint)`
        padding-left: ${gutter};
        padding-right: ${gutter};
      `}
    `;
  });

  return collapsed
    ? `
      padding-left: 0;
      padding-right: 0;
    `
    : css`
      padding-left: ${baseGutter};
      padding-right: ${baseGutter};      
      ${paddingScale}
    `;
};

const centered = ({ centered, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const mediaQuery = theme.reactackle.breakpoints;

  const breakpoints = Object.keys(centered || {}).map(key => {
    const isBase = key === 'xsmall';

    if (isBase) {
      return centered[key]
        ? `
            margin-left: auto;
            margin-right: auto;
          `
        : `
            margin-left: 0;
            margin-right: 0;
          `;
    } else {
      return centered[key]
        ? css`    
          ${media(mediaQuery[key])`
            margin-left: auto;
            margin-right: auto;
          `}
        `
        : css`    
          ${media(mediaQuery[key])`
            margin-left: 0;
            margin-right: 0;
          `}
        `;
    }
  });

  return centered ? breakpoints : null;
};

const calculateColumnWidth = (
  columnsAmount,
  totalColumns = defaultTheme.totalColumns,
) => `${columnsAmount / totalColumns * 100}%`;

const size = ({ size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const mediaQuery = theme.reactackle.breakpoints;

  const breakpoints = Object.keys(size || {}).map(
    key =>
      key === 'xsmall'
        ? `
        width:
          ${calculateColumnWidth(size[key], theme.reactackle.totalColumns)};
        max-width:
          ${calculateColumnWidth(size[key], theme.reactackle.totalColumns)};
      `
        : css`
        ${media(mediaQuery[key])`
          width:
            ${calculateColumnWidth(size[key], theme.reactackle.totalColumns)};
          max-width:
            ${calculateColumnWidth(size[key], theme.reactackle.totalColumns)};
        `}
      `,
  );

  return size ? breakpoints : null;
};

const mapMain = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  evenSpaceBetween: 'space-between',
  evenSpaceAround: 'space-around',
};

const mapCross = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
};

const contentFlow = ({ layoutDirection, mainAxisAlign, crossAxisAlign }) => {
  const flowDirection = layoutDirection === 'horizontal' ? 'row' : 'column';

  return `
    flex-direction: ${flowDirection};
    justify-content: ${mapMain[mainAxisAlign]};
    align-items: ${mapCross[crossAxisAlign]};
  `;
};

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
export const ColumnStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  max-width: 100%;
  ${base} ${collapsed} ${centered} ${size} ${contentFlow};
`;

ColumnStyled.propTypes = propTypes;
ColumnStyled.defaultProps = defaultProps;
ColumnStyled.displayName = 'ColumnStyled';
