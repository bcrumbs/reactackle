import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const borderRadius = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    borderRadius,
  } = theme.reactackle.components.tag;

  return css`
    border-radius: ${getValueString(borderRadius)};
  `;
};

const colorScheme = ({
  theme: themeFromProvider,
  bgColorCustom,
  textColorCustom,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    backgroundColor,
    textColor,
  } = theme.reactackle.components.tag;

  return css`
    background-color: ${bgColorCustom || backgroundColor};
    color: ${textColorCustom || textColor};
  `;
};

const fontStyle = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
  } = theme.reactackle.components.tag;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
  `;
};

const align = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const { alignY } = theme.reactackle.components.tag.content;

  return css`
    align-items: ${ALIGN_MAP[alignY]};
  `;
};

export const TagStyled = styled.div`
  display: inline-flex;
  vertical-align: middle;
  user-select: none;
  max-width: 100%;
  ${fontStyle}
  ${colorScheme}
  ${borderRadius}
  ${align}
  ${transition('background-color, color, opacity')}
`;
