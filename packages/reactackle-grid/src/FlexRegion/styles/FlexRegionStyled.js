'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  /** Container will occupy all available space */
  spread: PropTypes.bool,
  /** Set content flow direction */
  layoutDirection: PropTypes.oneOf(['horizontal', 'vertical']),
};

const defaultProps = {
  spread: false,
  layoutDirection: 'vertical',
};

/** PROP RECEIVERS */
const contentFlow = ({ layoutDirection }) => {
  const flexDirection = layoutDirection === 'horizontal' ? 'row' : 'column';

  return `
    flex-direction: ${flexDirection};
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
export const FlexRegionStyled = styled.div`
  width: auto;
  display: flex;
  ${base} ${spread} ${contentFlow};
`;

FlexRegionStyled.propTypes = propTypes;
FlexRegionStyled.defaultProps = defaultProps;
FlexRegionStyled.displayName = 'FlexRegionStyled';
