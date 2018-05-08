import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
} from 'reactackle-core';

const style = ({ theme: themeFromProvider, iconColor }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
    color,
    opacity,
  } = theme.reactackle.components.tag.icon;

  return css`
    color: ${iconColor || color};
    opacity: ${opacity};
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight || height),
    )}
  `;
};

export const IconStyled = styled.span`
  ${style}
`;
