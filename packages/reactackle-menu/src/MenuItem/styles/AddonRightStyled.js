import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    marginLeft,
    marginRight,
  } = theme.reactackle.components.menu.item.addonRight;

  return css`
    margin: 0 ${getValueString(marginLeft)} 0 ${getValueString(marginRight)};
  `;
};

export const AddonRightStyled = styled.div`
  ${size}
`;

AddonRightStyled.displayName = 'AddonRightStyled';
