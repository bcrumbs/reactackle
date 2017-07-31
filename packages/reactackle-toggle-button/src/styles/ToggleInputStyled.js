'use strict';

import styled from 'styled-components';
import { elementInvisible } from 'reactackle-core';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const ToggleInputStyled = styled.input`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${elementInvisible};
`;

ToggleInputStyled.propTypes = propTypes;
ToggleInputStyled.defaultProps = defaultProps;
ToggleInputStyled.displayName = 'ToggleInputStyled';
