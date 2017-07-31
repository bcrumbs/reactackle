'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { paddingX, paddingY } = theme.reactackle.components.tabs.tab;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

export const TabContentStyled = styled.div`
  text-align: center;
  ${base};
`;

TabContentStyled.propTypes = propTypes;
TabContentStyled.displayName = 'TabContentStyled';
