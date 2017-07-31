'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  theme: PropTypes.object,
};

/** Prop Receivers */
const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.sidebar.toggleButton.content;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

/** Styles */
export const ToggleContentStyled = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  ${base} ${transition('opacity')};
`;

ToggleContentStyled.propTypes = propTypes;
ToggleContentStyled.displayName = 'ToggleContentStyled';
