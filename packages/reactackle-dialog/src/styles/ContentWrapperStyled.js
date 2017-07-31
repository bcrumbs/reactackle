'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  boxShadow,
  animations,
} from 'reactackle-core';

const propTypes = {
  fullWindowSize: PropTypes.bool,
  scrollable: PropTypes.bool,
  hasTransparentBg: PropTypes.bool,
  hasRegionAside: PropTypes.bool,
  regionAsideMaxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  regionAsideShow: PropTypes.bool,
  customMinWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object,
};

const defaultProps = {
  fullWindowSize: false,
  scrollable: false,
  hasTransparentBg: false,
  hasRegionAside: false,
  regionAsideMaxWidth: 150,
  regionAsideShow: false,
  customMinWidth: 0,
};

const boxShadow3 = boxShadow(3);

/** Prop Receivers */
const baseProps = ({
  theme: themeFromProvider,
  fullWindowSize,
  scrollable,
  hasTransparentBg,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    zIndex,
    backgroundColor,
    margin,
    borderRadius,
  } = theme.reactackle.components.dialog.window;

  const dialogBgColor = hasTransparentBg ? 'transparent' : backgroundColor,
    dialogBorderRadius = hasTransparentBg ? '0' : getValueString(borderRadius);

  return css`
    z-index: ${zIndex};
    background-color: ${dialogBgColor};
    max-height: calc(100vh - ${getValueString(margin)} * 2);
    border-radius: ${getValueString(dialogBorderRadius)};
    animation: ${animations.fadeIn} 300ms ease-in;
    ${scrollable && 'max-height: 100%;'}
    ${fullWindowSize &&
      `
      max-width: 100vw;
      width: 100%;
      height: 100%;
      flex-grow: 1;
    `}
  `;
};

/** Styles */
export const ContentWrapperStyled = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 100%;
  ${baseProps};
  ${boxShadow3};
`;

ContentWrapperStyled.propTypes = propTypes;
ContentWrapperStyled.defaultProps = defaultProps;
ContentWrapperStyled.displayName = 'ContentWrapperStyled';
