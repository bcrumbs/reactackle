'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  regionAsideMaxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  regionAsideShow: PropTypes.bool,
  customMinWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object,
};

const defaultProps = {
  regionAsideMaxWidth: 150,
  regionAsideShow: false,
  customMinWidth: 0,
};
/** Prop Receivers */
const baseProps = ({
  customMinWidth,
  hasRegionAside,
  regionAsideMaxWidth,
  regionAsideShow,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { zIndex } = theme.reactackle.components.dialog.backdrop;

  const {
    minWidth,
    maxWidth,
    margin,
  } = theme.reactackle.components.dialog.window;

  const max = getValueString(maxWidth);

  const dialogMinWidth =
    customMinWidth !== 0
      ? getValueString(customMinWidth)
      : getValueString(minWidth);

  const asideMaxWidth =
    regionAsideMaxWidth !== 0
      ? getValueString(regionAsideMaxWidth)
      : getValueString(theme.reactackle.components.dialog.sideRegion.maxWidth);

  const windowMaxWidth =
    hasRegionAside && regionAsideShow ? `calc(${max} + ${asideMaxWidth})` : max;

  return css`
    padding: ${getValueString(margin)};
    z-index: ${zIndex + 1};
    min-width: ${dialogMinWidth};
    max-width: ${windowMaxWidth};
  `;
};

const fullWindow = ({ fullWindowSize }) =>
  fullWindowSize
    ? `
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
  `
    : '';

/** Styles */
export const OverflowWrapperStyled = styled.div`
  overflow: auto;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: stretch;
  max-height: 100vh;
  width: 100%;
  ${baseProps};
  ${fullWindow};
`;

OverflowWrapperStyled.propTypes = propTypes;
OverflowWrapperStyled.defaultProps = defaultProps;
OverflowWrapperStyled.displayName = 'OverflowWrapperStyled';
