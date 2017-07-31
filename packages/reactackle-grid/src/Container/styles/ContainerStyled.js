'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
  media,
} from 'reactackle-core';

const propTypes = {
  /** Container will have maximum width and will br centered on screen */
  boxed: PropTypes.bool,
  /** Container will occupy all available space */
  spread:
    PropTypes.bool /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */,
  theme: PropTypes.object,
};

const defaultProps = {
  boxed: false,
  spread: false,
};

/** PROP RECEIVERS */
const padding = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const obj = theme.reactackle.components.grid.container.breakpoints;

  const breakpoints = obj.map(
    item => css`
    ${media(item.breakpoint)`
      padding:
        ${getValueString(item.paddingY)} ${getValueString(item.paddingX)};
    `}
  `,
  );

  const { paddingY, paddingX } = theme.reactackle.components.grid.container;

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    ${breakpoints}
  `;
};

const spread = ({ spread }) => spread && 'flex-grow: 1;';

const boxed = ({ boxed, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  return boxed
    ? `max-width:
        ${getValueString(theme.reactackle.components.grid.row.maxWidth)};`
    : 'max-width: 100%;';
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
export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  ${transition('padding')};
  ${base} ${padding} ${boxed} ${spread};
`;

ContainerStyled.propTypes = propTypes;
ContainerStyled.defaultProps = defaultProps;
ContainerStyled.displayName = 'ContainerStyled';
