import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.alertsArea.item.actions;

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)}; 
  `;
};

export const ActionsStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  ${style}
`;
