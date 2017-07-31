import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const TextFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  ${base};
`;

TextFieldStyled.displayName = 'TextFieldStyled';
