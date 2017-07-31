'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  appFixed: PropTypes.bool,
};

const defaultProps = {
  appFixed: false,
};

const appFixed = ({ appFixed }) =>
  appFixed
    ? `
      overflow-y: auto;
      flex-shrink: initial;
    `
    : '';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    font-family: ${fontFamily};
  `;
};

export const MainRegionStyled = styled.div`
  width: 100%;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  ${base} ${appFixed};
`;

MainRegionStyled.propTypes = propTypes;
MainRegionStyled.defaultProps = defaultProps;
MainRegionStyled.displayName = 'MainRegionStyled';
