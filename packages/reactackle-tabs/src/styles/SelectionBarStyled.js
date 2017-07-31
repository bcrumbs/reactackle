'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  colorScheme: PropTypes.oneOf(['default', 'light', 'dark']),
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
  const path = theme.reactackle.components.tabs.bar,
    { backgroundColor } = path.style[colorScheme],
    { thickness } = path;

  return `
    background-color: ${backgroundColor};
    height: ${getValueString(thickness)};
  `;
};

export const SelectionBarStyled = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  ${style};
  ${transition('transform')};
`;

SelectionBarStyled.propTypes = propTypes;
SelectionBarStyled.defaultProps = defaultProps;
SelectionBarStyled.displayName = 'SelectionBarStyled';
