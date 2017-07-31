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

const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { paddingX, paddingY } = theme.reactackle.components.dialog.actions;

  const { marginX, marginY } = theme.reactackle.components.dialog.actionItem;

  const py =
    typeof paddingY === 'number' && typeof marginY === 'number'
      ? `${paddingY - marginY}px`
      : `calc(${getValueString(paddingY)} - ${getValueString(marginY)})`;

  const px =
    typeof paddingX === 'number' && typeof marginX === 'number'
      ? `${paddingX - marginX}px`
      : `calc(${getValueString(paddingX)} - ${getValueString(marginX)})`;

  return `
    padding: ${py} ${px};

    > * {
      margin: ${getValueString(marginX)} ${getValueString(marginY)};
    }
  `;
};

export const DialogActionsStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  ${baseProps};
`;

DialogActionsStyled.propTypes = propTypes;
DialogActionsStyled.displayName = 'DialogActionsStyled';
