'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  hasTooltip: PropTypes.bool,
};

const defaultProps = {
  hasTooltip: PropTypes.bool,
};

const spacing = ({ theme: themeFromProvider, hasTooltip }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { labelTooltipSpacing } = theme.reactackle.components.checkbox.label;

  return hasTooltip
    ? `
      & > *:last-child {
        margin-left: ${getValueString(labelTooltipSpacing)};
      }
    `
    : '';
};

export const LabelElementStyled = styled.span`
  display: flex;
  ${spacing};
`;

LabelElementStyled.displayName = 'LabelElementStyled';
LabelElementStyled.propTypes = propTypes;
LabelElementStyled.defaultProps = defaultProps;
