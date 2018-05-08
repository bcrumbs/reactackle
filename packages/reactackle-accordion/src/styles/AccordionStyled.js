import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const separator = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    style,
    color,
    thickness,
  } = theme.reactackle.components.accordion.separator;

  return css`
    border-top: ${getValueString(thickness)} ${style} ${color};
  `;
};

export const AccordionStyled = styled.dl`
  width: 100%;
  
  > dd + dt {
    ${separator}
  }
`;

AccordionStyled.displayName = 'AccordionStyled';
