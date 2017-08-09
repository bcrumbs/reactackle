import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const positionMap = {
  top: {
    order: 1,
    opposite: 'bottom',
  },
  bottom: {
    order: 3,
    opposite: 'top',
  },
};

const align = ({ labelAlign }) => `text-align: ${labelAlign};`;

const position = ({
  labelPositionY,
  progressType,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const labelPadding =
    theme.reactackle.components.progress.circle.labelCenteredPadding;

  const spacing = labelPositionY !== 'center'
    ? theme.reactackle.components.progress[progressType]
      .labelSpacing[labelPositionY]
    : null;

  return labelPositionY !== 'center'
  ? css`
    order: ${positionMap[labelPositionY].order};
    margin-${positionMap[labelPositionY].opposite}: ${getValueString(spacing)};
  `
  : `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: ${getValueString(labelPadding)};
    word-wrap: break-word;
  `;
};

export const LabelWrapperStyled = styled.div`
  ${align}
  ${position}
`;

LabelWrapperStyled.displayName = 'LabelWrapperStyled';
