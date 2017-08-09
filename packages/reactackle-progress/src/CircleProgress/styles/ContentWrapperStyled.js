import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, customDiameter }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    diameter,
  } = theme.reactackle.components.progress.circle;

  return css`
    width: ${getValueString(customDiameter || diameter)};
    height: ${getValueString(customDiameter || diameter)};
  `;
};

export const ContentWrapperStyled = styled.div`
  margin: 0 auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  order: 2;
  ${style}
`;

ContentWrapperStyled.displayName = 'ContentWrapperStyled';
