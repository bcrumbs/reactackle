import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const propTypes = {
  disabled: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
};

/** PROP RECEIVERS */
const stateProp = ({ disabled }) => disabled && 'cursor: default;';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

/** STYLES */
export const ToggleStyled = styled.div`
  ${base};
  ${stateProp};
`;

ToggleStyled.propTypes = propTypes;
ToggleStyled.defaultProps = defaultProps;
ToggleStyled.displayName = 'ToggleStyled';
