'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  colorScheme: 'dark',
};

const style = ({ theme: themeFromProvider, colorScheme }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { backgroundColor } = theme.reactackle.components.tabs.tabs.style[
      colorScheme
    ],
    { fontColor } = theme.reactackle.components.tabs.tab.style[colorScheme];

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    background-color: ${backgroundColor};
    color: ${fontColor};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const TabsWrapperStyled = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  ${style};
`;

TabsWrapperStyled.propTypes = propTypes;
TabsWrapperStyled.defaultProps = defaultProps;
TabsWrapperStyled.displayName = 'TabsWrapperStyled';
