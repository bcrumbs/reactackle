'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getValueString, extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  spread: PropTypes.bool,
  scrollable: PropTypes.bool,
  bordered: PropTypes.bool,
  scrollableMinHeight: PropTypes.number,
  theme: PropTypes.object,
};

const defaultProps = {
  spread: false,
  scrollable: false,
  bordered: false,
  scrollableMinHeight: 200,
};

/** Prop Receivers */
const spread = ({ spread }) => (spread ? 'flex-grow: 1;' : '');

const scrollable = ({
  scrollable,
  scrollableMinHeight,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const minHeightSource =
    scrollableMinHeight ||
    theme.reactackle.components.sidebar.region.scrollableMinHeight;

  return scrollable
    ? css`
      overflow-y: auto;
      overflow-x: hidden;
      min-height: ${getValueString(minHeightSource)};
    `
    : 'flex-shrink: 0;';
};

const bordered = ({ theme: themeFromProvider, bordered }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    thickness,
    color,
  } = theme.reactackle.components.sidebar.region.border;

  return bordered ? `border: ${getValueString(thickness)} solid ${color};` : '';
};

/** Styles */
export const SidebarRegionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  ${spread} ${bordered} ${scrollable};
`;

SidebarRegionStyled.propTypes = propTypes;
SidebarRegionStyled.defaultProps = defaultProps;
SidebarRegionStyled.displayName = 'SidebarRegionStyled';
