import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  tooltip: PropTypes.string,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  tooltip: '',
};

/** PROP RECEIVERS */
const spacing = ({ theme: themeFromProvider, hasTooltip }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    labelTooltipSpacing,
  } = theme.reactackle.components.toggleButton.label;

  return hasTooltip
    ? `margin-right: ${getValueString(labelTooltipSpacing)};`
    : '';
};

/** STYLES */
export const ToggleLabelTextStyled = styled.span`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${spacing};
`;

ToggleLabelTextStyled.propTypes = propTypes;
ToggleLabelTextStyled.defaultProps = defaultProps;
ToggleLabelTextStyled.displayName = 'ToggleLabelStyled';
