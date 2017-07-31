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

const baseProps = ({ theme: themeFromProvider, hasIcon }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const marginTop = getValueString(
    theme.reactackle.components.tabs.icon.iconTextSpacing,
  );

  return hasIcon ? `margin-top: ${marginTop};` : '';
};

export const TabTextStyled = styled.div`
  text-overflow: ellipsis;
  ${baseProps};
`;

TabTextStyled.propTypes = propTypes;
TabTextStyled.displayName = 'TabTextStyled';
