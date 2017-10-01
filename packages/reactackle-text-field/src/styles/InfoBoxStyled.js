import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString, media } from 'reactackle-core';

const propTypes = {
  /**
   * Full-width TextField doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If textfield is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  /**
   * Define label position
   */
  labelPosition: PropTypes.oneOf(['top', 'side']),
  /**
   * Add icon behind textfield
   */
  iconOuter: PropTypes.object,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  dense: false,
  labelPosition: 'top',
  iconOuter: null,
};

/** PROP RECEIVERS */
const offset = ({
  theme: themeFromProvider,
  labelPosition,
  dense,
  fullWidth,
  iconOuter,
  bordered,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const labelPositionSide =
      theme.reactackle.components.textfield.label.positionSide,
    labelPositionSideSizeType = bordered ? 'bordered' : 'underlined',
    labelPositionSideSize = labelPositionSide.size[labelPositionSideSizeType],
    iconOuterPath = theme.reactackle.components.textfield.iconOuter;

  let labelSizeSource = labelPositionSideSize;
  let iconSizeSource = iconOuterPath.size;

  if (dense && !fullWidth) {
    labelSizeSource = labelPositionSideSize.dense;
    iconSizeSource = iconOuterPath.size.dense;
  } else if (dense && fullWidth) {
    labelSizeSource = labelPositionSideSize.denseFullWidth;
    iconSizeSource = iconOuterPath.size.denseFullWidth;
  } else if (!dense && fullWidth) {
    labelSizeSource = labelPositionSideSize.fullWidth;
    iconSizeSource = iconOuterPath.size.fullWidth;
  }

  const labelSpacing = getValueString(labelSizeSource.labelSpacing),
    iconSpacing = getValueString(iconOuterPath.iconSpacing),
    boxSize = getValueString(iconSizeSource.boxSize),
    width = getValueString(labelPositionSide.width),
    iconOffset = iconOuter ? `calc(${boxSize} + ${iconSpacing})` : 0;

  const breakpoints = labelPositionSide.breakpoints.map(item => {
    const width = getValueString(item.width);

    return css`
      ${media(item.breakpoint)`
        padding-left: calc(${width} + ${labelSpacing} + ${iconOffset});
      `}
    `;
  });

  const defaultOffset = `calc(${width} + ${labelSpacing} + ${boxSize})`;

  return labelPosition === 'side'
    ? css`
      padding-left: ${defaultOffset};
      ${breakpoints};
    `
    : iconOffset && `padding-left: ${iconOffset};`;
};

/** STYLES */
export const InfoBoxStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  ${offset};
`;

InfoBoxStyled.propTypes = propTypes;
InfoBoxStyled.defaultProps = defaultProps;
InfoBoxStyled.displayName = 'InfoBoxStyled';
