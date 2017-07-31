'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  fixed: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    font-family: ${fontFamily};
  `;
};

export const BottomRegionStyled = styled.div`
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
  ${base};
`;

BottomRegionStyled.propTypes = propTypes;
BottomRegionStyled.defaultProps = defaultProps;
BottomRegionStyled.displayName = 'BottomRegionStyled';
