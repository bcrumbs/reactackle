import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider, progressType }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    fontWeight,
  } = theme.reactackle.components.progress[progressType].valueLabel;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
  `;
};

export const ValueLabelStyled = styled.label`
  display: block;
  ${style}
`;

ValueLabelStyled.displayName = 'ValueLabelStyled';
