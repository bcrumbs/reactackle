import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
  transition,
} from 'reactackle-core';

const opened = ({ opened }) => opened
  ? 'transform: rotate(90deg);'
  : 'transform: rotate(0deg);';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
  } = theme.reactackle.components.menu.item.expandButton.icon;

  return css`    
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight),
    )}
  `;
};

export const ExpandIconStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: inherit;
  width: inherit;
  align-items: center;
  display: flex;
  ${opened}
  ${size}
  ${transition('transform')}
`;

ExpandIconStyled.displayName = 'ExpandIconStyled';
