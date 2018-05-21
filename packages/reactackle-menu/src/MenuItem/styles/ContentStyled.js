import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const offset = ({
  nestingLevel,
  addImageOffset,
  addIconOffset,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.menu.item;
  const iconPath = path.iconLeft;
  const imgPath = path.image;
  const levelOffset = path.levelOffset;

  const offset = [
    addIconOffset && [
      getValueString(iconPath.width || iconPath.height),
      getValueString(iconPath.marginLeft),
      getValueString(iconPath.marginRight),
    ].join(' + '),
    addImageOffset && [
      getValueString(imgPath.width),
      getValueString(imgPath.marginLeft),
      getValueString(imgPath.marginRight),
    ].join(' + '),
    nestingLevel && (
      typeof levelOffset === 'string'
        ? `${levelOffset} * ${nestingLevel}`
        : `${levelOffset * nestingLevel}px`
    ),
  ];

  return addIconOffset || addImageOffset || nestingLevel
    ? `padding-left: calc(${offset.filter(Boolean).join(' + ')});`
    : null;
};

export const ContentStyled = styled.div`
  flex-grow: 1;
  ${offset}
`;

ContentStyled.displayName = 'ContentStyled';
