import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    width,
    height,
    marginLeft,
    marginRight,
    borderRadius,
  } = theme.reactackle.components.menu.item.image;

  return css`
    width: ${getValueString(width)};
    height: ${getValueString(height || width)};
    margin-left: ${getValueString(marginLeft)};
    margin-right: ${getValueString(marginRight)};
    border-radius: ${getValueString(borderRadius)};
  `;
};

export const ImageStyled = styled.div`
  overflow: hidden;
  position: relative;
  background-size: cover;
  ${size}
`;

ImageStyled.displayName = 'ImageStyled';
