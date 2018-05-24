import styled from 'styled-components';

export const MenuItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: stretch;
  position: relative;
  user-select: none;
  
  &:focus {
   outline: none
 }
`;

MenuItemStyled.displayName = 'MenuItemStyled';
