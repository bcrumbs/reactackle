import styled from 'styled-components';
import { elementInvisible } from 'reactackle-core';

export const CheckboxInputStyled = styled.input`
  ${/* Prettier workaround until issue is not fixed:
   https://github.com/prettier/prettier/issues/2291 */ ''};
  ${elementInvisible};
`;

CheckboxInputStyled.displayName = 'CheckboxInputStyled';
