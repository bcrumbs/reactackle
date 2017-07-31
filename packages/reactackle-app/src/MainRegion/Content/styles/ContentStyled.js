'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  appFixed: PropTypes.bool,
  theme: PropTypes.object,
};
const defaultProps = {
  appFixed: false,
};

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { backgroundColor } = theme.reactackle.components.app.content;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
  `;
};

const appFixed = ({ appFixed }) =>
  appFixed
    ? `
      overflow-y: auto;
      flex-shrink: initial;
    `
    : '';

export const ContentStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  ${style} ${appFixed};
`;

ContentStyled.propTypes = propTypes;
ContentStyled.defaultProps = defaultProps;
ContentStyled.displayName = 'ContentStyled';
