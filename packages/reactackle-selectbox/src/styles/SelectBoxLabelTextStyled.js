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

/** Prop Receivers */
const spacingProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const marginRight = getValueString(
    theme.reactackle.components.selectBox.label.labelTooltipSpacing,
  );

  return `
    margin-right: ${marginRight};
  `;
};

/** STYLES */
export const SelectBoxLabelTextStyled = styled.span`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${spacingProps};
`;

SelectBoxLabelTextStyled.propTypes = propTypes;
SelectBoxLabelTextStyled.displayName = 'SelectBoxLabelTextStyled';
