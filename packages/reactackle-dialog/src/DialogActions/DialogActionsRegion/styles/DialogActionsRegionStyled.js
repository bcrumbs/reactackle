'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  alignLeft: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  alignLeft: false,
};

/** Prop Receivers */
const align = ({ alignLeft }) =>
  alignLeft
    ? `
    text-align: left;
    justify-content: flex-start;
  `
    : `
    text-align: right;
    justify-content: flex-end;
  `;

const childrenSpacing = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { marginX, marginY } = theme.reactackle.components.dialog.actionItem;

  return `
    & > * {
      margin: ${getValueString(marginY)} ${getValueString(marginX)};
    }
  `;
};

/** Styles */
export const DialogActionsRegionStyled = styled.div`
  flex-grow: 1;
  display: flex;
  margin: 0 !important;
  ${align} ${childrenSpacing};
`;

DialogActionsRegionStyled.propTypes = propTypes;
DialogActionsRegionStyled.defaultProps = defaultProps;
DialogActionsRegionStyled.displayName = 'DialogActionsRegionStyled';
