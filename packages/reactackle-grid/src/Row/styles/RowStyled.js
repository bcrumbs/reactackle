'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString, media } from 'reactackle-core';

const propTypes = {
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Fix row width */
  fixedWidth: PropTypes.bool,
  /**
   * If true, Row will have negative margins to compensate Column gutters
   */
  compensateGutter: PropTypes.bool,
  /** If true, content will wrap */
  wrapContent: PropTypes.bool,
  /**
   * Set size ratio for row
   * @example Row with expandRatio={2} will take twice more size than Row
   * with expandRatio={1}
   */
  expandRatio: PropTypes.number,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  layoutDirection: 'horizontal',
  compensateGutter: false,
  fixedWidth: false,
  wrapContent: false,
  expandRatio: 0.0,
};

/** PROP RECEIVERS */
const width = ({ compensateGutter, fixedWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const maxWidth = fixedWidth
    ? `${getValueString(theme.reactackle.components.grid.row.maxWidth)}`
    : '100%';

  const gutter = getValueString(
    theme.reactackle.components.grid.column.gutterHorizontal,
  );

  const defaultMargin = `calc(-${gutter} / 2})`,
    gutterScale = theme.reactackle.components.grid.column.breakpoints;

  const gutteredMaxWidth = `calc(${maxWidth} - ${gutter})`;

  const breakpoints = gutterScale.map(item => {
    const margin = `calc(-${getValueString(item.gutterHorizontal)} / 2)`;

    const width = `calc(${maxWidth} + ${getValueString(
      item.gutterHorizontal,
    )})`;

    return css`
      ${media(item.breakpoint)`
        margin-left: ${margin};
        margin-right: ${margin};
        width: ${width};
        max-width: ${width};
      `}
    `;
  });

  return compensateGutter
    ? css`
      margin-left: ${defaultMargin};
      margin-right: ${defaultMargin};
      width: ${gutteredMaxWidth};
      max-width: ${gutteredMaxWidth};
      
      ${breakpoints}
    `
    : `
      margin: auto;
      width: 100%;
      max-width: ${maxWidth};
    `;
};

const contentFlow = ({ layoutDirection, wrapContent }) => {
  const flexDirection = layoutDirection === 'horizontal' ? 'row' : 'column';
  const wrap = wrapContent && 'flex-wrap: wrap;';

  return `
    flex-direction: ${flexDirection};
    ${wrap}
  `;
};

const expand = ({ expandRatio }) => `flex-grow: ${expandRatio};`;

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
export const RowStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  ${base} ${width} ${expand} ${contentFlow};
`;

RowStyled.propTypes = propTypes;
RowStyled.defaultProps = defaultProps;
RowStyled.displayName = 'RowStyled';
