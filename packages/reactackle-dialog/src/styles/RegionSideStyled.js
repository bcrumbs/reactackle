'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  sideRadius,
} from 'reactackle-core';

const propTypes = {
  regionAsideMaxWidth: PropTypes.number,
  theme: PropTypes.object,
};

const defaultProps = {
  regionAsideMaxWidth: null,
};

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider, regionAsideMaxWidth }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    backgroundColor,
    maxWidth,
  } = theme.reactackle.components.dialog.sideRegion;

  const { borderRadius } = theme.reactackle.components.dialog.window,
    asideMaxWidthSrc = regionAsideMaxWidth || maxWidth;

  return css`
    background-color: ${backgroundColor};
    max-width: ${getValueString(asideMaxWidthSrc)};
    ${sideRadius('right', `${getValueString(borderRadius)}`)}
  `;
};

/** Styles */
export const RegionSideStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
  ${baseProps};
`;

RegionSideStyled.propTypes = propTypes;
RegionSideStyled.defaultProps = defaultProps;
RegionSideStyled.displayName = 'RegionSideStyled';
