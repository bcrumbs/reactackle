import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  disabled: false,
};

/** PROP RECEIVERS */
const labelSize = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { width } = theme.reactackle.components.toggleButton.toggleBar,
    { size } = theme.reactackle.components.toggleButton.toggleThumb;

  return `
    min-width: ${getValueString(width)};
    min-height: ${getValueString(size)};
  `;
};

const disabled = ({ disabled }) =>
  disabled
    ? `
      &,
      & * {
        cursor: default;
      }
    `
    : `
      &,
      & * {
        cursor: pointer;
      }
    `;

/** STYLES */
export const ToggleLabelStyled = styled.label`
  position: relative;
  display: block;
  user-select: none;
  ${labelSize};
  ${disabled};

  &:hover,
  &:focus {
    outline: none;
  }
`;

ToggleLabelStyled.propTypes = propTypes;
ToggleLabelStyled.defaultProps = defaultProps;
ToggleLabelStyled.displayName = 'ToggleLabelStyled';
