'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString, media } from 'reactackle-core';

const propTypes = {
  dense: PropTypes.bool,
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  dense: false,
};

/** Prop Receivers */
const offset = ({
  theme: themeFromProvider,
  labelPosition,
  dense,
  fullWidth,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const labelPositionSide =
      theme.reactackle.components.selectBox.label.positionSide,
    styleKey = bordered ? 'bordered' : 'underlined',
    labelPositionSideSize = labelPositionSide.size[styleKey];

  let labelSizeSource = labelPositionSideSize;

  if (dense && !fullWidth) labelSizeSource = labelPositionSideSize.dense;
  else if (dense && fullWidth)
    labelSizeSource = labelPositionSideSize.denseFullWidth;
  else if (!dense && fullWidth)
    labelSizeSource = labelPositionSideSize.fullWidth;

  const labelSelectSpacing = getValueString(labelSizeSource.labelSelectSpacing);

  const breakpoints = labelPositionSide.breakpoints.map(item => {
    const offset = `calc(${getValueString(
      item.width,
    )} + ${labelSelectSpacing})`;

    return css`
      ${media(item.breakpoint)`
        padding-left: ${offset};
      `}
    `;
  });

  const defaultOffset = `calc(${getValueString(
    labelPositionSide.width,
  )} + ${labelSelectSpacing})`;

  return (
    labelPosition === 'side' &&
    css`
      padding-left: ${defaultOffset}px;
      ${breakpoints};
    `
  );
};

/** STYLES */
export const SelectBoxInfoBoxStyled = styled.div`
  display: flex;
  ${offset};
`;

SelectBoxInfoBoxStyled.propTypes = propTypes;
SelectBoxInfoBoxStyled.defaultProps = defaultProps;
SelectBoxInfoBoxStyled.displayName = 'SelectBoxInfoBoxStyled';
