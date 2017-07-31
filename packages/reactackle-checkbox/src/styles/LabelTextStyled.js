'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  hasTooltip: PropTypes.bool,
};

const defaultProps = {
  hasTooltip: void 0,
};

const spacing = ({ theme: themeFromProvider, hasTooltip }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { labelTooltipSpacing } = theme.reactackle.components.checkbox.label;

  return hasTooltip
    ? ` padding-right: ${getValueString(labelTooltipSpacing)};`
    : '';
};

export const LabelTextStyled = styled.span`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${spacing};
`;

LabelTextStyled.displayName = 'LabelTextStyled';
LabelTextStyled.propTypes = propTypes;
LabelTextStyled.defaultProps = defaultProps;
