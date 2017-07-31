import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const propTypes = {
  labelPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  labelPosition: 'left',
  disabled: false,
};

/** PROP RECEIVERS */
const positionProps = ({ labelPosition }) => {
  const spacingLeft = labelPosition === 'left' || !labelPosition ? 'auto' : '0',
    spacingRight = labelPosition === 'left' ? '0' : 'auto';

  return `
    left: ${spacingLeft};
    right: ${spacingRight};
  `;
};

const sizeProps = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { width } = theme.reactackle.components.toggleButton.toggleBar,
    { size } = theme.reactackle.components.toggleButton.toggleThumb;

  return `
    width: ${getValueString(width)};
    height: ${getValueString(size)};
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
export const ToggleBarBoxStyled = styled.div`
  position: absolute;
  top: 0;
  ${positionProps};
  ${sizeProps};
  ${disabled};
`;

ToggleBarBoxStyled.propTypes = propTypes;
ToggleBarBoxStyled.defaultProps = defaultProps;
ToggleBarBoxStyled.displayName = 'ToggleBarBoxStyled';
