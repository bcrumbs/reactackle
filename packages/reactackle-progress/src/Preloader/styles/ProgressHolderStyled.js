import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const alignXMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const alignYMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const align = ({ alignX, alignY }) => `
  align-items: ${alignYMap[alignY]};
  justify-content: ${alignXMap[alignX]};
`;

const style = ({ theme: themeFromProvider, customHeight, customWidth }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    backgroundColor,
    loaderMaxWidth,
    height,
    width,
  } = theme.reactackle.components.progress.preloader;

  return css`
    background-color: ${backgroundColor};
    width: ${getValueString(customWidth || width)};
    height: ${getValueString(customHeight || height)};
    
    & > * {    
      max-width: ${getValueString(loaderMaxWidth)};
    }
  `;
};

export const ProgressHolderStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  pointer-events: none;
  display: flex;
  ${style}
  ${align}
  
  & > * {
    width: 100%;
  }
`;

ProgressHolderStyled.displayName = 'ProgressHolderStyled';
