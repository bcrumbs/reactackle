'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault } from 'reactackle';

import {
  halfBaseModule,
  oneAndHalfBaseModule,
  colorSecondary,
} from '../../../../theme/styleHelpers';

const propTypes = {
  theme: PropTypes.object,
};

const defaultProps = {
  theme: {},
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const backgroundColor = colorSecondary(theme),
    paddingY = halfBaseModule(theme),
    paddingX = oneAndHalfBaseModule(theme);
  
  return css`
    background-color: ${backgroundColor};
    padding: ${paddingY}px ${paddingX}px;
  `;
};

/** STYLES */
export const LabelStyled = styled.span`
    ${base}
`;

LabelStyled.propTypes = propTypes;
LabelStyled.defaultProps = defaultProps;
LabelStyled.displayName = 'LabelStyled';
