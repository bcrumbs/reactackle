import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

/** PROP RECEIVERS */
const baseProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
      fontSize,
      lineHeight,
    } = theme.reactackle.components.toggleButton.label,
    size = `calc(${getValueString(fontSize)} * ${lineHeight})`;

  return `
    height: ${size};
  `;
};

/** STYLES */
export const ToggleTooltipBoxStyled = styled.span`
  display: flex;
  align-items: center;
  ${baseProps};
`;

ToggleTooltipBoxStyled.propTypes = propTypes;
ToggleTooltipBoxStyled.displayName = 'ToggleTooltipBoxStyled';
