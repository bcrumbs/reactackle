import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const font = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
  } = theme.reactackle.components.menu.item;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight}; 
  `;
};

const offset = ({
  addImageOffset,
  addIconOffset,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const iconPath = theme.reactackle.components.menu.item.iconLeft;
  const imgPath = theme.reactackle.components.menu.item.image;

  const offset = [
    addIconOffset && [
      getValueString(iconPath.width),
      getValueString(iconPath.marginLeft),
      getValueString(iconPath.marginRight),
    ].join(' + '),
    addImageOffset && [
      getValueString(imgPath.width),
      getValueString(imgPath.marginLeft),
      getValueString(imgPath.marginRight),
    ].join(' + '),
  ];

  return addIconOffset || addImageOffset
    ? `padding-left: calc(${offset.filter(Boolean).join(' + ')});`
    : null;
};

export const TextPrimaryStyled = styled.div`
  color: currentColor;
  ${font}
  ${offset}
  ${transition('color')}
`;

TextPrimaryStyled.displayName = 'TextPrimaryStyled';
